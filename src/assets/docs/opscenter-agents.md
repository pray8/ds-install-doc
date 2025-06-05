
# Agents in OpsCenter

Agents in OpsCenter provide a clear and consolidated view of all actions performed by agents, along with real-time access to their operational logs. Whether you're tracking file movements, or troubleshooting an issue, Agent details in OpsCenter serves as the single interface to monitor and manage all agent activity effectively.

---

## 🔍 Agent View: Files, Routes, and Logs

When you click on an Agent in OpsCenter, you're taken to a detailed view that’s broken down into three key tabs: **Files**, **Routes**, and **Logs**. Each tab offers a specific perspective into that Agent’s role in file transfers and integration operations.

---

## 🔄 Files Tab

The Files tab shows all files either uploaded to or downloaded from the Agent.

- **Uploaded**: These are files received by the Agent from external systems or users.
- **Downloaded**: These are files sent from the Agent to another system or destination.

Each entry includes:

- **Upload Time**: Timestamp of when the file was handled.
- **File Name**: The actual name of the transferred file.
- **File Size**: Indicates the file’s weight (e.g., KB, MB).
- **Download Icon**: Click this icon to directly download a copy of the file to your machine — useful for inspection or backups.

### 🔍 Search Functions

- **Search by Date**: Filter file records by a specific date to narrow down large sets of transfers.
- **Search File**: Type part of a file name to quickly locate matching records.

_All the uploaded and downloaded files can be re-downloaded to the system._

<p align="center">
  <img src="/app/assets/docs/images/OPSAGENTS1.png" alt="dataservice">
</p>

---

## 🚚 Routes Tab

The Routes tab is where all active file transfers between Agents are visualized, managed, and monitored. This page gives a detailed view of the configuration and activity of individual Routes, simplifying the Manager File Transfer (MFT) experience.

### 🧠 Background Context

Previously, configuring a file flow meant provisioning a dedicated pod for each transfer, which consumed memory even for simple cases. With the new approach, Routes are defined directly within Agents — removing the need for extra pods. This results in better memory utilization, simpler setup, and a cleaner UI for managing transfers.

### 🔄 Understanding Routes

Each Route represents a channel between two Agents — a source and a destination. In the UI, this is clearly shown with directional arrows. For example:

`Demo2 ➝ Demo1`

This means files from Agent Demo2 are being routed to Demo1 under the selected demo_route.

### 📄 Files in Route

Once a Route is selected (e.g., `demo_route`), the right panel displays a list of files that were transferred using this route. For each file, the following details are shown:

- **File Name** – The name of the transferred file.
- **Uploaded At** – Timestamp when the file was uploaded from the source Agent.
- **Downloaded At** – Timestamp when the file reached the destination Agent.

This list gives a chronological view of all file movements across the route, making it easy to audit or verify delivery.

### 🔍 Search & Filters

- **Search Routes** – Helps locate a route by name.
- **Search Files** – Filters files shown within the selected route.
- **Search by Date (Upload/Download)** – Limits the view to a specific time window for uploads or downloads.

These search features are especially useful when dealing with large volumes of files across multiple routes.

<p align="center">
  <img src="/app/assets/docs/images/OPSAGENTS2.png" alt="dataservice">
</p>

---

## 📜 Logs Tab

The Logs tab offers a clear view into the internal events and operations that occur within a Data Service. Whether you're debugging a failed execution or simply monitoring service activity, this tab gives you the visibility you need.

When a service is running, all logs emitted by the system will appear here — categorized and filterable in real time.

### 🔍 Filtering Logs by Type

You can refine the logs shown using the following severity levels:

- 🔴 **ALL** – Displays every log entry, regardless of type.
- 🟢 **INFO** – Shows general updates, service startup messages, or successful operations.
- 🔵 **DEBUG** – Useful for developers; shows detailed diagnostic logs about internal service behavior.
- ⚫ **TRACE** – Shows the most granular information, typically used for tracing execution paths in complex workflows.
- 🟠 **WARN** – Indicates something unexpected occurred, but the service is still functioning.
- 🔴 **ERROR** – Highlights failed operations or critical issues that need attention.

### 🔁 Auto Refresh Logs

Toggle the **Auto Refresh Logs** switch to continuously update the log feed without manual refreshes. Ideal for real-time monitoring during service execution.

### 🔍 Search Logs

Use the search bar (or press Alt+Shift+S) to search for specific terms, error messages, or identifiers within the logs. This is especially helpful when scanning through high-volume output.

<p align="center">
  <img src="/app/assets/docs/images/OPSAGENTS3.png" alt="dataservice">
</p>

### 📅 Search by Date

Click on **Search by Date** to filter logs based on a selected time range. This is helpful when auditing or troubleshooting a specific event window.