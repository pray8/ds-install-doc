# Introduction

**Datapipes** serve as workflow-driven data processing mechanisms, enabling users to create, manage, and automate structured data flows. They facilitate data transformations, validations, integrations, and orchestrations, ensuring seamless execution of complex workflows.

A **Datapipe** consists of **nodes** that represent individual actions within the pipeline. These nodes can include parsing, validation, transformation, integration with external services, responses.

---

## Key Characteristics of Datapipes

- **Event-Driven Execution** – Triggers based on system interactions.
- **Structured Node-Based Processing** – Modular components that process data sequentially.
- **Flexible Data Transformation** – Mapping and converting data formats efficiently.
- **Seamless Integration** – Connects with various services, plugins, and agents.

---

## Steps to Create a Datapipe

1. **Login** to the Author portal and click on the **Pipes** feature under the **Data** tab.  
   This will show a list of existing Datapipes.


<p align="center">
  <img src="/app/assets/docs/images/DP01.png" alt="Datapipe" width="800">
</p>

2. Click on **New**, select the **HTTP Server** node as the initial node, and click on “Next”.

3. Add the necessary details and create the flow.  
   You will be taken to the canvas where you can add and edit nodes.

<p align="center">
  <img src="/app/assets/docs/images/DP02.png" alt="Datapipe" width="800">
</p>

<p align="center">
  <img src="/app/assets/docs/images/DP03.png" alt="Datapipe" width="800">
</p>

4. On the **left**, you will see nodes (from plugins and pre-installed ones).  
   On the **right**, you'll see the **properties** of the selected node.

<p align="center">
  <img src="/app/assets/docs/images/DP04.png" alt="Datapipe" width="800">
</p>

---

## Example Workflow Execution

The diagram below illustrates how Datapipes are structured and how their workflow is executed:

  <p align="center">
  <img src="/app/assets/docs/images/DP05.png" alt="Datapipe">
</p>

**Example Nodes:**

1. **HTTP_SERVER Node** – Acts as the entry point where requests land.
2. **PARSE_JSON Node** – Parses the raw buffer data received from HTTP_SERVER.
3. **CODEBLOCK Node** – Executes validation logic for data integrity.
4. **RESPONSE Node** – Returns the validation results in a structured API response.

---

Apart from these, **DNIO** provides additional nodes (highlighted in red in the system interface) that users can integrate into their Datapipe workflows.

---

## Node Description: Agent Pickup

  <p align="center">
  <img src="/app/assets/docs/images/DP06.png" alt="Datapipe">
</p>

### **Description:**
The **Agent Pickup** node is designed to receive files from a registered agent (typically running on-premise or client-side) and inject them into the low-code workflow.

Common use case:  
Used when files are delivered manually or semi-automatically from systems not directly connected to the platform.

---

### **Properties Section:**

- **Node Name**: Custom label for identifying this node on the workflow canvas.
- **Agents**: Select one or more registered agents that will perform the file pickup.
- **Input Directories**: Specify valid folder paths on the agent machine to watch for incoming files.
- **Flows**: Choose one or more flows to trigger automatically after files are picked up.

---

### **Label Type:**
`AGENT_PICKUP_2`

### **Category & Group:**
- **Category**: TRIGGER  
- **Group**: File

---

### **Functionality Description:**

- Acts as a **trigger** and listens for a **pickup** action from a remote agent.
- When a file is dropped at the monitored location and the pickup is initiated, the file is transferred into the workflow.
- Supports **batch file ingestion** from external networks.
- Ideal when direct SFTP or API access is not possible.

---

### **Configuration:**

#### **Inputs:**
This node functions as a **trigger** – it does **not** require any upstream inputs.

#### **Outputs:**
- `data (Buffer)` – The file content  
- `fileName (String)` – Name of the incoming file  
- `mimeType (String)` – Detected content type  
- `metadata (KeyValPair)` – Any additional agent-provided metadata

---

## Node Name: Code Block

**Description:**  
The Code Block node allows embedding custom JavaScript code directly inside the workflow. It enables advanced logic, branching, data transformations, and access to variables or previous node results.

  <p align="center">
  <img src="/app/assets/docs/images/DP07.png" alt="Datapipe">
