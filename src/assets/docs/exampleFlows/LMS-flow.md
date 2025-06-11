
# Integrated Platform for Loan Management

When a customer applies for and receives a loan, it involves managing their data, maintaining loan ledger entries, tracking the remaining balance, and handling all related details. We are building an integrated platform to handle all these processes efficiently.

---

## Data Services and their functions

### 1. Data Service – Customer

Its a data service(DS) which can have all possible customer information with the right datatype. It consists of the following fields :

- **`Customer ID`** – Primary default identifier
- **`Full Name`** – Required Text field
- **`Date of Birth`** – Required date field
- **`Gender`** – List of Text Values
- **`Marital Status`** – List of Text Values
- **`Nationality`** – Text field
- **`Resident State`** – List of Text values with North American States
- **`Phone Number`** – Required Text field
- **`Email`** – Required Email Field
- **`Govt Id Type`** – List of text Values
- **`Govt Id Number`** – Text value
- **`ID expiry Date`** – Date field
- **`Social Security Number`** – Required Text field
- **`KYC Status`** – list of values
- **`KYC Document Uploads`** – Collection of Files
- **`Bank Account Number`** – Number field
- **`Account Type`** – List of Text values
- **`Branch IFSC Code`** – Text field
- **`Account status`** – List of Text values
- **`Linked Accounts`** – Collection of numbers
- **`Annual Income`** – Currency fields
- **`Employment status`** – List of Text values
- **`Employer name`** – Text field
- **`Designation`** – Text field
- **`Credit Score`** – Number field
- **`Existing Loans`** – Collection of relation of Loan ID’s from Loan Info system dataservice
- **`Relationship manager ID`** – Number field
- **`Verification Status`** – Required Boolean
- **`Validation message`** – Long text field

We also have an experience personalized for each step where we include a “Validate & Verify” tab

**Author config image**:  
<p align="center">
  <img src="/app/assets/docs/images/LMS1.png" alt="agents">
</p>

**AppCenter looks like**:  
<p align="center">
  <img src="/app/assets/docs/images/LMS2.png" alt="agents">
</p>

**Experience Hooks**:  
We add a experience hook “validateCustomer” by adding a datapipe for the same which validates few of the customer infos. This pipe is added as part of experience hook, so on clicking on the “validate” button from the appcenter, this datapipe is called, which collects all the entered data, parses to a json format, validated fields like emailid, phone, DOB, SSN and returns the errors in the validationMessage field of the data service entry.

**PreHooks**:  
We also add a prehook called “customerMasking” which will mask the SSN first few values. Since this datapipe is a prehook, its called right before the customer data is saved and hence the saved record will have masked SSN.

---

### 2. Data Service – Loan Information System

This data service will have all information from a loan application. We have included the following fields :

- **`Loan Id`** – Primary identifier
- **`Customer ID`** – Required Relation field from above Cust ID
- **`Loan account Number`** – text field
- **`Loan Product type`** – List of Text values of what type of loan it is
- **`Application Date`** – Date field
- **`Principal Amount`** – Required Currency field
- **`Annual Interest rate`** – Required Number field
- **`Tenure`** – Number field
- **`Total Outstanding`** – Currency
- **`Credit Score`** – Required Number field
- **`Yearly Income`** – Required Currency
- **`Collateral Details`** – Text
- **`Status`** – List of Text Values
- **`Rejection Reason`** – Long Text
- **`Loan Start Date`** – Date
- **`Max Loan Amount`** – Currency
- **`Verification Status`** – Boolean
- **`Validation Message`** – Long Text

We also have an experience personalized for each step where we include a “Validate & Verify” tab as well.

**Experience Hooks**:  
We add a experience hook “validateLIS” by adding a datapipe for the same which validates few of the customer infos. This pipe is added as part of experience hook, so on clicking on the “validate” button from the appcenter, this datapipe is called, which validates the credit score, interest rate, (If credit score is < 700, interest rate has to be >= 10%, If credit score is >= 700, interest rate is <= 5%) yearly income(Must be > USD 100,000) and returns the errors in the validationMessage field of the data service entry.

**PreHooks**:  
We also add a prehook called “lisOutstandingUpdator” which is called right after the save is clicked and before the record is published. It updates the field “Total Outstanding” with Principal amount entered.

---

### 3. Data Service – Payment Ledger

This data service is records of payment entries(like a passbook, but for the loan accounts). It has the following attributes :

