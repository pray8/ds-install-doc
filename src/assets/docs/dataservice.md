# DNIO Data Services Overview

DNIO's Data Services provide a powerful and intuitive way to interact with MongoDB collections, offering instant CRUD (Create, Read, Update, Delete) APIs out-of-the-box. This feature significantly reduces the time and effort required to build backend functionalities that rely on data storage and retrieval.

---

## Exploring the Data Services Interface

Let's walk through the different tabs within the Data Services configuration in the Author Page:

### 1. Design: Define Your Data Model

- The **Design** tab is where the schema (structure) of the data within the MongoDB collection is defined.
- ### Attributes: The Building Blocks
  - The main area of the Design tab lists the Attributes defined for the Data Service. Attributes are essentially the fields or columns of the data records.
  - In the sampleexample screenshot, attributes like ID, name, and place are defined.
  - New attributes can be added by clicking the "+ Add Attribute" button.
- ### Configuring Attributes (Basic Properties Panel)
  - When an existing attribute is selected or a new one is added, a side panel appears labelled "Basic Properties".
  - This panel enables configuration of the specific details of the selected attribute. Key configurations include:
    - Key / Name: This is the unique identifier for the attribute within the Data Service schema. It serves as the programmatic name for referencing this piece of data.
    - Type: This is the most critical setting. It defines the kind of data that the attribute can store. Below are the variety of available types to choose from:
      - *Text*: For storing text strings. Subtypes shown include standard Text, Long Text (for larger amounts of text), Rich Text (likely for formatted text), Email (text specifically for email addresses), and List of values (allowing selection from a predefined list of text options).
      - *Number*: For storing numerical data. Subtypes include general Number, List of values (for predefined numbers), and Currency (for numerical values representing monetary amounts).
      - *True / False*: For storing boolean values (true or false).
      - *Date / Date & Time*: For storing date-only or date-and-time values.
      - *Group*: Likely used to group related attributes together logically within the design.
      - *Collection*: Possibly for storing arrays or lists of values or sub-objects within a single attribute.
      - *Location*: For storing geographical location data.
      - *File*: For linking or embedding file attachments with a record.
      - *User*: For referencing platform users.
      - *Relation*: This is a powerful type used to create links or relationships between records in different Data Services within the same App. The "Relates To" dropdown allows selection of the target Data Service (e.g., accounts, hsbc, etc.) that this attribute will link to. This enables building relationships between different data entities in the App. The relation can be configured as Required, Unique, etc.
    - *Validations and Advanced Properties*:
      - Below the basic properties, the panel shows sections for Validations (like Pattern using Regular Expressions, Min Length, Max Length). These enable setting rules for the data entered into the attribute at runtime, ensuring data quality.
      - Advance Properties and Default Value options are also visible, offering further control over attribute behavior.

<p align="center">
  <img src="/app/assets/docs/images/dataservice_0.png" alt="dataservice">
  Demonstration - 01
</p>

### 2. Integration : Implement Data Hooks

- The Integration tab enables configuration of Data Hooks, which are custom logic points that execute during data operations.
- Pre hooks: These hooks are invoked before data is created or edited. They are useful for externalizing actions, performing validations, or enriching data before it's saved.
- Post hooks: These hooks are invoked after data operations, enabling triggering of notifications, updating of related data, or performing other post-processing tasks.
- Review Hooks: These seem related to workflow or approval processes before data changes are finalized.
- Submit, Approve, Reject, Rework, Discard: These options under "Review hooks" suggest the ability to implement a data review and approval workflow directly within the Data Service.

### 3. Experience : Configure the State Model

- The Experience tab, specifically the State Model section, enables defining a state machine for the data.
- This is particularly useful for managing data that goes through different stages or statuses.
- Attributes can be configured to track the state of the data and define the possible transitions between states.
- The interface provides the option to "Choose existing attribute or create one..." to serve as the state indicator.

### 4. Roles : Manage Access Control

