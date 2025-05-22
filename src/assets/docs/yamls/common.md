

# common.yaml

This YAML configures the Common service in the appveen namespace:

- **Service**

Type: ClusterIP

Exposes port 80 and routes to container port 3000

- **Deployment**

Runs 1 replica of the common container using a private ECR image (3.1.0)

Health checks via:

Liveness probe: /common/utils/health/live

Readiness probe: /common/utils/health/ready

Environment variables are sourced from the config ConfigMap

Uses regsecret for pulling the image from a private registry.

```yaml 

apiVersion: v1
kind: Service
metadata:
  name: common
  namespace: appveen
spec:
  type: ClusterIP
  selector:
    app: common
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: common
  namespace: appveen
spec:
  replicas: 1
  selector:
    matchLabels:
      app: common
  template:
    metadata:
      labels:
        app: common
    spec:
      containers:
        - name: common
          image: '410762039193.dkr.ecr.ap-south-1.amazonaws.com/datanimbus.io.common:3.1.0'
          ports:
            - containerPort: 3000
          livenessProbe:
            httpGet:
              path: /common/utils/health/live
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          readinessProbe:
            httpGet:
              path: /common/utils/health/ready
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          envFrom:
          - configMapRef:
              name: config
      imagePullSecrets:
        - name: regsecret
```