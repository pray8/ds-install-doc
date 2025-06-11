
# SCB – Reporting Engine Documentation

This document acts as an outline of how we built a reporting engine that is customizable and capable of delivering configurable reports from large volumes of data. Initially, the requirement was to generate a T+1 MIS CSV report for a single customer using 1 million existing records.

Later, they requested the generation of CAMT output of 100 customers with 10 billion (100 crore) existing records. Since our existing infrastructure supported only a single report generation at a time, we loaded 25 million records for customers (1 million per customer) and demonstrated the report generation for one customer in the CAMT format. The system consists of three key data services and automated pipelines to process and deliver reports efficiently.


## Data Services and their functions

### 1. Data Service – Client Master

Stores customer-level details, including:

- Client Code, Email ID, Source System (RCMS/Vault)
- Report Preferences (Type, Frequency, Delivery Mode: Email, H2H, API)
- Next Run DateTime for scheduling
- Current Records: 25

```json
{
    "_id": "CLI1020",
    "clientCode": "CDALG839",
    "accountNumber": "4448271546735",
    "emailId": "reports@dalgio.com",
    "sourceSystem": "RCMS",
    "time": "08:00",
    "frequency": "T + 1",
    "startDateTime": {
        "rawData": "2025-02-18T11:39:06.894Z",
        "tzData": "2025-02-18T11:39:06.894Z",
        "tzInfo": "Zulu",
        "utc": "2025-02-18T11:39:06.894Z",
        "unix": 1739878746894
    },
    "endDateTime": {
        "rawData": "2025-02-28T11:39:06.894Z",
        "tzData": "2025-02-28T11:39:06.894Z",
        "tzInfo": "Zulu",
        "utc": "2025-02-28T11:39:06.894Z",
        "unix": 1740742746894
    },
    "deliveryPreference": "H2H",
    "reportType": "Consolidated camt054",
    "_metadata": {
        "deleted": false,
        "version": {
            "release": "dev",
            "document": 5
        },
        "createdAt": "2025-02-18T11:39:06.895Z",
        "lastUpdated": "2025-02-19T09:02:48.126Z"
    },
    "_wasNew": false,
    "nextRunDateTime": {
        "rawData": "2025-02-19T11:39:06.895Z",
        "tzData": "2025-02-19T11:39:06.895Z",
        "tzInfo": "Zulu",
        "utc": "2025-02-19T11:39:06.895Z",
        "unix": 1739965146895
    }
}
```

### 2. Data Service – Report

Created dynamically by the Report Poller based on Client Master data

Fields: Client ID, Report Type, Start & End DateTime, Status (New, In Process, Completed, Failed), Reason

```json
{
    "_id": "REP1008",
    "clientId": "CVDI9304",
    "reportType": "Consolidated camt054",
    "status": "New",
    "reason": "CAMT.054",
    "_metadata": {
        "deleted": false,
        "version": {
            "release": "dev",
            "document": 12
        },
        "createdAt": "2025-02-18T11:43:28.702Z",
        "lastUpdated": "2025-02-19T08:20:55.631Z"
    },
    "_wasNew": false,
    "startDateTime": {
        "rawData": "2025-02-19T16:04:33Z",
        "tzData": "2025-02-19T16:04:33.000Z",
        "tzInfo": "Zulu",
        "utc": "2025-02-19T16:04:33.000Z",
        "unix": 1739981073000
    }
}
```

### 3. Data Service – Transaction

Stores all transaction records associated with each client.

Total Records: 25 crore (1 crore per client)

```json
{
  "_id": "RTA9202300001-1",
  "channelid": "0008",
  ...
  "referenceno": "IN5IN6774547957",
  "_metadata": {
    "deleted": false,
    "version": { "release": "dev", "document": 2 },
    "createdAt": "2025-02-18T05:47:25.729Z",
    "lastUpdated": "2025-02-18T05:47:25.729Z"
  },
  "_wasNew": false
}
```

## Data Processing Pipelines

### Report Poller Data Pipe

<p align="center">
  <img src="/app/assets/docs/images/SCB1.png" alt="agents">
</p>

Polls the Client Master Service and generates Report Records based on configured schedules.

### Report Dispatcher Data Pipe

<p align="center">
  <img src="/app/assets/docs/images/SCB2.png" alt="agents">
</p>

Fetches New report records and initiates processing.

Internally triggers the Report Generator to generate reports.

### Report Generator Data Pipe

<p align="center">
  <img src="/app/assets/docs/images/SCB3.png" alt="agents">
</p>

Uses Client ID to fetch transaction data (1 crore per client).

Applies aggregation logic to generate CAMT.054 files.

Delivers reports via the client's preferred method (Email, H2H, API).

## Workflow Summary

1. **Client Setup**: Bank registers customers in Client Master Service.
2. **Polling & Report Creation**: Report Poller creates report requests.
3. **Report Processing**: Dispatcher fetches & processes reports using transaction data.
4. **Report Generation**: Aggregation logic extracts relevant transactions.
5. **Delivery**: Reports are sent via configured channels.