# App Panel

## Introduction

The App Panel is a centralized configuration interface that allows users to customize their applications, manage variables, define base images, and set interaction retention policies. It provides flexibility in system customization, ensuring seamless integration and efficient data handling across various components.

The App Panel consists of the following sub-features:

        1. Theme – UI customization, including branding elements.

        2. App Variable – Variable creation for dynamic data processing.

        3. Base Image – Custom image creation for Dataservice and Datapipe.

        4. Interaction Settings – Configuring interaction retention policies.

1. Theme

    The Theme tab allows users to configure branding settings for their application interface. Key functionalities include:

    ● Logo Upload – Users can upload a custom logo.

    ● Accent Color Selection – Set primary colors for UI elements.

    ● Reset Functionality – Restore default theme settings.

<p align="center">
  <img src="/app/assets/docs/images/app_panel_0.png" alt="app_panel">
</p>

Screenshot Insight

    ● The first screenshot highlights the App Panel in yellow, showcasing the available sub-features
    (Theme, App Variable, Base Image, Interaction Settings) in green.

    ● Upon selecting Theme, users are presented with customization options.

2. App Variable

    The App Variable section facilitates the creation of dynamic variables that can be referenced across different components in DataNimbus.io . These variables enhance modularity and consistency in integration workflows.

<p align="center">
  <img src="/app/assets/docs/images/app_panel_1.png" alt="app_panel">

</p>

Screenshot Insight

    ● Above screenshot displays the creation of a variable named amith under the App Variable section.

    ● This variable serves as an integral reference point in later configurations.
 

3. App Variable Usage in Dataservice

    App Variables can be integrated into Dataservice workflows. The platform allows mapping variables inside prehooks, ensuring flexible data handling.

<p align="center">
  <img src="/app/assets/docs/images/app_panel_2.png" alt="app_panel">
</p>

Screenshot Insight

    ● Above screenshot demonstrates how the variable amith is used within Dataservice (hookint).

    ● It is mapped under Integration → Prehook, showcasing its application in automation and data
    processing.

4. Base Image

    The Base Image section enables users to create custom base images for both Dataservice and Datapipe. This feature ensures consistency in deployments and enhances adaptability.

Key Features:

    ● Users can select specific configurations for Dataservice and Datapipe.

    ● The step-by-step process for base image creation is outlined for ease of implementation.

<p align="center">
  <img src="/app/assets/docs/images/app_panel_3.png" alt="app_panel">
</p>

Screenshot Insight

    ● Above screenshot illustrates the process of creating a custom base image, defining
    configurations for both Dataservice and Datapipe.

    ● The image also details steps involved in the creation process.

5. Interaction Settings

    The Interaction Settings section controls data retention settings for Datapipes. This feature is
    crucial for managing historical interactions and optimizing system performance.

<p align="center">
  <img src="/app/assets/docs/images/app_panel_4.png" alt="app_panel">
</p>

Screenshot Insight

    ● Above screenshot shows configurations for interaction retention, allowing users to set limits
    for how long interactions are maintained.

## Conclusion

The App Panel in DataNimbus.io serves as a powerful customization and automation tool, allowing users to tailor their applications effectively. By leveraging Theme settings, App Variables, Base Images, and Interaction configurations, organizations can optimize workflows, improve branding, and enhance data processing efficiency.