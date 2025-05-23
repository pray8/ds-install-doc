**Plugins**
# Introduction

Plugins in datanimbus.io  allow you to create custom nodes for your data pipes, enabling integration with external systems or defining bespoke processing logic. Whether it's pulling data from a Google Blob or listening to a Kafka topic, plugins are powerful building blocks that help you tailor data pipes to your exact needs.


You can use default plugins shipped with the marketplace or create your own custom plugins directly from the interface.

## Accessing Plugins

To view and manage plugins:

    ● Navigate to the Plugins tab on the left-side menu.

    ● Under Installed, you’ll see a list of default plugins provided by the marketplace.

<p align="center">
  <img src="/app/assets/docs/images/plugin_0.png" alt="plugins">
  Plugins page
</p>

You can uninstall plugins you don’t need directly from this view.

### Creating a Custom Plugin

To demonstrate plugin creation, we’ll walk through building a File Reader Plugin. This plugin will act as a Trigger that reads a file from the server and outputs its content as JSON.

#### Step 1: Navigate to the Custom Tab
    ● Go to the Plugins section.

    ● Click on the Custom tab to view your existing custom plugins.

#### Step 2: Create a New Plugin
    ● Click the + New button to start creating a new plugin.

#### Step 3: Select Plugin Type
    ● A dialog will appear asking you to choose the type of plugin:

        ◦ Trigger: Starts a data pipe flow (e.g., file read, webhook).

        ◦ Process: Performs operations in a data pipe (e.g., transformation, formatting).

    For our example, choose Trigger.

<p align="center">
  <img src="/app/assets/docs/images/plugin_1.png" alt="plugins">
  Select plugin type
</p>

#### Step 4: Configure the Plugin
You'll be taken to a configuration screen where you can:

    ● Enter a Name for your plugin (e.g., Read File).

    ● Confirm the Plugin Type as Trigger.

    ● Define Input Parameters:Define Input Parameters:

        ◦ filePath – The path to the file you want to read.

        ◦ Set Data Type to String

        ◦ Set HTML Type to input

<p align="center">
  <img src="/app/assets/docs/images/plugin_2.png" alt="plugins">
  Create plugin
</p>

#### Step 5: Write Plugin Code

Use the code editor to define your plugin logic. Example:

        chowkidar.watch('/home/ubuntu/ratReportUi').on('add',function(fileName) {
            const content = fs.readFileSync(fileName);
            const body = JSON.parse(content);
            process(body);
        });
Click Save to store your plugin.

### Using the Plugin in Data Pipes

Once saved, your custom plugin will be available in the Data Pipe canvas:

    ● Open your Data Pipe.

    ● From the node dropdown, select your custom plugin.

## Conclusion
Plugins in datanimbus.io  provide a flexible way to extend the capabilities of your data pipes. From integrating with external systems to defining custom logic, plugins allow you to build dynamic, production-ready data workflows with ease. Explore the marketplace or start building your own custom plugins today! 