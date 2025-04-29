// import { Injectable } from '@angular/core';

// export interface PageContent {
//     title: string;
//     content: string;
//     lastUpdated?: Date;
// }

// @Injectable({
//     providedIn: 'root'
// })
// export class ContentService {
//     private pageContents: { [key: string]: PageContent } = {
//         'overview': {
//             title: 'Overview',
//             content: `
//         <h2>Platform Overview</h2>
//         <p>Our product “datanimbus.io” aka DNIO is an IPaaS platform.
//         The idea is to help customers solve their integration problem
//         and also to help our existing products integrate with the customer 
//         systems. It’s a single and secured data management platform that 
//         helps an enterprise to organize, analyze, integrate, distribute, 
//         govern, and deploy the data enabling the highest possible security 
//         features.
//         <br><br>
//         We have got two ways to access our product, ie, datanimbus.io Studio and datanimbus.io OpsCenter . 
//         Customers can use these two portals to manage and manipulate the data they are dealing with.
//         <br><br>
//         &nbsp;&nbsp;&nbsp;&nbsp;&bull; Studio / Author: This portal is used by users for defining the data structure and build Flows.
//         <br>
//         &nbsp;&nbsp;&nbsp;&nbsp;&bull; OpsCenter / AppCenter:  This is where the CRUD operations are done on the data along with the audits.
        
        
//         <br><br>
//         These portals can be accessed by users that are created from the Studio/Author. The guide for the whole creation and management of users, bots and groups can be accessed here:
        
//         <br>
//         <div style="margin-left: 20px;">
//             &bull; Role Based Access Control - <a href="https://appveen.atlassian.net/wiki/pages/resumedraft.action?draftId=374800407&draftShareId=82cddb69-4e8e-44fe-bee1-29ebc7c4e902">Link</a>
//         </div>
//         <br>
        
//         Flows are another name for Data Pipes. This page will give you some examples on how to create flows, what are the components and their functionality, what exactly a flow does, and the execution and management of flows.
//         </p>
        
//         <h3>Key Capabilities</h3>
//         <ul>
//           <li>Build Tables to store data with all CRUD APIs in a flash</li>
//           <li>Build APIs / Flows to perform any operation</li>
//         </ul>
//       `,
//         lastUpdated: new Date('2024-03-15')
//         },


    
//         'key-features': {
//             title: 'Key Features',
//             content: `
//         <h2>Data Services (DS)</h2>
//         <p>Our Data Services provide robust API endpoints for data management:</p>
//         <ul>
//           <li>RESTful API endpoints</li>
//           <li>Swagger documentation</li>
//           <li>Data validation</li>
//         </ul>

//         <h2>Data Processing (DP)</h2>
//         <p>Efficient data processing flows:</p>
//         <ul>
//           <li>Automated workflows</li>
//           <li>Custom processing rules</li>
//           <li>Real-time monitoring</li>
//         </ul>
//         <h2>User Based Access Controll</h2>
//       `,
//             lastUpdated: new Date('2024-03-14')
//         },
//         // Add more pages as needed
//     };

//     getPageContent(pageId: string): PageContent | null {
//         return this.pageContents[pageId] || null;
//     }
// } 