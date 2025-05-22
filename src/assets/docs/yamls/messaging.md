# messaging.yaml

This Kubernetes YAML defines a NATS Streaming Server (a lightweight, high-performance messaging system) deployed inside the appveen namespace.

- **Deployment Summary**
  - Deployment Name: messaging
  - Image Used: nats-streaming:0.11.2
  - Replicas: 1 (runs a single pod)
  - Args:
    - Cluster ID: datastack-cluster
    - Store type: FILE (persists messages to disk)
    - Data directory: `/store`
    - Message retention: 24h
  - Volume Mount:
    - Mounts `/mnt/store` on the host machine to `/store` in the container (used for persisting messages)

- **Service Summary**
  - Service Name: messaging
  - Type: ClusterIP (for internal access only)
  - Port Exposed: 4222 (default NATS port)
  - Selector: Targets pods labeled with app: messaging

- **Use Case**
  - Provides an internal message broker using NATS Streaming
  - Suitable for microservices to publish and subscribe to messages
  - Supports fault-tolerant and performant message handling

```yaml

apiVersion: v1
kind: Service
metadata:
  name: messaging
  namespace: appveen
spec:
  type: ClusterIP
  selector:
    app: messaging
  ports:
    - protocol: TCP
      port: 4222
      targetPort: 4222
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: messaging
  namespace: appveen
spec:
  replicas: 1
  selector:
    matchLabels:
      app: messaging
  template:
    metadata:
      labels:
        app: messaging
    spec:
      containers:
      - name: messaging
        image: nats-streaming:0.11.2
        imagePullPolicy: Always
        args:
          - "-cid"
          - "datastack-cluster"
          - "--store"
          - "FILE"
          - "--dir"
          - "/store"
          - "--max_age"
          - "24h"
        ports:
          - containerPort: 4222
        volumeMounts:
          - name: messaging-store
            mountPath: /store
      volumes:
        - name: messaging-store
          hostPath:
            path: /mnt/store
```