</p>

### Properties Section
- **Node Name:** Custom label for identifying this node on the workflow canvas.

### Input Parameters
- **Data:** Define the input schema structure that the code block will receive for processing.

### Output Parameters
- **Data:** Specify the output schema structure that the code block will return after execution.

### Label Type
`codeblock_3`

### Category & Group
- **Category:** PROCESS
- **Group:** Logic

### Functionality Description
Provides a code editor inside the low-code platform to write synchronous or asynchronous JavaScript.  
Useful for:
- Data manipulation
- Calculations
- Conditional logic
- Internal library access

### Configuration

**Inputs:**
- `data (any)` – Optional input passed into the JavaScript block  
- `context (Object)` – Full context including environment, metadata, and variables

**Outputs:**
- `data (any)` – Output from the script  
- `logs (Array<String>)` – Optional logs generated by the custom script

---

## Node Name: Data Service Bulk Update

**Description:**  
Performs a bulk update of multiple records in a Data Service API using keys and data entries.

  <p align="center">
  <img src="/app/assets/docs/images/DP08.png" alt="Datapipe">
</p>

### Properties Section
- **Node Name:** Custom label for identifying this node on the workflow canvas.

### Label Type
`data_service_bulk_update_4`

### Category & Group
- **Category:** PROCESS  
- **Group:** DataService

### Functionality Description
Makes a bulk API call to update records based on provided keys and new values.  
Ideal for batch updates.

### Configuration

**Inputs:**
- `keys (Array<String>)` – Primary/unique keys for identifying records  
- `data (Array<DataService>)` – Updated field values  
- `token (String)` – Authorization token

**Outputs:**
- `data (Array<DataService>)` – Updated records  
- `statusCode (Number)` – API response code

---

## Node Name: Data Service Count

**Description:**  
Counts records in a DataService collection that match a given filter.
  <p align="center">
  <img src="/app/assets/docs/images/DP09.png" alt="Datapipe">
</p>

### Properties Section
- **Node Name:** Custom label for identifying this node on the workflow canvas.  
- **Select Connection:** Choose the DataService connection for the count operation.

### Label Type
`dataservice_count_5`

### Category & Group
- **Category:** PROCESS  
- **Group:** DataService

### Functionality Description
Executes a count query with filters and auth. Useful for dashboards, analytics, and validation.

### Configuration

**Inputs:**
- `filter (String)` – Query condition  
- `timeout (Number)` – Timeout for request  
- `token (String)` – Auth token

**Outputs:**
- `statusCode (Number)` – API response code  
- `count (Number)` – Number of matching records

---

## Node Name: Data Service Create

**Description:**  
Creates new records in the DataService store by posting an object or array of objects.

  <p align="center">
  <img src="/app/assets/docs/images/DP10.png" alt="Datapipe">
</p>

### Properties Section
- **Node Name:** Custom label for identifying this node on the workflow canvas.  
- **Select Connection:** Choose the DataService connection for creating records.

### Label Type
`dataservice_post_6`

### Category & Group
- **Category:** PROCESS  
- **Group:** DataService

### Functionality Description
Sends HTTP POST requests to insert records.  
Used for:
- Form submissions  
- Data onboarding  
- Automations

### Configuration

**Inputs:**
- `data (JSObject)` – Record(s) to insert  
- `token (String)` – Auth token

**Outputs:**
- `data (JSObject)` – Inserted documents  
- `statusCode (Number)` – API response code

---

## Node Name: Data Service Delete

**Description:**  
Deletes one or more records from DataService using filter conditions.

  <p align="center">
  <img src="/app/assets/docs/images/DP11.png" alt="Datapipe">
</p>

### Properties Section
- **Node Name:** Custom label for identifying this node on the workflow canvas.  
- **Select Connection:** Choose the DataService connection to delete from.

### Label Type
`dataservice_delete_7`

### Category & Group
- **Category:** PROCESS  
- **Group:** DataService

### Functionality Description
Sends an HTTP DELETE request with a filter string to remove records securely.

### Configuration

**Inputs:**
- `filter (String)` – Condition to select records  
- `token (String)` – Auth token

