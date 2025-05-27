# MongoDB Connection Change Instructions

### 1. Login to the Ubuntu Machine

Login to the Ubuntu machine where the MongoDB connection needs to be updated.

---

### 2. Stop the `mongod` Service on the Current Machine

```bash
sudo systemctl stop mongod
```

---

### 3. Get the Private IP Address

Get the **private IP address** of the machine where the new MongoDB instance has been configured.

---

### 4. Update the ConfigMap

Login again to the Ubuntu machine where the MongoDB connection needs to be changed.

Edit the Kubernetes ConfigMap:

```bash
kubectl edit cm -n <namespace>
```

Update the MongoDB URLs with the private IP address of the new MongoDB machine:

```yaml
MONGO_APPCENTER_URL: mongodb://<private IP address>:27017
MONGO_AUTHOR_URL: mongodb://<private IP address>:27017
MONGO_LOGS_URL: mongodb://<private IP address>:27017
```

---

### 5. Restart the `mongod` Service on the New MongoDB Machine

```bash
sudo systemctl restart mongod
```

---

### 6. Login to `mongod` and Verify

```bash
mongosh
show dbs
use <collection name>
```

---

### ✅ Note

To check if the MongoDB connection is successful, verify that `datastackConfig` and `datastackLogs` collections are added when you run:

```bash
show dbs
```