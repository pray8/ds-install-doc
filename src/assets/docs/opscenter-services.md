# Data Services in OpsCenter

While **Data Services** are defined and configured in the **Author Page**, the **OpsCenter** provides a user-friendly interface to interact directly with the live data stored in your deployed Data Services. This is where users with appropriate permissions can perform manual data management operations.

## Viewing Data Records (Read)

The primary display is a table or grid listing the records currently stored in the deployed Data Service.

Each column in the table corresponds to an **Attribute** defined in the Data Service's Design tab (e.g., `ID`, `CUSTOMER ID`, `ACCOUNT NUMBER`, `ACCOUNT NAME`).

You can view the values for each attribute for every record by double-clicking a particular record or by clicking the **"View"** button.

The UI provides robust capabilities to help you find and view specific data:

- **Filtering**: Clicking the **"Filter"** option opens a modal where you can build complex filter conditions based on the Data Service's attributes (e.g., filter where `ID` equals `ADD1001`, or filter by `Status`, `Country`, etc.). Multiple filter conditions can be added to refine your view.
- **Sorting**: You can typically sort the data by clicking on column headers.
- **View Columns**: Allows you to customize which attributes (columns) are displayed in the main grid.

## Creating/Adding Data Records (Create)

- The **"+ Add Data"** button at the top allows you to manually create a single new record. Clicking this opens a form where you can input values for each of the Data Service's attributes.
- The **"Upload"** button provides a way to create multiple records in bulk, typically by uploading a file (like a `.csv` or `.xlsx`) containing data for many new records.

## Editing Data Records (Update)

- You can select one or more records using the checkboxes on the left.
- The **"Edit"** button (available when a single record is selected) allows you to modify the data within an existing record. Clicking on the record itself may also initiate an edit mode or open a detailed view with an edit option.

## Deleting Data Records (Delete)

- After selecting one or more records using the checkboxes, the **"Delete"** button becomes available.
- Clicking **"Delete"** removes the selected records from the Data Service. Note: Actual behavior depends on the **Soft Delete** setting configured in the Data Service's **Settings** tab in the Author environment. If enabled, records are marked as deleted but not permanently removed—allowing for potential recovery.

## Exporting Data

- The **"Export"** button (available both generally and for selected records) allows you to download the data from the Data Service, typically in a common format like CSV, for external use or analysis.

## Permissions

It's important to remember that access to these manipulation actions (**+ Add Data**, **Edit**, **Delete**, **View**, **Upload**, **Export**, and **Filtering**) in the AppCenter OpsCenter is controlled by the **Roles and Permissions** configured for the Data Service and the **Groups** to which Data Services are assigned in the Author environment. Users must belong to a role that has been granted the specific permissions (**Create**, **Edit**, **Delete**, **View**) to perform these actions.


## Dataservice Page in OpsCenter

Login to the Data Service OpsCenter. You will get redirected to the home page.

<p align="center">
  <img src="/app/assets/docs/images/DSOPS1.png" alt="dataservice">
</p>

The left-hand side displays a list of active data services, interactions, and agents. Clicking on a specific data service redirects you to its detailed view.

<p align="center">
  <img src="/app/assets/docs/images/DSOPS2.png" alt="dataservice">
</p>

This page offers various functionalities, such as uploading and exporting data. It also includes options for filtering data based on conditions, accessible from the left-hand side.

<p align="center">
  <img src="/app/assets/docs/images/DSOPS3.png" alt="dataservice">
</p>

---

## Uploading Data

Data can be uploaded in multiple ways. Individual records can be added using the **Add Data** button, while the **Upload** functionality is used for bulk data uploads in supported file formats.

### Using Add Data

<p align="center">
  <img src="/app/assets/docs/images/DSOPS4.png" alt="dataservice">
</p>

### Using Upload

<p align="center">
  <img src="/app/assets/docs/images/DSOPS5.png" alt="dataservice">
</p>

Once the file is uploaded, you will be redirected to the next page where you can select the sheet and other required fields. Then move on to the next step.

<p align="center">
  <img src="/app/assets/docs/images/DSOPS6.png" alt="dataservice">
</p>

The corresponding fields from the file will be mapped to their respective fields in the data service. Once the mapping is complete, the data undergoes a validation process. After validation, you will be redirected to a results page displaying the outcomes, including valid records as well as any conflicts, duplicate entries, or invalid records.

<p align="center">
  <img src="/app/assets/docs/images/DSOPS7.png" alt="dataservice">
</p>

The actions on this page allow the user to decide how to proceed. The records will then be uploaded to the designated data service. In case of conflicts or duplicates, the user can choose whether to continue with the upload or halt the process.

---

## Updating Data

Similar to uploading data, there are multiple ways of updating data in OpsCenter.

<p align="center">
  <img src="/app/assets/docs/images/DSOPS8.png" alt="dataservice">
</p>


To update bulk data:

- Select the desired records individually or use **Select All**.
- Click **Bulk Edit** to update selected records.
- Choose the field to update, enter the new value, and save the changes.  
The updated value will be applied to all selected records.

<p align="center">
  <img src="/app/assets/docs/images/DSOPS9.png" alt="dataservice">
</p>

Another method is by uploading a file, similar to how new data is uploaded.

<p align="center">
  <img src="/app/assets/docs/images/DSOPS10.png" alt="dataservice">
</p>  

On the following page, map the attributes that need to be updated:

<p align="center">
  <img src="/app/assets/docs/images/DSOPS11.png" alt="dataservice">
</p>

> ⚠️ Since updates are based on the `ID`, mapping the `ID` field is **mandatory**.

Proceed to the next page to validate the mapped fields. If conflicts are found with existing records, the system will notify you. For example, two records may conflict with existing entries.

You must take action on the conflicted items — either update them or reject them.

Once action is taken, the system will update the records or skip them if ignored.

