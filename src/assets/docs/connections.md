# Connections

## Introduction

Connections in datanimbus.io  allow you to easily link your data pipes to external systems.
Whether it's databases, message brokers, servers, or cloud services—you can set up Connections to pull or push data seamlessly.

If you frequently interact with external sources like MongoDB, MySQL, Kafka, or SFTP servers, Connections let you define the connection once and reuse it across your workflows.

### Creating a Connection

To create a new Connection, follow these steps:

#### 1) Navigate to the Connections Section

    ● Click on Connections in the left-side menu.

    ● Click the + New button to create a new Connection.

#### 2) Select the Connection Type

    ● A list of available connection types will appear.

    ● Select the connection you want to create (for example, MongoDB).

<p align="center">
  <img src="/app/assets/docs/images/connections_0.png" alt="connections">
  List of connections
</p>

#### 3) Fill Connection Details

Depending on the type selected, you will be prompted to fill in the necessary information.

For MongoDB, you will need to provide:

    ● Connection String (URI)

    ● Database Name

Fill in these details as required.

<p align="center">
  <img src="/app/assets/docs/images/connections_1.png" alt="connections">
  Fill in required details
</p>

#### 4) Create the Connection
Click Save to create and store your new Connection.

Your Connection will now appear in the list and can be reused across your projects.

## Using a Connection in Data Pipes

Once a Connection is created, you can use it inside any data pipe node that supports Connections.

To use a Connection:

    ● Open a Data Pipe.

    ● Add a node that supports Connections (e.g., MongoDB FIND_MANY).

    ● Select the Connection you created from the drop-down.

This will automatically link the node to your external system.

<p align="center">
  <img src="/app/assets/docs/images/connections_2.png" alt="connections">
</p>

## Conclusion

Connections in datanimbus.io  simplify how you interact with external systems.

By creating reusable Connections, you can standardise access across your Data Pipes, save setup time, and avoid repetitive configurations.