# API Keys

## Introduction

The API Keys feature enables secure access to various services, ensuring controlled interactions with Data Services and Datapipes. It plays a crucial role in authentication and authorization, allowing users to generate API keys for managing integrations efficiently.

Steps to create an API Key

    ● Login to author portal and click on API Keys under management tab.

    ● Mention the desired name and expiry duration for the key.

    ● Click on create key

<p align="center">
  <img src="/app/assets/docs/images/api_keys_0.png" alt="api-keys">
</p>

  ● You will land to below page from where you can copy the API key.

<p align="center">
  <img src="/app/assets/docs/images/api_keys_1.png" alt="api-keys">
</p>

The API Keys panel consists of the following sub-features:

  1. Data Services – Assign API key permissions to interact with service endpoints.

  2. Datapipes – Define access control policies for pipeline operations.


1. API Keys Dashboard

The API Keys section provides a central location for creating, managing, and configuring API access.

<p align="center">
  <img src="/app/assets/docs/images/api_keys_2.png" alt="api-keys">
</p>

Screenshot Insight

  ● Highlighted Sections:

    ◦ The API Keys feature is marked in yellow.

    ◦ The available sub-features, Data Services and Datapipes, are highlighted in green.

  ● Key Parameters:

    ◦ A list of existing API keys with expiration dates.

    ◦ Clicking on an API key (test1) reveals detailed configurations.

    ◦ Manage Option for "abc" DataService has been enabled, allowing fine-grained control over service access.

Key Uses

  ● Facilitates secure API authentication and role-based access management.

  ● Ensures controlled interaction with data services and pipelines.

  ● Provides an expiration mechanism, reinforcing access security.


2. Adding the API Key for Authentication

Before making API requests, authentication must be set up using the generated key.

<p align="center">
  <img src="/app/assets/docs/images/api_keys_3.png" alt="api-keys">
</p>

Screenshot Insight

  ● Highlighted Sections:

    ◦ The API key ("test1") retrieved earlier is inserted under Bearer Token Authentication.

    ◦ The field is marked in green, ensuring proper authorization before executing API calls.

Key Uses

  ● Establishes secure authentication using Bearer Token methodology.

  ● Ensures that only authorized services interact with the system.

  ● Helps maintain integrity and compliance in API transactions.

3. Making a POST Call to Data Services

With authentication enabled, users can execute API calls to interact with Data Services.

<p align="center">
  <img src="/app/assets/docs/images/api_keys_4.png" alt="api-keys">
</p>

Screenshot Insight

  ● Highlighted Section:

    ◦ The screenshot captures a POST API request.

    ◦ The endpoint for abc DataService is provided.

    ◦ A structured body payload containing data is included.

    ◦ The Send button is clicked to trigger the API call.

Key Uses

  ● Enables data insertion into Data Services using API requests.

  ● Ensures structured data transactions, optimizing system operations.

  ● Validates how API endpoints integrate with the backend.

  ● Viewing the Submitted Data in AppCenter

After executing the API call, the data passed is successfully stored in AppCenter.

<p align="center">
  <img src="/app/assets/docs/images/api_keys_5.png" alt="api-keys">
</p>

Screenshot Insight

  ● Highlighted Section:

    ◦ The newly added data is visible in AppCenter, marked in green.

    ◦ The entries now reflect real-time updates from the executed API call.

Key Uses

  ● Confirms successful API execution and data persistence.

  ● Supports real-time monitoring of API interactions.

  ● Ensures visibility into API-driven system updates.

## Conclusion

The API Keys feature provides a robust mechanism for secure authentication, controlled access, and structured API interactions. By leveraging API keys, users can ensure reliable data flow while maintaining security compliance.