- **`Transaction ID`** – Primary ID
- **`Account Number`** – Relation Field of Loan account Number from LIS dataservice
- **`Payment Date`** – Date field
- **`Amount`** – Currency field
- **`Payment Method`** – List of Text Values
- **`Remarks`** – Text Field

**PreHooks**:  
We also add a prehook called “validateLedger” which is called right after the save is clicked and before the record is published. This validates if its a valid account number that is present in the Loan Information System data service records.

**Note** - The account number is a relation field from the LIS which means it has to be a valid account number. But prehook is just to show the capability that validations are possible and skipping this prehook will still have this integration in working mode.

### 4. Loan Payment Tracker

Its a read-only dataservice for the user. Every time a payment ledger entry is made, the respective loan information is updated here. It has the following dataservices:

* **Payment Tracker ID** - Primary identifier
* **Transaction ID** - Relation field of Transaction ID from Payment Ledger DS
* **Customer ID** - Relation field of Customer ID from Customer DS
* **Loan Account Number** - Relation Field of Loan Account Number from LIS DS
* **Outstanding Amount** - Currency field

---

# Data Pipes and their details

## 1. validateCustomer

This data pipe is an experience hook of the 'Customer' dataservice. It has these nodes and the flow looks like this:

<p align="center">
  <img src="/app/assets/docs/images/LMS3.png" alt="agents">
</p>

The `https_server` node is where the request lands when the experience hook is called (on clicking on validate button in Customer DS).

The `parse_json` node that is connected next is to parse the buffer data that is received from the https\_server. We map data to data. We select the 'Customer' DS as the output parameter (data format with Customer Object data type) as we will be using it in our next nodes for validation.

The next node is a `codeblock` where we do all validations. For this node, we map data to data and the output parameter we have a custom data format (statusCode-Number, data-Text) to return a statusCode and validation messages to the next node. The code block validates Email, SSN, DOB, Phone Number and if any error, the same is pushed into the validationMessage field. The codeblock looks like below:

```bash
//use logger for logging
async function executeCode(inputData, node, connectorConfig) {
  try {
    const errors = [];
    // Extract fields
    const email = inputData?.data?.data?.email;
    const ssn = inputData?.data?.data?.socialSecurityNumber;
    const dateOfBirth = inputData?.data?.data?.dateOfBirth?.rawData;
    const phoneNumber = inputData?.data?.data?.phoneNumber;
    console.log('Input Data is : ', inputData);

    // EMAIL VALIDATION
    if (!email) {
      errors.push('Email is required');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) errors.push('Invalid email format');
      if (!email.endsWith('.com')) errors.push('Only .com domains are allowed');
    }

    // SSN VALIDATION
    if (!ssn) {
      errors.push('Social Security Number (SSN) is required');
    }
    else {
      const cleanedSSN = ssn.replace(/\D/g, '');
      const ssnRegex = /^(?!000)(?!666)(?!9\d{2})\d{3}(?!00)\d{2}(?!0000)\d{4}$/;
      if (!ssnRegex.test(cleanedSSN)) {
        errors.push('Invalid SSN format.');
      }
      const invalidSSNs = [
        '078051120',
        '219099999'
      ];
      if (invalidSSNs.includes(cleanedSSN)) {
        errors.push('This SSN is invalid or restricted');
      }
    }

    // DOB VALIDATION
    if (!dateOfBirth) {
      errors.push('Date of birth is required');
    } else {
      const dob = new Date(dateOfBirth);
      if (isNaN(dob.getTime())) {
        errors.push('Invalid date format');
      } else {
        const now = new Date();
        let age = now.getUTCFullYear() - dob.getUTCFullYear();
        if (now.getUTCMonth() < dob.getUTCMonth() ||
          (now.getUTCMonth() === dob.getUTCMonth() && now.getUTCDate() < dob.getUTCDate())) {
          age--;
        }
        if (age < 18) errors.push('You must be at least 18 years old');
      }
    }

    // PHONE VALIDATION
    if (!phoneNumber) {
      errors.push('Phone number is required');
    } else {
      if (typeof phoneNumber !== 'string') {
        errors.push('Phone number must be a string');
      } else {
        const digitsOnly = phoneNumber.replace(/\D/g, '');
        if (digitsOnly.length < 10) errors.push('Phone number must have at least 10 digits');
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!phoneRegex.test(phoneNumber)) errors.push('Invalid phone format (Example: +14155550123)');
      }
    }

    if (errors.length > 0) {
      inputData.data.validationMessage = errors.join('\n');
      inputData.data.verificationStatus = false;
    } else {
      inputData.data.validationMessage = 'Validation Successfull';
      inputData.data.verificationStatus = true;
    }

    return {
      data: {
        statusCode: 200,
        data: inputData.data
      }
    };
  } catch (err) {
    console.error('Unexpected Error:', err.message);
    throw err;
  }
}
```

