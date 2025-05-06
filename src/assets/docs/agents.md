# What is an Agent?

An Agent is an executable that facilitates secure file transfers and integrations between different systems.  
It's a key part of the B2B (Business-to-Business) integration platform.

→ Agent is a _**M-SFT**_ which is Managed-Secure File Transfer.

## 1. Core Purpose:

- Acts as a secure bridge between different systems.
- Manages file transfers and data exchange.
- Provides integration capabilities between business systems.

> In DNIO, agents are integrated with DataPipes to create RESTful APIs, enabling file transfers, modifications, and other data processing tasks.

# Configurations that can be made while creating an agent and what is the purpose of each?

- **Two ways to run an agent**:

1. **Schedule**:  
   Agent runs one time and then stops and does not run in the background.

2. **Service**:  
   Agent runs in the background

---

### Parallel uploads

**Input type**: Boolean  
→ Uploading multiple files in one go, batch-wise, where it works as “fire and forget”.  
If the agent is not able to process the number of files, the files will be processed in the immediate next batch.

---

- **Heartbeat Interval**:
  - → Input type: `Int` (time in seconds)  
  - → Specifies the frequency at which the server is hit.

- **Max uploads**:
  - → Input type: `Int`  
  - → When `Parallel_uploads == true`, Max uploads specifies the number of files it can process at a time in a batch.

- **Max downloads**:
  - → Input type: `Int`  
  - → When `Parallel_uploads == true`, Max downloads specifies the number of files it can download at a time in a batch.

- **Poller interval**:
  - → Input type: `Int` (time in seconds)  
  - → Specifies the batch duration.

  **Eg:**  
  **Case**: File Upload, `Parallel uploads: true`, `Heartbeat interval: 10`, `Poller interval: 10`, `Max uploads: 10`  
  → In this particular case, the agent uploads 10 files at a time within 10 seconds. If all the files are not uploaded, the remaining files will be uploaded in the next batch.

- **Upload retry**:
  - → Input type: `Int`  
  - → Specifies the number of times the agent will retry the upload in case of any failure.

- **Download retry**:
  - → Input type: `Int`  
  - → Specifies the number of times the agent will retry the Download in case any failure in upload, eg: server unreachable (Internal server error: 500)

# How to download an agent?

→ To download an agent navigate to Agents tab, create an agent by specifying the required configurations, to Download the agent, click on the three dots, click on Download, select the type of the executable and system architecture.

- <img src="/app/assets/docs/images/agents_0.png" alt="Formula Creation Screenshot" />