**Outputs:**
- `statusCode (Number)` – HTTP response  
- `data (DataService)` – Deletion result or confirmation

---

## Node Name: Data Service List

**Description:**  
Retrieves a list of records from a DataService collection using filters, pagination, and sorting.

  <p align="center">
  <img src="/app/assets/docs/images/DP12.png" alt="Datapipe">
</p>

### Properties Section
- **Node Name:** Custom label for identifying this node on the workflow canvas.  
- **Select Connection:** Choose the DataService connection to list records from.

### Label Type
`dataservice_list_8`

### Category & Group
- **Category:** PROCESS  
- **Group:** DataService

### Functionality Description
Performs a GET request to fetch data using:
- Filtering  
- Sorting  
- Pagination  
- Field selection

Used in:
- Dashboards  
- Tables  
- Sync tasks

### Configuration

**Inputs:**
- `filter (String)` – Query condition  
- `sort (String)` – Sort logic  
- `select (String)` – Fields to return  
- `count (Number)` – Items per page  
- `page (Number)` – Page number  
- `token (String)` – Auth token

**Outputs:**
- `statusCode (Number)` – HTTP response  
- `data (Array<DataService>)` – Result set

---

## Node Name: Data Service Show

**Description:**  
Fetches a single record that matches the given filter condition from the DataService collection.

  <p align="center">
  <img src="/app/assets/docs/images/DP13.png" alt="Datapipe">
</p>

### Properties
- **Node Name:** Custom label for identifying this node on the workflow canvas.
- **Select Connection:** Choose the DataService connection to retrieve a single record.

### Label Type
`dataservice_get_9`

### Category & Group
- **Category:** PROCESS  
- **Group:** DataService

### Functionality Description
Retrieves the first record that matches the filter. Ideal for:
- Detail views  
- Validation  
- Fetching single entities

### Configuration

**Inputs:**
- `filter (String)` – Filter condition  
- `select (String)` – Fields to fetch  
- `timeout (Number)` – Request timeout  
- `token (String)` – Auth token

**Outputs:**
- `statusCode (Number)` – Response status  
- `data (DataService)` – Retrieved record

---

## Node Name: Data Service Update

**Description:**  
Updates records in the DataService using a filter and new data object.

  <p align="center">
  <img src="/app/assets/docs/images/DP14.png" alt="Datapipe">
</p>

### Properties
- **Node Name:** Custom label for identifying this node on the workflow canvas.
- **Select Connection:** Target DataService connection.

### Label Type
`datasrvice_put_10`

### Category & Group
- **Category:** PROCESS  
- **Group:** DataService

### Functionality Description
Performs a PUT request to update one or more matching records. Used in:
- Bulk edits  
- Workflow-driven updates

### Configuration

**Inputs:**
- `filter (String)` – Filter to match records  
- `data (DataService)` – Updated fields  
- `token (String)` – Auth token

**Outputs:**
- `statusCode (Number)` – API response  
- `data (DataService)` – Updated records

---

## Node Name: Deserialize Buffer

**Description:**  
Converts a raw buffer (binary) into structured format like JSON or XML.

<p align="center">
  <img src="/app/assets/docs/images/DP15.png" alt="Datapipe">
</p>

### Properties
- **Node Name:** Custom label for identifying this node.

### Label Type
`buffer_parser_12`

### Category & Group
- **Category:** PROCESS  
- **Group:** Misc

### Functionality Description
Parses raw buffers using decoding configuration. Suitable for:
- File stream handling  
- Message parsing

### Configuration

**Inputs:**
- `data (Buffer)` – Binary input  
- `options (ParseOptionSchema)` – Format instructions

**Outputs:**
- `data (Schema)` – Parsed data

---

## Node Name: Deserialize Form Data

**Description:**  
Parses incoming `form-data` into readable field-key pairs and files.

<p align="center">
  <img src="/app/assets/docs/images/DP16.png" alt="Datapipe">
</p>

### Properties
- **Node Name:** Custom label for identifying this node.

### Label Type
`formdata_parser_13`

### Category & Group
- **Category:** PROCESS  
- **Group:** Misc

### Functionality Description
Breaks down multi-part form encoded input into:
- Fields  
- Uploaded files

### Configuration

