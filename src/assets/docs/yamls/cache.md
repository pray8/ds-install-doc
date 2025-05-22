# cache.yaml

This Kubernetes YAML sets up a Redis caching service within the appveen namespace using two resources:

- **Deployment**
  - Runs a single Redis pod using the lightweight redis:5-alpine image
  - Mounts host directory `/mnt/cache` to `/data` in the container, ensuring Redis data is stored persistently on the node
  - Exposes Redis on its default port 6379 within the pod

- **Service**
  - Creates a ClusterIP service named cache
  - Allows other services in the cluster to communicate with Redis via port 6379
  - Uses a label selector (app: cache) to route traffic to the Redis pod

- **Use Case**
  - Provides an internal, persistent, and lightweight Redis cache for your application
  - Suitable for storing temporary data
  - Suitable for queues
  - Suitable for sessions

```yaml

apiVersion: v1
kind: Service
metadata:
  name: cache
  namespace: appveen
spec:
  type: ClusterIP
  selector:
    app: cache
  ports:
    - protocol: TCP
      port: 6379
      targetPort: 6379
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cache
  namespace: appveen
spec:
  replicas: 1
  selector:
    matchLabels:
      app: cache
  template:
    metadata:
      labels:
        env: 1.0.0
        app: cache
    spec:
      containers:
      - name: cache
        image: redis:5-alpine
        imagePullPolicy: Always
        ports:
        - containerPort: 6379
        volumeMounts:
          - name: cache-db
            mountPath: /data
      volumes:
        - name: cache-db
          hostPath:
            path: /mnt/cache
```
