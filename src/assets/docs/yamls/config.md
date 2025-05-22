# YAMLS

# config.yaml

This Kubernetes ConfigMap named config in the appveen namespace provides environment configuration for various services in the application. It contains key-value pairs for:

- **Timeouts & Limits**
  - API request timeout
  - File upload size
  - Log rotation settings

- **B2B Gateway Settings**
  - Hostnames
  - Encryption
  - Throttling
  - Retries

- **MongoDB Connections**
  - URLs for appcenter
  - URLs for author
  - URLs for logs

- **Streaming & Caching**
  - NATS (messaging) connection details
  - Redis (cache) connection details

- **Certificates**
  - Metadata for TLS certificate generation

- **Security & RBAC**
  - Token durations
  - Login rules
  - Headers

- **Docker Settings**
  - Engine type
  - Format
  - TLS verification

- **UI Behavior**
  - File type support
  - Log TTL
  - UI flags

Essentially, this is a centralized configuration for environment-specific variables used across services in the stack.

```yaml

apiVersion: v1
kind: ConfigMap
metadata:
  name: config
  namespace: appveen
data:
  API_REQUEST_TIMEOUT: "300"
  DS_FS_MOUNT_PATH: /tmp/ds
  EXPERIMENTAL_FEATURES: "true"
  B2B_ENABLE: "true"
  B2B_AGENT_LOG_MAX_FILE_SIZE: 10M
  B2B_AGENT_LOG_RETENTION_COUNT: "10"
  B2B_AGENT_LOG_ROTATION_TYPE: days
  B2B_AGENT_LOG_TTT: "2592000"
  B2B_AGENT_MAX_FILE_SIZE: 400M
  B2B_DEFAULT_CONCURRENT_FILE_UPLOADS: "5"
  B2B_EDGE_GATEWAY_FQDN: qa.datanimbus.io:30000
  B2B_ENCRYPT_FILE: "true"
  B2B_FILE_THROTTLING_TOKENS: "3"
  B2B_GATEWAY_FQDN: qa.datanimbus.io:3000
  B2B_HB_FREQUENCY: "10"
  B2B_HB_LOG_EXPIRY: "1800"
  B2B_HB_MISSED_COUNT: "3"
  B2B_RETAIN_FILE_ON_ERROR: "true"
  B2B_RETAIN_FILE_ON_SUCCESS: "true"
  B2B_SHARED_CLASS_PATH: /opt/shareclasses
  B2B_TRANSFER_LEDGER_ENTRY_TTL: "43200"
  BOOKMARK_OPEN_TAB: "true"
  CERTIFICATE_COMMON_NAME: data.stack.capiot.com
  CERTIFICATE_COUNTRY: IN
  CERTIFICATE_EMAIL: data.stack@capiot.com
  CERTIFICATE_LOCALITY: Bangalore
  CERTIFICATE_ORGANIZAION: appveen
  CERTIFICATE_ORGANIZATION_UNIT: Engineering
  CERTIFICATE_ROOT_DOMAIN: appveen.com
  CERTIFICATE_STATE: Karnataka
  DIRECTORY_CONNECTION_TIMEOUT: "10000"
  DIRECTORY_RECORD_FETCH_TIME_LIMIT: "20"
  DOCKER_CONTAINER_ENGINE: docker
  DOCKER_CONTAINER_ENGINE_TLS_VERIFY: "false"
  DOCKER_CONTAINER_FORMAT: docker
  # DOCKER_REGISTRY_SERVER: 172.31.25.158:5000
  FQDN: qa.datanimbus.io
  GOOGLE_API_KEY: <API_KEY>
  HOOK_CONNECTION_TIMEOUT: "30"
  HOOK_POST_BATCH: "500"
  HOOK_RETRY: "3"
  KEY_SIZE: "4096"
  LOG_LEVEL: info
  MODE: DEBUG
  MONGO_APPCENTER_URL: mongodb://172.31.1.249:27017
  MONGO_AUTHOR_DBNAME: datastackConfig
  MONGO_AUTHOR_URL: mongodb://172.31.1.249:27017
  MONGO_LOGS_DBNAME: datastackLogs
  MONGO_LOGS_URL: mongodb://172.31.1.249:27017
  MONGO_RECONN_TIME: "1000"
  MONGO_RECONN_TRIES: "21600"
  STREAMING_CHANNEL: datastack-cluster
  STREAMING_HOST: nats://messaging.appveen:4222
  STREAMING_PASS: ""
  STREAMING_RECONN_ATTEMPTS: "500"
  STREAMING_RECONN_TIMEWAIT_MILLI: "500"
  STREAMING_USER: ""
  NODE_MAX_HEAP_SIZE: "4096"
  DATA_STACK_ALLOWED_FILE_TYPE: jpeg,ppt,xls,csv,doc,jpg,png,gif,zip,tar,rar,gz,bz2,7z,mp4,mp3,pdf,ico,docx,pptx,xlsx,ods,xml,txt
  DATA_STACK_NAMESPACE: appveen
  ODP_NAMESPACE: appveen
  DATASTACKENV: K8s
  RBAC_BOT_TOKEN_DURATION: "60"
  RBAC_HB_INTERVAL: "60"
  RBAC_HB_MISS_COUNT: "3"
  RBAC_USER_CLOSE_WINDOW_TO_LOGOUT: "false"
  RBAC_USER_RELOGIN_ACTION: allow
  RBAC_USER_TO_SINGLE_SESSION: "false"
  RBAC_USER_TOKEN_DURATION: "600"
  RBAC_USER_TOKEN_REFRESH: "true"
#  SEC_HEADER_X_XSS_PROTECTION: 1; mode=block
  CACHE_HOST: cache.appveen
  CACHE_PORT: "6379"
  CACHE_RECONN_ATTEMPTS: "500"
  CACHE_RECONN_TIMEWAIT: "500"
  RELEASE: "2.3.0"
  SAVE_FILTER_DEFAULT_MODE_PRIVATE: "true"
  TLS_REJECT_UNAUTHORIZED: "TRUE"
  UI_LOGS_TTL: "172800"

```