**Inputs:**
- `data (Buffer)` – Form content  
- `contentType (String)` – e.g., `multipart/form-data; boundary=...`

**Outputs:**
- `form (KeyValPair)` – Parsed fields  
- `files (Array<Buffer>)` – Uploaded files

---

## Node Name: File Agent Send

**Description:**  
Sends files to external systems via configured file agents.

<p align="center">
  <img src="/app/assets/docs/images/DP17.png" alt="Datapipe">
</p>

### Properties Section
- **Node Name:** Custom label for identifying this node.

### Label Type
`agent_send_14`

### Category & Group
- **Category:** PROCESS  
- **Group:** File

### Functionality Description
Used to send files using pre-registered file agents.  
Suitable for:
- On-premise integrations  
- Agent-based storage sync

### Configuration

**Inputs:**
- `filePath (String)` – File system path  
- `data (Buffer)` – File content  
- `target (String)` – Destination path/alias

**Outputs:**
- `statusCode (Number)` – API response code  
- `message (String)` – Success or error message

---

## Node Name: Global Error

**Description:**  
Handles uncaught exceptions or workflow-level errors.

<p align="center">
  <img src="/app/assets/docs/images/DP18.png" alt="Datapipe">
</p>

### Properties
- **Node Name:** Custom label for identifying this node.

### Label Type
`global_error_15`

### Category & Group
- **Category:** SYSTEM  
- **Group:** System

### Functionality Description
Catches errors that are not handled by any preceding node.  
Useful for:
- Global error logging  
- Alerting  
- Fail-safe handling

### Configuration

**Inputs:**
- `error (Object)` – Exception object

**Outputs:**
- `message (String)` – Error message  
- `code (Number)` – Optional error code

---

## Node Name: HTTP Client

**Description:**  
Sends HTTP requests to external APIs (GET, POST, PUT, DELETE).

<p align="center">
  <img src="/app/assets/docs/images/DP19.png" alt="Datapipe">
</p>

### Properties
- **Node Name:** Custom label for identifying this node.  
- **Select Connection:** Predefined HTTP connection

### Label Type
`http_client_16`

### Category & Group
- **Category:** PROCESS  
- **Group:** HTTP

### Functionality Description
Generic REST client with full control over request configuration.

### Configuration

**Inputs:**
- `url (String)` – API endpoint  
- `method (String)` – HTTP method  
- `headers (KeyValPair)` – Custom headers  
- `query (KeyValPair)` – URL query params  
- `body (Schema)` – Payload  
- `auth (KeyValPair)` – Optional auth details

**Outputs:**
- `statusCode (Number)` – HTTP response code  
- `data (Buffer)` – Response body  
- `headers (KeyValPair)` – Response headers

---

## Node Name: Parse CSV

**Description:**  
Reads and parses CSV files or text into structured data.

<p align="center">
  <img src="/app/assets/docs/images/DP20.png" alt="Datapipe">
</p>

### Properties
- **Node Name:** Custom label for identifying this node.

### Label Type
`parse_csv_17`

### Category & Group
- **Category:** PROCESS  
- **Group:** Parse

### Functionality Description
Parses CSV input using specified delimiter, headers, and quoting.  
Ideal for:
- Tabular data  
- Spreadsheet imports

### Configuration

**Inputs:**
- `data (Buffer)` – CSV content  
- `options (ParseOptionSchema)` – Parsing preferences

**Outputs:**
- `data (Array)` – Parsed rows in JSON


---

## **Parse Delimiter**

**Node Name**: Parse Delimiter  
**Description**: Parses text or buffers separated by custom delimiters (e.g., pipe `|`, semicolon `;`) into structured JSON.

<p align="center">
  <img src="/app/assets/docs/images/DP21.png" alt="Datapipe">
</p>

### Properties
- **Node Name**: Custom label for identifying the node on the canvas.

### Output Parameters
- **Data**: Schema for parsed output from the delimited input.

### Label Type
`parse_delimiter_16`

### Category & Group
- **Category**: PROCESS  
- **Group**: Parse

### Functionality
Used for legacy exports or log parsing. It splits raw input based on delimiter and maps values to headers.