- The Roles tab is crucial for implementing role-based access control (RBAC) for the Data Service.
- Different roles (e.g., "Manage", "View") can be defined.
- For each role, permissions on the data can be specified, such as:
  - Manage: Full CRUD access.
  - View: Read-only access.
  - Create: Ability to create new records.
  - Edit: Ability to modify existing records.
  - Delete: Ability to remove records.
- Dynamic Filters: (Mentioned under "PERMISSION") This suggests the ability to define dynamic rules to further restrict data access based on specific criteria.

### 5. Settings: Fine-tune Data Service Behaviour

- The Settings tab provides various options to customize the behaviour of the Data Service:
  - Soft Delete: Enabling this marks records as deleted without permanently removing them, preserving data history and enabling potential recovery.
  - Track and store changes of data history: Enabling this keeps a log of all modifications made to the data, providing an audit trail. Versions and the duration for which history is retained can be viewed.
  - Simple Date/Retain data by: These settings likely control how dates are handled and for how long data is retained.
  - Insights Settings: The option to "Disable Insights" is available, suggesting DNIO provides some level of data insights or analytics that can be toggled.

### 6. YAML : View and Edit the Underlying Configuration

- The YAML tab provides a low-level view of the Data Service configuration in YAML format.
- This is useful for advanced users who want to directly inspect or modify the service definition.
- It outlines metadata, specifications (including container details, ports, and environment variables), and potentially other configuration aspects.

### 7. Audit : Track Data Service Activity

- The Audit tab provides a log of actions performed on the Data Service, such as data creation, modification, and deletion.
- TIMESTAMP: Records the time of the event.
- DATA: Shows details of the data involved in the event (e.g., "2 fields," "5 fields," "27 fields" indicating the number of fields affected).
- Features like "Purge Audit," "Columns" selection, and "Filter" enable effective management and analysis of the audit logs.

---

### 1. How to create and deploy a new Data Services 

● Login to the datanimbus.io Studio. You will be directed to the Data Services page by default.
  If not, go to the Data Services page by clicking on Services under the Data menu.

● Click on “+ New” to create a new Data Service and add the necessary information

<p align="center">
  <img src="/app/assets/docs/images/dataservice_1.png" alt="dataservice">
  Demonstration - 01
</p>

● Enter the name for the Data Service and click on create. By default, a schema based data
service will be created. You can change this to schema free by selecting that option below the name)

<p align="center">
  <img src="/app/assets/docs/images/dataservice_2.png" alt="dataservice">
</p>

  ● When the Data Service is created for the first time, you will be directed to the edit page where you can start adding attributes by clicking on “Add Attribute”.

<p align="center">
  <img src="/app/assets/docs/images/dataservice_3.png" alt="dataservice">
</p>

  ● Here you can start adding attributes. The data type of the attributes can be selected from
   the “Type” dropdown in Basic Properties section on the RHS. Once the attribute is set, the
    properties listed below can be selected according to the user’s needs.

<p align="center">
  <img src="/app/assets/docs/images/dataservice_4.png" alt="dataservice">
</p>

  ● After creating the attributes with the necessary properties, go into the interactions tab
   where Data Hooks and Review Hooks can be set up. close the RHS properties box and click on
    “Save and Deploy” to deploy the Data Service.

<p align="center">
  <img src="/app/assets/docs/images/dataservice_5.png" alt="dataservice">
</p>

  ● Once deployed, the Data Service will go into a pending state and then into running state,
   which shows us that the Data Service is up and running.

  ● Now double click on the created Data Service or click on “Edit” to go into its edit page.
   Here, you will be  able to edit the rest of the data service including Integration,
    Experience, Roles, Settings and Audit.

### 2. How WORKFLOWS can be configured ?

Here are the steps to configure and demonstrate a basic Maker-Checker workflow for data entry
 into a Data Service. This involves setting up the Data Service and workflow in the Author page,
  creating users and groups, assigning workflow permissions, and then executing the process in the AppCenter. Refer - 
Workflows 