The next node is a `response` Node where we map:

* `data statusCode` (returned from codeblock) to `statusCode` where we configure `{{validation['data']['statusCode']}}`
* `data to data` where we configure:

```bash
{ data: {{ validation['data']['data'] }} }
```

This ensures what we returned is inserted to the right place, and also the Content-type is configured as `'application/json'`.

## 2. customerMasking

This data pipe is a prehook called from ‘Customer’ dataservice. Its purpose is to mask first 5 digits in the SSN field. The datapipe looks like:

<p align="center">
  <img src="/app/assets/docs/images/LMS4.png" alt="agents">
</p>

* The `http_server` node receives the request when a record for the customer DS is saved right before the record is published (prehook).
* The `parse_json` node that is connected next is to parse the buffer data received from the https\_server. We map data to data.
* The `codeblock` is the next node where the SSN masking code is written. Data-to-data mapping is done here. The code looks like:

```bash
async function executeCode(inputData, node, connectorConfig) {
  try {
    console.log("Input Data :", inputData.data);
    const data = inputData?.data?.data;
    if (data && data.socialSecurityNumber) {
      console.log('SSN before: ', data.socialSecurityNumber);
      const lastFourDigits = data.socialSecurityNumber.slice(-4);
      data.socialSecurityNumber = `***-**-${lastFourDigits}`;
      console.log('SSN after: ', inputData?.data?.data?.socialSecurityNumber);
    }
    return {
      data: inputData.data
    };
  } catch (err) {
    logger.error(err);
    throw err;
  }
}
```

* The next node is a `response` node where we map data to data, statusCode configured as `200` and Content-type configured as `'application/json'`

---

## 3. validateLIS

This datapipe is an experience hook for the LIS data service (DS). It is for validation of some fields in the LIS. The datapipe looks like:

<p align="center">
  <img src="/app/assets/docs/images/LMS5.png" alt="agents">
</p>

* The `https_server` node is where the request lands when the experience hook is called (on clicking on validate button in LIS DS).
* The `parse_json` node that is connected next parses the buffer data received from the https\_server. We map data to data. We select the ‘Loan Information Service’ DS as the output parameter (data format with LIS Object data type) as we will be using it in our next nodes for validation.
* The next node is a `codeblock` where we do all validations. For this node, we map data to data and the output parameter is a custom data format (statusCode-Number, data-Text) to return a statusCode and validation messages to the next node.

The code block looks like below:

```bash
async function executeCode(inputData, node, connectorConfig) {
  const errors = [];
  try {
    const creditScore = inputData?.data?.data?.creditScore;
    const annualInterestRate = inputData?.data?.data?.annualInterestRate;
    const yearlyIncome = inputData?.data?.data?.yearlyIncome;
    const status = inputData?.data?.data?.status;
    const rejectionReason = inputData?.data?.data?.rejectionReason;
    console.log('Input Data is : ', inputData);

    // Credit Score and Interest Rate Validation
    if (creditScore === undefined || creditScore === null) {
      errors.push('Credit score is required');
    } else {
      if (typeof creditScore !== 'number') {
        errors.push('Credit score must be numeric');
      } else if (creditScore < 300 || creditScore > 850) {
        errors.push('Credit score must be between 300-850');
      }
    }

    if (annualInterestRate === undefined || annualInterestRate === null) {
      errors.push('Interest rate is required');
    } else {
      if (typeof annualInterestRate !== 'number') {
        errors.push('Interest rate must be numeric');
      } else {
        if (creditScore < 700 && annualInterestRate < 10) {
          errors.push('Credit score <700 requires ≥10% interest rate');
        }
        if (creditScore >= 700 && annualInterestRate > 5) {
          errors.push('Credit score ≥700 requires ≤5% interest rate');
        }
      }
    }

    // Yearly Income Validation
    if (yearlyIncome === undefined || yearlyIncome === null) {
      errors.push('Yearly income is required');
    } else {
      if (typeof yearlyIncome !== 'number') {
        errors.push('Yearly income must be numeric');
      } else if (yearlyIncome < 100000) {
        errors.push('Yearly income must exceed 100,000');
      }
    }

    // Status and Rejection Reason Validation
    if (status === undefined || status === null) {
      errors.push('Loan Application Status is required');
    } else if (status === 'Rejected') {
      if (!rejectionReason ||
          typeof rejectionReason !== 'string' ||
          rejectionReason.trim() === '') {
        errors.push('Rejection reason required when status is Rejected');
      }
    }

    if (errors.length > 0) {
      inputData.data.validationMessage = errors.join('\n');
      inputData.data.verificationStatus = false;
    } else {
      inputData.data.validationMessage = 'Validation Successfull';
      inputData.data.verificationStatus = true;
    }

    return {
      data: {
        statusCode: 200,
        data: inputData.data
      }
    };
  } catch (err) {
    logger.error('Unexpected error:', err);
    throw err;
  }
}
```