### Configuration
#### Inputs
- `data (Buffer)`: Delimited string input  
- `options (ParseOptionSchema)`: Delimiter, header mapping, etc.

#### Outputs
- `data (Array)`: Parsed JSON

---

## **Parse Fixed Length**

**Node Name**: Parse Fixed Length  
**Description**: Parses fixed-width files with predefined field widths.

<p align="center">
  <img src="/app/assets/docs/images/DP22.png" alt="Datapipe">
</p>

### Properties
- **Node Name**: Custom label for identifying this node.

### Output Parameters
- **Data**: Schema for output based on fixed field widths.

### Label Type
`parse_fixed_19`

### Category & Group
- **Category**: PROCESS  
- **Group**: Parse

### Functionality
For systems using byte-specific data formats. Splits rows using field offsets.

### Configuration
#### Inputs
- `data (Buffer)`: Fixed-width data  
- `options (ParseOptionSchema)`: Field width definitions

#### Outputs
- `data (Array)`: Structured rows

---

## **Parse JSON**

**Node Name**: Parse JSON  
**Description**: Converts raw JSON into structured JavaScript objects.

<p align="center">
  <img src="/app/assets/docs/images/23.png" alt="Datapipe">
</p>

### Properties
- **Node Name**: Custom label for identifying this node.

### Output Parameters
- **Data**: Parsed JSON object schema

### Label Type
`parse_json_20`

### Category & Group
- **Category**: PROCESS  
- **Group**: Parse

### Functionality
Converts JSON strings from APIs or files into valid JavaScript objects.

### Configuration
#### Inputs
- `data (Buffer)`: JSON string

#### Outputs
- `data (Schema)`: Parsed object

---

## **Parse XLSX**

**Node Name**: Parse XLSX  
**Description**: Parses Excel `.xlsx` files into rows of data.

<p align="center">
  <img src="/app/assets/docs/images/DP24.png" alt="Datapipe">
</p>

### Properties
- **Node Name**: Custom label for identifying this node.

### Output Parameters
- **Data**: Schema for parsed Excel data

### Label Type
`parse_xlsx_21`

### Category & Group
- **Category**: PROCESS  
- **Group**: Parse

### Functionality
Supports multi-sheet parsing, headers, and conversion into JSON rows.

### Configuration
#### Inputs
- `data (Buffer)`: Excel file  
- `options (ParseOptionSchema)`: Sheet index, headers, etc.

#### Outputs
- `data (Array)`: JSON rows

---

## **Parse XML**

**Node Name**: Parse XML  
**Description**: Parses XML content into structured objects.

<p align="center">
  <img src="/app/assets/docs/images/DP25.png" alt="Datapipe">
</p>

### Properties
- **Node Name**: Custom label for identifying this node.

### Output Parameters
- **Data**: Schema for parsed XML

### Label Type
`parse_xml_22`

### Category & Group
- **Category**: PROCESS  
- **Group**: Parse

### Functionality
Converts XML (e.g., from SOAP) into structured JSON-like objects.

### Configuration
#### Inputs
- `data (Buffer)`: XML content

#### Outputs
- `data (Schema)`: Parsed object

---

## **Render CSV**

**Node Name**: Render CSV  
**Description**: Converts structured data into CSV format.

<p align="center">
  <img src="/app/assets/docs/images/DP26.png" alt="Datapipe">
</p>

### Properties
- **Node Name**: Custom label for identifying this node.

### Input Parameters
- **Data**: Input data schema for CSV rendering

### Label Type
`render_csv_23`

### Category & Group
- **Category**: PROCESS  
- **Group**: Render

### Functionality
Takes objects/arrays and outputs them as CSV based on delimiter options.

### Configuration
#### Inputs
- `data (Array)`: JSON data  
- `options (RenderOptionSchema)`: Delimiter, header config

#### Outputs
- `data (Buffer)`: CSV file

---

## **Render JSON**

**Node Name**: Render JSON  
**Description**: Converts structured data to JSON format.

<p align="center">
  <img src="/app/assets/docs/images/DP27.png" alt="Datapipe">
</p>

### Properties
- **Node Name**: Custom label for identifying this node.

### Input Parameters
- **Data**: Data schema for rendering