Part 1: Configuration in the Author Page

  1. Create Your Data Service:

    ◦ Navigate to the Author page(qa.datanimbus.io/io/author).

    ◦ Go to Data -> Data Services and click to create a New Data Service.

    ◦ Give it a descriptive name, e.g., ApprovalRequiredData.

    ◦ Go to the Design tab.

    ◦ Add necessary Attributes (fields) for your data (e.g., ID as Identifier, Item Name as Text, Quantity as Number).

    ◦ Save and Deploy your Data Service.

  2. Configure the Workflow (Experience Tab):

    ◦ Stay in your ApprovalRequiredData Data Service configuration.

    ◦ Go to the Experience tab.

    ◦ Enable Workflows by toggling the switch ON.

    ◦ Under the "Workflows" section, click + Add Workflow. Give it a name, e.g., New Record Approval.

    ◦ Add a Step to this workflow by clicking + Add Step. Name this step Approval Step

    ◦ Set the No Of Approvals required for this step to 1.

    ◦ Save & Deploy your Data Service.

<p align="center">
  <img src="/app/assets/docs/images/dataservice_6.png" alt="dataservice">
</p>

  3. Create Maker User and Group:

    ◦ Navigate back to the main Author menu.

    ◦ Go to Management -> Users and click to create a New User named maker@gmail.com. Set a password.

    ◦ Go to Management -> Groups and click to create a New Group named makers.

    ◦ In the makers group configuration, go to the Members tab and add maker@gmail.com to the group.

    ◦ Go to the APP CENTER ROLES tab, find your Data Service (ApprovalRequiredData) in the list.

    ◦ Under the Data Services section for ApprovalRequiredData, grant the makers group
     permissions to Create, View, and Edit records (but NOT Delete or Manage).

    ◦ Under the Workflows section for ApprovalRequiredData, find the Approval Step. Ensure the toggle next to the Approval
     Step is OFF for the makers group. Makers should submit, but not approve.

    ◦ Save the makers group.

  4. Create Checker User and Group:

    ◦ Go to Management -> Users and create a New User named checker@gmail.com. Set a password.

    ◦ Go to Management -> Groups and create a New Group named checkers.

    ◦ In the checkers group configuration, go to the Members tab and add checker@gmail.com to the group.

    ◦ Go to the APP CENTER ROLES tab, find your Data Service (ApprovalRequiredData).

    ◦ Under the Data Services section for ApprovalRequiredData, grant the checkers group permission to Manage records. 

    ◦ Under the Workflows section for ApprovalRequiredData, find the Approval Step. Toggle the switch ON for the checkers group. 
    This grants them permission to perform the action on this workflow step (Approval, Reject, etc)

    ◦ Save the checkers group.

### Part 2: Execution in AppCenter

  5. Maker Adds a Record (Requires Approval):

    ◦ Log in to Appcenter page (qa.datanimbus.io/io/appcenter). using maker user's credentials.

    ◦ Go to the Dataservices and view for your deployed Data Service (ApprovalRequiredData).

    ◦ Click the "+ Add Data" button.

    ◦ Fill in the details for a new record (Item Name, Quantity, etc.). 

    ◦ Save/Submit the new record.

  6. Checker Reviews and Approves the Record:

    ◦ Log out as maker user and log in using checker user's credentials.

    ◦ Navigate to the WORKFLOWS section in Appcenter.

    ◦ Locate the pending task for the record submitted by the maker user.

    ◦ Open the task details. This view should show the record's data and present action buttons for the Approval Step, 
    such as "Approve" and "Reject".

    ◦ Click on the "Approve" button.

    ◦ Confirm the action if prompted.

  7. Verify Record is Finalized:

    ◦ After the checker approves, the workflow should complete the Approval Step 

    ◦ Navigate back to the OpsCenter view for your ApprovalRequiredData Data Service in the AppCenter.

    ◦ The record should now be visible in the main list and the record is successfully added to the permanent list of records
     in the Data Service.

  These steps guide you through setting up the Maker-Checker workflow using Data Services, Groups, Users, 
  and the Workflow configuration in the Author environment, and then demonstrating the data entry and approval process in the AppCenter.

---

### 3. How Pre-hooks are configured?

Pre-hooks are executed before data is created or updated in a Data Service. They are often used for validation, data manipulation
, or enrichment of the data payload before it's saved.

