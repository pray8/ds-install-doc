# Data Formats

## What are Data Formats?

Data Formats are pre-defined schemas designed to provide a consistent structure to your data across the system. They serve as blueprints that define the expected shape, fields, and types of data, helping to standardize communication between different components.

## Why are we using Data Formats?

Data Formats provide a consistent structure for data across nodes and services. They simplify mapping and validation, reduce errors, and help speed up development and maintenance by ensuring that all data follows a predictable pattern.

## Where can we use Data Formats?

● Data Pipes:

    To structure data flowing between different nodes, ensuring smooth mapping and transformations.

● Validations:

    To automatically validate incoming or outgoing data against a predefined schema, reducing errors.

● Mapping Interfaces:

    To simplify mapping fields between different systems or data sources by providing a consistent reference structure.

How Data Formats can be configured?

1. In the Author page, in the left panel under “DATA” navigate to the “Formats” section.

<p align="center">
  <img src="/app/assets/docs/images/dataformats_0.png" alt="dataformats">
  Demonstration - 01
</p>

2. For creating a Data Format, click on the "+ New" button option. Enter a Name for your data format. Choose the required format type (e.g., JSON, XML, CSV, XLS, etc.) from the available options and click on “Create”.

<p align="center">
  <img src="/app/assets/docs/images/dataformats_1.png" alt="dataformats">
  Demonstration - 02
</p>


3. After selecting the format type, you will be taken to the Design screen, Add attributes by clicking "+ New Attribute". Define the Attribute Name and Attribute Type (e.g., Text, Number, Date, etc.).
Repeat to add all necessary fields as per your schema.

4. After adding all attributes, click Save to complete the creation of the data format.

<p align="center">
  <img src="/app/assets/docs/images/dataformats_2.png" alt="dataformats">
  Demonstration - 03
</p>

## How Data Formats and Data services can be used in Datapipes ?

## PREREQUISITES: 

1. Dataservice - create a data service with attributes - name: text, location: text, age: number refer - Data Service

2. Data Format - create a data format with datatype - json and add attributes - firstname: text, location: text, age: number

Steps to create Data pipe: 

1.  Login to Author Page, navigate to the “Pipes” feature and click on “+New”.

2. Provide the “Name”, select the HTTP Server node.

3. Add Parse JSON Node, configure a data format in the output parameters and map data to data in the data mapper.

<p align="center">
  <img src="/app/assets/docs/images/dataformats_3.png" alt="dataformats">
  Configure the “data format” here under output parameters in the Parse JSON Node.
</p>

4. Add Data Service Create Node, configure a Data service in the “select connection” and map data to data, all the individual attributes and add the JWT token value. Click on “Done”

<p align="center">
  <img src="/app/assets/docs/images/dataformats_4.png" alt="dataformats">
  Configure the data service here in the “dataservice create Node”
</p>

<p align="center">
  <img src="/app/assets/docs/images/dataformats_5.png" alt="dataformats">
  Mapping configuration done in the “Dataservice Create Node”
</p>

5. Add Render JSON Node, this node prepares the final JSON structure to be returned. Here, in the data mapper, map data to data.

6. Click on “Publish”.

7. Navigate to the “Deployments” tab, click on “+New”. Enter the “Name” and select the published pipe. Refer - Deployments

8. Once pipe is selected, click on “save changes” and click on “Start” to make the deployment active.

### Steps to Test the Datapipe in Postman:

● Copy the Datapipe URL from the datapipes tab (e.g.,/https://qa.datanimbus.io/b2b/pipes/sanity/dFtest) 

● Open Postman and create a new POST request.

● Paste the URL into the request field.

● Go to the Body tab, select raw → JSON, and enter the payload.

e.g.,
    {
        "name" : "komal",
        "location" : "BLR",
        "age" : 23
    }

● Click Send and check the response for success or errors.

<p align="center">
  <img src="/app/assets/docs/images/dataformats_6.png" alt="dataformats">
  Postman request and response demonstration
</p>

### Steps to Verify the results:

1. Login to Appcenter with valid credentials and Navigate to the “INTERACTIONS” tab on the left       panel.

2. Select the datapipe and check for the latest interaction with “Success” status.

<p align="center">
  <img src="/app/assets/docs/images/dataformats_7.png" alt="dataformats">
  Appcenter - Interactions page after the datapipe is triggered.
</p>

3. Navigate to the “DATA SERVICES” section and select the dataservice configured in the datapipe.
Check of a new record is added.

<p align="center">
  <img src="/app/assets/docs/images/dataformats_8.png" alt="dataformats">
  Appcenter - Record added in the Dataservice
</p>

## Other features of Data Formats

1. View -  This action typically opens the data format in a read-only mode. You can see all its configurations, fields, structures, and associated metadata, but you cannot make any changes. It's used for inspection and understanding the format's details.

2. Edit - This allows user to modify the selected data format. Clicking this would open the Data format's configuration in an editable mode, where you can change its name, attributes, data type other settings. Changes are saved by clicking on the 'Save' button.

3. Copy - This option creates a new data format that is an exact duplicate of the selected one. It's useful when you need a new format that is very similar to an existing one, saving you the effort of configuring it from scratch. The copied format usually gets a default name like "[Original Name] Copy" which user can then edit.

4. Delete - This option permanently removes the selected data format from the system. Systems often ask for confirmation before deleting (e.g., "Are you sure you want to delete this Data Format?") because deletion is usually irreversible and can affect other parts of the system that might depend on that format.

<p align="center">
  <img src="/app/assets/docs/images/dataformats_9.png" alt="dataformats">
</p>