### Label Type
`render_json_24`

### Category & Group
- **Category**: PROCESS  
- **Group**: Render

### Functionality
Serializes input to JSON string or file.

### Configuration
#### Inputs
- `data (Schema)`: Data to render

#### Outputs
- `data (Buffer)`: JSON file content

---

## **Render XLSX**

**Node Name**: Render XLSX  
**Description**: Converts data into `.xlsx` format for download or archival.

<p align="center">
  <img src="/app/assets/docs/images/DP28.png" alt="Datapipe">
</p>

### Properties
- **Node Name**: Custom label for identifying this node.

### Input Parameters
- **Data**: Schema for Excel rendering

### Label Type
`render_xlsx_28`

### Category & Group
- **Category**: PROCESS  
- **Group**: Render

### Functionality
Renders JSON or arrays into Excel `.xlsx` files.

### Configuration
#### Inputs
- `data (Schema)`: Data for Excel

#### Outputs
- `data (Buffer)`: Excel binary

---

## **Render XML**

**Node Name**: Render XML  
**Description**: Converts structured data into XML.

<p align="center">
  <img src="/app/assets/docs/images/DP30.png" alt="Datapipe">
</p>

### Properties
- **Node Name**: Custom label for identifying this node.

### Input Parameters
- **Data**: Schema for rendering

### Label Type
`render_xml_29`

### Category & Group
- **Category**: PROCESS  
- **Group**: Render

### Functionality
Serializes data into properly tagged XML.

### Configuration
#### Inputs
- `data (Schema)`: Input data

#### Outputs
- `data (Buffer)`: XML file content

---
## Render Delimiter

**Description:** Converts structured input data into a plain text format using custom delimiters (e.g., pipe `|`, semicolon `;`, tab `\t`).

<p align="center">
  <img src="/app/assets/docs/images/DP31.png" alt="Datapipe">
</p>

**Label Type:** `render_delimiter_30`  
**Category:** PROCESS  
**Group:** Render  

**Functionality Description:**  
Takes tabular data (array of objects) and renders it into a delimited string format, often used in integration with systems that rely on fixed or custom-separated formats.

**Configuration:**  
- **Inputs:**  
  - `data (Schema)` – Data to serialize  
  - `options (RenderOptionSchema)` – Specify delimiter, quote character, etc.  
- **Outputs:**  
  - `data (Buffer)` – Delimited text content  

---

## Render Fixed Length

**Description:** Converts structured input data into a fixed-width text format where each field occupies a specific number of characters.

<p align="center">
  <img src="/app/assets/docs/images/DP32.png" alt="Datapipe">
</p>

**Label Type:** `render_fixed_lenght_31`  
**Category:** PROCESS  
**Group:** Render  

**Functionality Description:**  
Takes row-based data and renders it into a fixed-width file, with each column aligned to its configured byte length—used frequently in legacy systems and mainframes.

**Configuration:**  
- **Inputs:**  
  - `data (Schema)` – Structured input data  
  - `options (RenderOptionSchema)` – Field widths and padding rules  
- **Outputs:**  
  - `data (Buffer)` – Fixed-length formatted text file content  

---

## Serialize Buffer

**Description:** Converts structured objects into raw binary buffers for transmission or storage.

<p align="center">
  <img src="/app/assets/docs/images/DP33.png" alt="Datapipe">
</p>

**Label Type:** `buffer_renderer_25`  
**Category:** PROCESS  
**Group:** Render  

**Functionality Description:**  
Used to serialize structured data (like JSON or XML) into byte stream suitable for APIs, network transmission, or file generation.

**Configuration:**  
- **Inputs:**  
  - `data (Schema)` – Object to serialize  
  - `options (RenderOptionSchema)` – Encoding and format  
- **Outputs:**  
  - `data (Buffer)` – Serialized binary content  

---

## Serialize Form Data

**Description:** Converts structured form data—including key-value pairs and file buffers—into a multipart/form-data binary format suitable for HTTP transmission.

<p align="center">
  <img src="/app/assets/docs/images/DP34.png" alt="Datapipe">
</p>

**Label Type:** `formdata_renderer_27`  
**Category:** PROCESS  
**Group:** Render  

