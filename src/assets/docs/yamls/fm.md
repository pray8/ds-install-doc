# fm.yaml

This YAML configures the File Manager (FM) service in the appveen namespace:

- **Service**
  - Type: ClusterIP
  - Port: 80 → Container port 3000 (HTTP)

- **Deployment**
  - Image: datanimbus/datanimbus.io.fm:1.0.0
  - Replicas: 1
  - Resources:
    - Requests:
      - CPU: 50m
      - Memory: 200Mi
    - Limits:
      - CPU: 1000m
      - Memory: 2Gi
  - Health Checks:
    - Liveness: `/fm/internal/health/live`
    - Readiness: `/fm/internal/health/ready`
  - Volumes:
    - Mounts NFS-backed directories for uploads and persistent storage
  - Environment:
    - Uses config ConfigMap

- **Purpose**
  - Ensures FM service stability with:
    - Resource limits
    - Health monitoring
    - Persistent file storage

File manager can be configured for diffrent kinds of storage, to customize the storage type, update the STORAGE_TYPE environment variable in the config.yaml file, ensure the required environment variables are set.

```bash 
MONGO_RECONN_TIME: 1000
MONGO_RECONN_TRIES: 21600
MONGODB_URL: mongodb://localhost:27017/DNFM	(URL of Mongo DB)
MONGODB_DATABASE:DNFM	(Database of Mongo DB)
MONGODB_COLLECTION:files.metadata	(Collection of Mongo DB)
PORT:3000	(Port in which the server should start)
STORAGE_TYPE:	disk	(gridfs / awss3 / disk / gblob / sftp / azureblob)
LOG_LEVEL:	info	(Logger Level)
REDIS_URL: 	redis://localhost:6379	(URL of Redis Service)
COOKIE_SECRET: NULL	(Cookie Secret Value)
```

If the STORAGE_TYPE is Disk/Volume Mount/PVC, below as to be configured in the ConfigMap:

```bash
ENV: DISK_PATH

Default: /DNIOFM
```
Description: Path of Folder where files will be stored

If the STORAGE_TYPE is MongoDB GridFS, below two environment variables as to be configured in the ConfigMap:

```bash
GRIDFS_CONNECTION_STRING: (no default shown)

GRIDFS_BUCKET:
```

If the STORAGE_TYPE is SFTP Configuration, below environment variables as to be configured in the ConfigMap:

```bash
SFTP_HOST:

SFTP_PORT:

SFTP_USERNAME:

SFTP_PASSWORD:
```
If the STORAGE_TYPE is AWS S3 Configuration, below environment variables as to be configured in the ConfigMap:

```bash
AWS_S3_REGION:

AWS_S3_ACCESS_KEY_ID:

AWS_S3_SECRET_ACCESS_KEY:

AWS_S3_BUCKET: 
```

If the STORAGE_TYPE is Azure Blob Storage, below environment variables as to be configured in the ConfigMap:

```bash
AZURE_CONNECTION_STRING:

AZURE_CONTAINER:
```

If the STORAGE_TYPE is Google Cloud Storage , below environment variables as to be configured in the ConfigMap:

```bash
GBLOB_BUCKET:

GBLOB_PROJECT_ID: 

GBLOB_CLIENT_EMAIL:

GBLOB_PRIVATE_KEY:
```

NOTE: The STORAGE_TYPE can also be configured in the deployment of the fm yaml file.

NOTE: In general below are the changes to be followed while migrating from any 2.x to 3.x along with the ConfigMap changes :

Routing /author, /appcenter, /b2b URLs to GW Cluster IP: You’ll set up reverse proxies to these URLs, redirecting traffic to the new GW cluster in the Nginx configuration.

Route all traffic to GW: The NGINX server should forward all incoming traffic to the GW cluster.

Update environment variables: Any configurations referencing "bm" should be updated to use "gw", reflecting the change in system architecture or service.
For example: 
__If they are using internal bm URL in their App Panel, that has to be changed to gw.__

# yaml

```yaml

apiVersion: v1
kind: Service
metadata:
  name: fm
  namespace: appveen
spec:
  type: ClusterIP
  selector:
    app: fm
  ports:
    - protocol: TCP
      name: http-port
      port: 80
      targetPort: 3000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fm
  namespace: appveen
spec:
  replicas: 1
  selector:
    matchLabels:
      app: fm
  template:
    metadata:
      labels:
        app: fm
    spec:
      containers:
        - name: fm
          image: "datanimbus/datanimbus.io.fm:1.0.0"
          ports:
            - containerPort: 3000
          resources:
            requests:
              cpu: "50m"
              memory: "200Mi"
            limits:
              cpu: "1000m"
              memory: "2Gi"
          livenessProbe:
            httpGet:
              path: /fm/internal/health/live
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          readinessProbe:
            httpGet:
              path: /fm/internal/health/ready
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          envFrom:
            - configMapRef:
                name: config
          volumeMounts:
            - name: uploaded-files
              mountPath: /tmp/app/uploads
            - name: stored-files
              mountPath: /tmp/app/DNIOFM
      volumes:
        - name: uploaded-files
          hostPath:
            path: /mnt/dnio-nfs/DNIOFM/uploads
        - name: stored-files
          hostPath:
            path: /mnt/dnio-nfs/DNIOFM/store
```