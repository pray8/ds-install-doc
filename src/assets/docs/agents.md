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

<!-- - <img src="/app/assets/docs/images/agents_0.png" alt="Agents 0" />
- <img src="/app/assets/docs/images/agents_0.png" alt="Agents 1" /> -->


<div style="display: flex; gap: 10px;">
  <img src="/app/assets/docs/images/agents_0.png" alt="agents_0" style="width: 45%;">
  <img src="/app/assets/docs/images/agents_1.png" alt="agents_1" style="width: 45%;">
</div>

# What are the folders that are inside a agent?
When we download and extract an agent, we can see all the below folders -

<img src="/app/assets/docs/images/agents_2.png" alt="agents_2">

1. BIN FOLDER : This folder contains the executable, which is the most critical component of an agent, serving as its core intelligence or "brain."

2. CONF FOLDER : This folder contains the configuration of the agent, which includes details that are necessary to run an agent.
<img src="/app/assets/docs/images/agents_3.png" alt="agents_3">

3.DATA FOLDER : This folder contains subfolders named after the DataPipe that utilizes this specific agent, it further contains folders which are 
  1. Input  The default input folder. When a file is placed in this folder, the agent uploads it to a flow if the DataPipe is correctly configured.
  2. Output : The default output folder. When the agent downloads a file, it is stored in this directory.
  3.Processing : When the file is in processing state, file can be seen in the processing folder.

4.LOGS FOLDER : This folder contains the log files of the agent

# Steps to run an agent in Linux: 
## THERE ARE TWO WAYS TO RUN A AGENT : 

## FIRST WAY

1. Download and Extract the Archive

unzip <agent.zip> -d <destination-folder>

2. Grant Execution Permissions

  chmod +x stop-services.sh
  chmod +x start-services.sh
  chmod +x start-agent.sh

3. Start the Agent

./start-agent.sh
  You will be prompted to enter the authentication password.

  Once authenticated, the agent will start running.

## SECOND WAY (RUNS AGENT IN THE BACKGROUND, DOES NOT STOP UNTIL MANUALLY INTERRUPTED)
  ### 1. Download and extract the archive
    unzip <agent.zip> -d <destination-folder>
  ### 2. Grant Execution Permissions
    chmod +x stop-services.sh
    chmod +x start-services.sh
    chmod +x start-agent.sh
  ### 3. Create a Background service in linux : 
    1.Navigate to  /home/.config/systemd/user  or ./home/etc/systemd/user depending on    the system configuration.
    2. Create a Background service : (nano – can be used instead of viorvim)
      vi <service-name>.service
  ### 4. Write a bg- service for the agent you want to run as an agent
    [Unit]
    Description=<your-agent-name>
    [Service]
    WorkingDirectory= <path-to-your-agent>
    #User=you can specify the user here
    #Group=you can specify the group here
    ExecStart= <path-to-your-agent>/bin/datastack-agent -c <path-to-your-agent>/conf/agent.conf -p <your-agent-password>
    Restart=always
    RestartSec=30
    #StandardOutput=file:./servicelog/access.log
    #StandardError=file:./servicelog/error.log

    [Install]
    WantedBy=multi-user.target

  ### 5. Enable the bg-service that is created 
  <img src="/app/assets/docs/images/agents_3.png" alt="agents_4">
  ### 6. Start the bg-service
  <img src="/app/assets/docs/images/agents_3.png" alt="agents_5">

    To stop the running agent : systemctl --user stop <your-service>.service can be used.
    To check the status of agent : systemctl --user status dnio-agent can be used.

  Following these steps, the agent should start, if any problem is encountered we can use (this reloads the demon process)
  systemctl deamon-reload

## Steps to run an agent in Windows: 
### Two ways to run in windows as well 
 
  ### Method 1 : 
  1. Download and extract the agent executable

  2. open command prompt, change directory to the agent location
  
  3. start-agent.bat -p <agent-password>

  ### Method 2 : (Running as a service, by scheduling it as a task)
  1. Navigate to command prompt, run the cmd as administrator 

  2. Schedule the task, the command to schedule the task : (Below command executes every 5 minutes)
    schtasks /create /tn "demo1" /tr "cmd.exe /c start /B <path-to-your-agent>\bin\datastack-   
      agent.exe -p <your-agent-password> -c <path-to-your-agent>\conf\agent.conf" /sc minute /mo 5 /F   

  3. Navigate to Task scheduler, a task should be created by the name you have specified in the command that has been executed, click on the created task, click on run

  4. Following these steps, a task will be created that runs every five minutes, and the agent will be started.