**Functionality Description:**  
Used to serialize structured form data, including both text fields and file attachments, into a compliant multipart/form-data body for API requests, file uploads, or external integrations that expect web form formats.

**Configuration:**  
- **Inputs:**  
  - `data (Schema)` – Object with form fields and optional file buffers  
  - `options (RenderOptionSchema)` – Form-data options like content-type and boundary settings  
- **Outputs:**  
  - `data (Buffer)` – Serialized multipart form-data content ready for transmission  

---

## Response

**Description:** Sends back a structured response from the workflow, typically used to end API-triggered executions with a custom payload and headers.

<p align="center">
  <img src="/app/assets/docs/images/DP35.png" alt="Datapipe">
</p>

**Label Type:** `response_32`  
**Category:** PROCESS  
**Group:** Output  

**Functionality Description:**  
Collects processed data and emits it as an HTTP response, including optional headers and payload body, to the caller of the workflow (e.g., an API endpoint or webhook).

**Configuration:**  
- **Inputs:**  
  - `headers (KeyValue)` – Optional HTTP headers to include in the response  
  - `data (Schema)` – The actual payload/body to send back (inferred or connected upstream)  
- **Outputs:**  
  - None – This node terminates the flow by returning a response to the initiator.

---

## SFTP Delete

**Description:** Deletes a file from a remote SFTP server securely over SSH.

<p align="center">
  <img src="/app/assets/docs/images/DP36.png" alt="Datapipe">
</p>

**Label Type:** `sftp_delete_33`  
**Category:** PROCESS  
**Group:** File  

**Functionality Description:**  
Given the remote `filePath`, it removes the file and returns status and message. Often used after reading/processing or archiving.

**Configuration:**  
- **Inputs:**  
  - `filePath (String)`  
- **Outputs:**  
  - `statusCode (Number)`  
  - `message (String)`  

---

## SFTP Get

**Description:** Fetches a file from an SFTP server using a secure path.

<p align="center">
  <img src="/app/assets/docs/images/DP37.png" alt="Datapipe">
</p>

**Label Type:** `sftp_get_34`  
**Category:** PROCESS  
**Group:** File  

**Functionality Description:**  
Reads a file at `filePath` and returns the file contents as binary buffer.

**Configuration:**  
- **Inputs:**  
  - `filePath (String)`  
- **Outputs:**  
  - `data (Buffer)`  

---

## SFTP List

**Description:** Lists files and folders in a directory path on an SFTP server.

<p align="center">
  <img src="/app/assets/docs/images/DP38.png" alt="Datapipe">
</p>

**Label Type:** `sftp_list_35`  
**Category:** PROCESS  
**Group:** File  

**Functionality Description:**  
Fetches directory entries at `folderPath` and returns name, type, size, and modification time.

**Configuration:**  
- **Inputs:**  
  - `folderPath (String)`  
- **Outputs:**  
  - `data (Array of Objects)`  
    - `type (String)`  
    - `name (String)`  
    - `size (Number)`  
    - `modifyTime (Number)`  

---

## SFTP Put

**Description:** Uploads a file to an SFTP server.

<p align="center">
  <img src="/app/assets/docs/images/DP39.png" alt="Datapipe">
</p>

**Label Type:** `sftp_put_36`  
**Category:** PROCESS  
**Group:** File  

**Functionality Description:**  
Accepts binary buffer and destination path, and uploads to server.

**Configuration:**  
- **Inputs:**  
  - `filePath (String)`  
  - `data (Buffer)`  
- **Outputs:**  
  - `statusCode (Number)`  
  - `message (String)`  

---

## SFTP Rename

**Description:** Renames or moves a file on the SFTP server.

<p align="center">
  <img src="/app/assets/docs/images/DP40.png" alt="Datapipe">
</p>

**Label Type:** `sftp_rename_37`  
**Category:** PROCESS  
**Group:** File  

**Functionality Description:**  
Moves file from `sourceFilePath` to `targetFilePath` on SFTP server.

**Configuration:**  
- **Inputs:**  
  - `sourceFilePath (String)`  
  - `targetFilePath (String)`  
- **Outputs:**  
  - `statusCode (Number)`  
  - `message (String)`