* The last node is a `response` node where we map statusCode (returned from codeblock) to statusCode using `{{validation['data']['statusCode']}}`, data to data using `{ data: {{ validation['data']['data'] }} }`, and also set Content-type as `'application/json'`

## 4. lisOutstandingUpdator
This datapipe is a prehook which is called from the ‘Loan Information System’ dataservice to update its own “totalOutstanding” field. And the data pipe looks like : 

<p align="center">
  <img src="/app/assets/docs/images/LMS6.png" alt="agents">
</p> 

the `https_server` node receives the request when the LIS DS record is saved and right before the record entry is made. 

The `parse_json` node that is connected next, is to parse the bufferdata that is received from the https_server. We map data to data. 

The `codeblock` is where the code for updating the totalOutstanding field is present. Data-data mapping is done here . The code looks like : 

```bash
async function executeCode(inputData, node, connectorConfig) {
  try {
    console.log("Input Data :", inputData.data);
    const record = inputData?.data?.data;
    if (inputData?.data?.operation === "POST" && record) {
      console.log('Record : ', record);
      record["totalOutstanding"] = record.principalAmount;
      console.log('Record : ', record);
      console.log("Input Data :", inputData.data);
    }
    return {
      data: inputData.data
    };
  } catch (err) {
    logger.error(err.message);
    throw err;
  }
}
```

The next node is a response Node where we map data to data, statusCode configured as 200 and Content-type configured as 'application/json' 

---

## 5. validateLedger
Thie datapipe is a prehook called by “Payment ledger” DS. This datapipe validates for a proper account number and it looks like : 

<p align="center">
  <img src="/app/assets/docs/images/LMS7.png" alt="agents">
</p> 

The `https_server` node that receives the request when a Payment ledger record entry is made. 

The `parse_json` node that is connected next, is to parse the bufferdata that is received from the https_server. We map data to data. 

The `dataservice_list` with connection selected as Loan Informarion System. Data from previous node mapped to ‘filter’ with value  
```js
JSON.stringify( {'_id': {{parse_json_2['data']['data']['accountNumber']['_id']}} })
```
This is to get the account numbers list. We also configure the JWT token for this node. 

The next node is a ‘codeblock’ where we do all validations. For this node, we map data to data and the output parameter we have a custom data format (statusCode-Number, data-Text) to return a statuscode and validation messages to the next node. The code block validates for the account number field being present and if its valid one. The codeblock looks like below:

```bash
// use logger for logging
async function executeCode(inputData, node, connectorConfig) {
  try {
    let data = {};
    // Extract the record from inputData
    const record = inputData?.data;
    console.log('inputData :', inputData);
    console.log('Record :', record);
    // Check if record is empty or undefined
    if (!record || Object.keys(record)?.length === 0 || record?.length==0) {
      return {
        data: {
          data: 'Account not found',
          statusCode: 400
        }
      };
    }
    return {
      data: {
        data: record,
        statusCode: 200
      }
    };
  } catch (err) {
    logger.error(err.message);
    throw err;
  }
}
```

The last node is a response Node where we map statusCode to statusCode and data to data. 

---

## 6. loanTrackerUpdateFlow
This data pipe is a posthook called from Payment Ledger DS. It updates the ‘OutstandingAmount’ field in the LIS dataservice. The payment made will be deducted from total outstanding and same is updated. This also updates another dataservice “Loan Payment Tracker” and pushes the respective fieds. The datapipe looks like : 