## What does OTA update do?
1. The OTA (On-the-Air) agent update process enables seamless, automated updates of the agent without requiring manual intervention. It retrieves the latest executable files from the Base Manager service and ensures the agent is always up to date with the newest version.

### Using agent nodes in the datapipe
● When creating a DataPipe using Agent nodes and configuring agents within these nodes, the agent automatically retrieves the flows in which it participates.

1. There are three major nodes related to agents they are

  → Agent Receive Node

  → Agent Send Node

  → Agent Pickup Node

Agent Receive node :

● This is a trigger node that receives files from agents.

● When this node is used, the code sets up a 202 status response to indicate file processing.

● The Agent Receive node scans both the default input folder and any custom input directories that have been configured. If a file is placed in any of these directories, the node uploads it to the flow in which the agent is configured.

Configurations that can be done in the Agent receive node :

<img src="/app/assets/docs/images/agents_3.png" alt="agents_6">

1. Unique txn : It checks for duplicate files, and if any are found, they are moved to the ERROR folder.

2. Agents : Agent that will check for the file and uploads to flow.

3. Input directories : Custom input directories define additional paths that the agent monitors. Configure the path to the desired input directory to enable file tracking.

4. File extensions : File extensions that will be picked by the agent

5. File patterns : Regex: If a file's name matches this specified regular expression, the agent will pick up that file for processing.

6. Encrypt : If enabled agent will encrypt the contents of the file before uploading it to the flow.

## Agent send node :

● This node sends files to specified agents, and downloads that particular file.

● Sets up download options including:

    ◦ Output filename (uses input filename or remote transaction ID)

    ◦ File data

    ◦ Target agent ID and name

    ◦ Flow name and deployment name

    ◦ Output directories 

● Configurations that can be done in agent send node :

<img src="/app/assets/docs/images/agents_3.png" alt="agents_7">

● Output Directories: 

● A list of directories where the file will be sent.

    Example:

      ["path1", "path2"] 
 

● Data : 
  The actual file content to be sent. Typically mapped from the incoming agent's file field.

● Output filename :
  The name you assign to the output file. This can be different from the original filename and is mapped from the incoming agent's filename field or set manually.

● extract : 
  A boolean or function. If set to true, and the file is a compressed archive (e.g., .zip, .tar), it will automatically be extracted after sending.

● decryptFile : 
  A boolean or function. By default it is set to true, when encryption is not enabled, this should be configured as false, 
  ERROR CASE :  When a file which is not encrypted is sent from agent receive to agent                        send, and the decrypt is not set to false , we will encounter an error stating unsupported state or data

## Agent pickup node:
● This node is responsible for picking up files from a specified directory and passing them to another flow or API for further processing.

### Functionality
1. Monitors one or more directories for incoming files.

2. When a file is detected, it is picked up and its data and metadata (e.g., filename, size, extension) are passed forward to the next node.

3. This node typically acts as the entry point for flows that rely on file-based triggers

<img src="/app/assets/docs/images/agents_3.png" alt="agents_8">

Agents : Select the agent that will run for this action

Input directories : Select the folder which the agent will be polling the files from

Flows : Select the flow/flows to which the agent will send the current picked file to.

<img src="/app/assets/docs/images/agents_3.png" alt="agents_9">

1. pickupFiles : File extensions/ file name.

2. Pickup file patterns : Regex: If a file's name matches this specified regular expression, the agent will pick up that file for processing.

## Agent routes : 
● The goal is to simplify the Manager File Transfer (MFT) process, making it easier to configure for simple cases while also being more cost and resource efficient.

● To reduce redundancy and optimize resource consumption, we’ve enhanced Datapipes by enabling file transfers to be configured as Routes within Agents. Previously, each flow creation would spin up a separate pod and consume memory unnecessarily. With this implementation, we’ve streamlined the process—eliminating the need for additional pods and significantly improving memory efficiency.

<img src="/app/assets/docs/images/agents_3.png" alt="agents_10">

● Routes establish direct paths between Agents, enabling seamless and memory-efficient file transfers from a single input directory to multiple destination directories.

### CNC : 
● The CNC executes the selected command via the designated Agent, operating directly on the folders associated with that Agent on the host machine.

<img src="/app/assets/docs/images/agents_3.png" alt="agents_11">

These are the Linux commands that will execute on the host machine and provide the results in the Actions tab.