### Part 1: Setup in the Author Page

  1. Create or Identify Your Data Service:

    ◦ Login to the Author page.

    ◦ Go to Data -> Data Services.

    ◦ Create a New Data Service or select an existing one that you want to add a pre-hook to.

    ◦ Ensure your Data Service has the necessary Attributes defined in the Design tab (e.g., ID, Name, Status, etc.) 
    that your data pipe will interact with.

    ◦ Save any changes to the Data Service design.

  2. Create Your Data Pipe (API Endpoint):

    ◦ Navigate to Data -> Data Pipes in the Author page.

    ◦ Create a New Data Pipe or select an existing one. This pipe will contain the logic you want to run as your pre-hook.

    ◦ Crucially, configure an API Endpoint for this Data Pipe. This is the URL that the Data
     Service will call. Give
      it a meaningful API Endpoint name (e.g., /validate-ledger-data).

    ◦ Design the logic within the Data Pipe's. This logic will receive the data payload (the record being created or updated) 
    as the incoming request body. Your pipe can then validate the data, modify it, enrich it by calling other services, or make decisions.

      ▪ Example Pipe : Use an "API Receiver" node to get the incoming data. Add a "Code Block" node to inspect or modify 
      the received data. Add a "Response" node to send back a response. The Data Service expects a successful response 
      (e.g., 200 OK with the potentially modified data payload) for the operation to proceed, or an error response 
      (e.g., 400 Bad Request) to stop the create/update.

    ◦ Save and Deploy your Data Pipe. Note down the full API Endpoint URL. This URL is what you will use in the next 
    step (like https://qa.datanimbus.io/io/pipes/ledgers/dniao223 )

  3. Configure the Pre-hook in the Data Service:

    ◦ Go back to the Data Service you identified in Step 1.

    ◦ Navigate to the Integration tab.

    ◦ Locate the "Data Hooks" section on the left.

    ◦ Find the "Pre hooks" area.

    ◦ Click "+ Add pre hook".

    ◦ Give your pre-hook a descriptive Name (e.g., "Ledger Data Validation").

    ◦ In the URL field, paste the full API Endpoint URL of the Data Pipe you created in Step 2.

    ◦ Save the Dataservice configuration.

    ◦ Save & Deploy the Data Service. This makes the pre-hook active for all subsequent create and update operations.

<p align="center">
  <img src="/app/assets/docs/images/dataservice_7.png" alt="dataservice">
</p>

### Part 2: Testing the Pre-hook

  4. Add/Edit Data to Trigger the Pre-hook:

    ◦ The pre-hook is triggered before data is saved whenever you attempt to create or update a record in this Data Service.

    ◦ Option A (Via AppCenter UI): Navigate to the AppCenter OpsCenter view for your Data Service. Click "+ Add Data" 
    to create a new record, or find an existing record and click "Edit". Enter or modify the data and attempt to save.

    ◦ Option B (Via API): Use an API client (like Postman, curl) to send a POST request (for creating a new record) 
    or a PUT/PATCH request (for updating an existing record) to the Data Service's API endpoint with a data payload.

    ◦ Observe:

      ▪ Check the interactions of your Data Pipe (configured as the pre-hook) in the Appcenter page. You can inspect the incoming
       payload in the datapipe's interactions to see the data that was sent to the hook.

      ▪ Observe the result of your data operation (in AppCenter UI or API response). If the Data Pipe executed successfully 
      and returned a success response (e.g., 200 OK), the data should be saved (potentially modified by the pipe's logic). 
      If the Data Pipe returned an error (e.g., 400 Bad Request), the data operation should fail, and you should see an error message.


---

### 4. How Post-hooks are configured?

Post-hooks are executed after a data operation (create, update, or delete) on a Data Service has successfully completed. They are 
useful for triggering subsequent actions based on a saved data change, such as sending
 notifications, updating other systems, or initiating downstream processes.

### Part 1: Setup in the Author Page

  1. Create or Identify Your Data Service:

    ◦ Login to Author page

    ◦ Go to Data -> Data Services.

    ◦ Create a New Data Service or select the existing one you want to add a post-hook to (the same one from the
     pre-hook example is fine if you wish).

    ◦ Ensure your Data Service has the necessary Attributes defined in the Design tab.

    ◦ Save any changes to the Data Service design.

  2. Create Your Data Pipe (API Endpoint for Post-Processing):

    ◦ Navigate to Data -> Data Pipes in the Author page.

    ◦ Create a New Data Pipe or select an existing one. This pipe will contain the logic you want to run after data is saved.

    ◦ Configure an API Endpoint for this Data Pipe. This URL will be called by the Data Service after a successful save/delete operation. 
    Give it a meaningful API Endpoint name (e.g., /process-new-ledger-entry).

    ◦ Design the logic within this Data Pipe's . This pipe will receive the data payload (the record that was 
    just successfully created or updated, 
    or information about the deleted record) as the incoming request body.

      ▪ Example Pipe Logic: Use an "API Receiver" node to get the incoming saved data. Add nodes to send an email notification
      , call another external API, 
      write to a log, or trigger another workflow based on the received data.

    ◦ Save and Deploy your Data Pipe. Note down the full API Endpoint URL of this pipe.

  3. Configure the Post-hook in the Data Service:

    ◦ Go back to the Data Service you identified in Author page.

    ◦ Navigate to the Integration tab.

    ◦ Locate the "Data Hooks" section on the left.

    ◦ Find the "Post hooks" area (just below "Pre hooks").

    ◦ Click "+ Add post hook".

    ◦ Give your post-hook a descriptive Name (e.g., "Notify on Ledger Update").

    ◦ In the URL field, paste the full API Endpoint URL of the Data Pipe you created in Step 2.

    ◦ Save the Data Service configuration.

    ◦ Save & Deploy the Data Service. This activates the post-hook for all subsequent successful create, update, and delete operations.

<p align="center">
  <img src="/app/assets/docs/images/dataservice_8.png" alt="dataservice">
</p>

### Part 2: Testing the Post-hook

  4. Add/Edit/Delete Data to Trigger the Post-hook:

    ◦ The post-hook is triggered after data is successfully created, updated, or deleted in this Data Service.

    ◦ Option A (Via AppCenter UI): Navigate to the AppCenter view for your Data Service. Click "+ Add Data" to create a new record, 
    or find an existing record and click "Edit", or select a record and click "Delete". Successfully complete the operation.

    ◦ Option B (Via API): Use an API client (like Postman, curl) to send a POST, PUT or DELETE request to the Data Service's API 
    endpoint with the necessary data or record ID. Ensure the API call is successful (receives a 2xx success status code).

    ◦Observe:

      ▪ Check the Interactions of your Data Pipe (configured as the post-hook). You should see an interaction created shortly after 
      the data operation succeeded. Inspect the incoming payload in the datapipe's interaction – it should contain the state 
      of the data record after it was saved (or confirmation/details of the deletion).


---

### 5. How to configure State Model?

A State Model is configured within the Data Service configuration that allows you to define and manage the lifecycle of a data record.
 It essentially assigns a specific "state" to each record and controls how that record can transition between these predefined states.

Steps to Configure a State Model for a Data Service:

### Part 1: Creating the Data Service and Attributes (Design Tab)

  1. Navigate to Data Services:

    ◦ Log in to the Author page (qa.datanimbus.io/io/author).

    ◦ From the left navigation, go to Data -> Data Services.

    ◦ Click on the "+ New Data Service" button to create a new one.

    ◦ Give your Data Service a name, for example, StateModel.

    ◦ Click "Save".

  2. Define Attributes with List of Values:

    ◦ Once the Data Service is created, you will be in its Design tab.

    ◦ Add a Number List of Values Attribute:

      ▪ Click "+ Add Attribute".

      ▪ Give it a Name (e.g., StatusCode).

      ▪ Set its Type to Number.

      ▪ Under the Number sub-options, select "List of values".

      ▪ Add a few numerical values (e.g., 10, 20, 30, 40) by typing each number and clicking the + icon next to it.

      ▪ Ensure no options under "Advanced Properties" are enabled.

    ◦ Add a Text List of Values Attribute:

      ▪ Click "+ Add Attribute" again.

      ▪ Give it a Name (e.g., ApprovalState).

      ▪ Set its Type to Text.

      ▪ Under the Text sub-options, select "List of values".

      ▪ Add a few text values (e.g., Draft, Pending Approval, Approved, Rejected) by typing each and clicking the + icon.

      ▪ Ensure no options under "Advanced Properties" are enabled.

      ▪ Click "Save" for the Data Service.

### Part 2: Configuring the State Model (Experience Tab)

  3. Navigate to Experience Tab:

    ◦ While viewing your StateModel Data Service, click on the "Experience" tab.

  4. Enable the State Model:

    ◦ Locate the "State Model" section within the Experience tab.

    ◦ Toggle the switch to "Enable State Model" to ON.

  5. Choose/Configure the State Model Attribute:

    ◦ Below the enable switch, you should see an option like "Choose Existing attribute or create one" or a dropdown to 
    select the attribute that will serve as your State Model.

    ◦ Click on this option and select the attribute you want to use as your state tracker (e.g., ApprovalState from Part 1).

    ◦ Click "Configure State Model" .

    ◦ Verify Success Message: After selecting, a success message should appear, similar to: "Success! State Model 
    ApprovalState has been successfully created. Now you can find it in the attribute list."

<p align="center">
  <img src="/app/assets/docs/images/dataservice_9.png" alt="dataservice">
</p>

  6. Add State Values (Initial Configuration):

    ◦ After the initial setup, the state values you defined for the chosen attribute (e.g., Draft, Pending Approval, 
    Approved, Rejected for ApprovalState) should be displayed.

    ◦ Locate the "Add State Value Here" input field and the + icon.

    ◦ Try to add a new state value (e.g., Completed) by typing it and clicking the +.

    ◦ Add a few more unique state values and verify they are added and displayed.

  7. After configuring the State Model, click the "Save and Deploy" button for your Data Service.

Observe: 
The record should be successfully created and appear in the StateModelTest list view. The ApprovalState attribute for
 this new record should correctly display 'Draft' (or whatever initial state was configured in your State Model),
  confirming that the State Model is correctly initializing new records to their starting lifecycle stage.


---

### 6. How to Personalize?

The "Personalize" feature within a Data Service's Experience tab allows you to define a structured, step-by-step user 
experience for interacting with data, often used for data entry or guided processes.

Steps:

  1. Navigate to the Data Service's Experience Tab:

    ◦ Log in to the Author page(e.g., qa.datanimbus.io/io/author).

    ◦ Navigate to Data -> Data Services.

    ◦ Select the Data Service you wish to personalize (e.g., sample).

    ◦ Click on the "Experience" tab.

  2. Within the "Experience" tab, ensure that the "Personalize" sub-tab is selected.

  3. Customize and Add Steps:

    ◦ Click on the "Customize" button (or an edit icon) to begin configuring the personalized steps.

    ◦ Provide Step Name: For the first step (e.g., "STEP 1"), you can provide a descriptive name 
    (e.g., "new" as shown in the screenshot for "STEP 1").

    ◦ Click on "+ Add New" (or a similar + button) to add subsequent steps.

    ◦ Provide Step Name: For each new step, provide a name (e.g., "place" for "STEP 2", "animal" for "STEP 3", "thing" for "STEP 4" ).

    ◦ Click on the "Close" button (or "Done") once you have defined all your desired steps.

<p align="center">
  <img src="/app/assets/docs/images/dataservice_10.png" alt="dataservice">
</p>

  4. Assign Attributes to Steps:

    ◦ Below the step headers, you will see an "Attributes" section.

    ◦ Select the attributes from the available list on the right and drag-and-drop them or use an "Add" function to assign 
    them to the desired steps. You can select multiple attributes for each step.

  5. Save and Deploy the Data Service:

    ◦ After configuring all the steps and assigning attributes, click on the "Save & Deploy" button for the Data Service.

Once deployed, when users interact with this Data Service in the AppCenter or via an application built upon it, the data entry 
`or view experience will follow the personalized steps you have defined.