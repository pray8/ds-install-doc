# Workflows in OpsCenter

Workflows are designed to facilitate **approval processes** before executing any operations within the data service. They ensure **controlled and structured data modifications** by supporting multi-level user approvals.

Records are saved **only after receiving all necessary approvals**, enforcing proper governance.

---

## Accessing Workflows

The Workflow feature can be accessed from the **left-hand side menu** in OpsCenter:

<p align="center">
  <img src="/app/assets/docs/images/OPSWF1.png" alt="dataservice">
</p>

All operations performed in a Data Service — including **Create**, **Update**, **Delete**, and **Draft** — will be listed for approval in this section.

> ❗ Note:  
> The **user who performs the operation cannot approve** the same action.  
> Approval must be granted by a user with the appropriate permissions, as configured in the **Author Portal**.

---

## Submitting a Request for Approval

When a Data Service has workflow enabled, here's how it appears during data addition:

<p align="center">
  <img src="/app/assets/docs/images/OPSWF2.png" alt="dataservice">
</p>

There is also an option to:

- Add **comments**
- Attach **files**

These inputs will be visible to the reviewer.

<p align="center">
  <img src="/app/assets/docs/images/OPSWF3.png" alt="dataservice">
</p>

---

## Reviewer Perspective

Once a request is submitted, it appears in the **reviewer’s approval queue**.

<p align="center">
  <img src="/app/assets/docs/images/OPSWF4.png" alt="dataservice">
</p>

The reviewer can take action using the **Respond** button. Before responding, they can:

- View the request details
- Review comments
- Inspect attachments
- See the username of the requester

<p align="center">
  <img src="/app/assets/docs/images/OPSWF5.png" alt="dataservice">
</p>

---

## Responding to a Request

On the next page, the reviewer can choose to:

- ✅ **Approve**
- ❌ **Reject**
- 🔄 **Request Rework**

Reviewers can also:

- Add their own **comments**
- Attach **files**

If **Rework** is selected, the request is sent back to the original user.  
If **Approved**, it moves to the next stage of approval (if applicable).

<p align="center">
  <img src="/app/assets/docs/images/OPSWF6.png" alt="dataservice">
</p>

---

## Multi-level Approvals & Status Tracking

In multi-stage workflows, once one reviewer approves the request, it proceeds to the **next approver**.

The system also displays a **log of the request’s status**, making it easy to track its journey across approval stages.

<p align="center">
  <img src="/app/assets/docs/images/OPSWF7.png" alt="dataservice">
</p>

Once **all approvals** are completed, the record is **saved to the Data Service**.

> The same approval workflow applies to:
> - Creating workitems
> - Updating records
> - Deleting entries