<p align="center">
  <img src="/app/assets/docs/images/LMS8.png" alt="agents">
</p> 
The ‘https_server’ node that receives the request when a Payment ledger record entry is made. 

The ‘parse_json’ node that is connected next, is to parse the bufferdata that is received from the https_server. We map data to data. 

The ‘dataservice_list’ with connection selected as Loan Informarion System. Data from previous node mapped to ‘filter’ with value  
```js
JSON.stringify( {'_id': {{parse_json_2['data']['data']['accountNumber']['_id']}} })
```
This is to get the account numbers list. We also configure the JWT token for this node. 

‘codeblock’ is where we extract the respective fields and calculate the final outstanding. We have the output parameter as Loan Payment Tracker DS dataformat of object data type and map data to data. The code looks like:

```js
//use logger for logging
async function executeCode(inputData, node, connectorConfig) {
  try {
    console.log('Ledger data : ', node['parse_json']);
    console.log('Ledger data 2 : ', node['parse_json']['data']);
    console.log('Input data :', inputData.data[0]);
    const record = inputData.data[0];
    const transId = node['parse_json']['data']['docId'];
    const custId = record.customerId._id;
    const loanAccNumber = record._id;
    const finoutstandingAmount = record.totalOutstanding - (node['parse_json']['data']['data']['new']['amount']);
    return {
      data: {
        transactionId : {_id: transId},
        customerId : {_id: custId},
        loanAccountNumber : {_id: loanAccNumber},
        outstandingAmount : finoutstandingAmount
      }
    };
  } catch(err) {
    logger.error(err);
    throw err;
  }
}
```

The next key node is ‘dataservice_post’ node which inserts a record entry into “Loan Payment tracker” data service and the same is selected as a connection here. The fields returned by the codeblock are of the same format as this data service. We map data to data. 

The ‘dataservice_update_one’ node is mainly to update only one node(LIS) field. We select the connection as LIS. In this mapping, we map from the codeblock’s fields. `_id` from the Loan Account Number is mapped to update one node’s id. `Outstanding Amount` from codeblock is mapped to current node’s `Total Outstanding`. A token is configured as well.

The next node is a response Node where we map data to data, statusCode configured as 200 and Content-type configured as 'application/json'

---

## 7. natsPublisher
This data pipe, receives a request and publishes into a NATS server. The data pipe looks like:  

<p align="center">
  <img src="/app/assets/docs/images/LMS9.png" alt="agents">
</p>  
The ‘https_server’ node which receives the https request. This request can be sent via postman with Payment Ledger record entry JSON i.e.,

```json
{
  "accountNumber": {
    "_id": "LOA1031"
  },
  "paymentDate": "2024-09-01T22:42:43.038Z",
  "amount": 1000,
  "paymentMethod": "Cash",
  "remarks": "Loan Queue Interaction check"
}
```

`_id` field to be taken from "Loan information system" data service's "loan ID" field.

Now this data is pushed to the NATS publisher. 

The ‘nats_publisher’ node receives the data from the previous node. Connection to be selected as the configured NATS connection. Data to be mapped to data. Queue to be configured with a queue name for eg `payment-ledger`.

---

## 8. natsListener
This data pipe listens from the queue and takes the data and does the requested action. Here we take the data from the queue and use it to insert a record into “Payment Ledger” DS. The data pipe looks like:  

<p align="center">
  <img src="/app/assets/docs/images/LMS10.png" alt="agents">
</p> 
The ‘nats_subscriber’ node needs to receive data from the queue, hence the input parameter ‘Queue’ will be the above configured queue name `payment-ledger`. Client ID is a string that uniquely identifies your client connection to the NATS server.

‘parse_json’ node is to convert the received buffer data into readable JSON format. The output format is “Payment Ledger” DS as dataformat. And we map data to data. 

‘dataservice_post’ node selects connection as the same “Payment ledger” DS. Maps data to data and configures token. 

On sending a request to nats publisher which will publish the data in queue and the nats listener listens to the same data and does a different action, is how we make use of queueing in pipes. So when this is done, a ledger entry is created, payment tracker data service record is created, outstanding amount in LIS is also updated.

---

### FLOW explained as a gist
Customer records are added to customer dataservice. They’re validated and stored.  

Loan Information System records are added and they are also validated.  

Loan Payment Ledger entry is made (via a record or nats queue) when some loan amount is repaid. It in turn updates the LIS dataservice and Loan Tracker dataservice with the respective data.  
