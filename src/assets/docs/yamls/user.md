# user.yaml

- This YAML sets up the User (RBAC) service in the appveen namespace:

- **Service**
  - Type: ClusterIP
  - Port: 80
  - Target Container Port: 10004

- **Deployment**
  - Replicas: 1
  - Container:
    - Uses a specific ECR image
    - Health checks:
      - Live: `/rbac/internal/health/live`
      - Ready: `/ready`
  - Security:
    - Uses ds-admin-appveen service account
    - Uses regsecret for private registry access
  - Configuration:
    - Loads environment variables from config ConfigMap

```yaml
apiVersion: v1
kind: Service
metadata:
  name: user
  namespace: appveen
spec:
  type: ClusterIP
  selector:
    app: user
  ports:
    - protocol: TCP
      port: 80
      targetPort: 10004
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user
  namespace: appveen
spec:
  replicas: 1
  selector:
    matchLabels:
      app: user
  template:
    metadata:
      labels:
        app: user
    spec:
      serviceAccountName: ds-admin-appveen
      containers:
        - name: user
          image: '410762039193.dkr.ecr.ap-south-1.amazonaws.com/datanimbus.io.user:3.2.0-beta_2024.11.25.08.25'
          ports:
            - containerPort: 10004
          livenessProbe:
            httpGet:
              path: /rbac/internal/health/live
              port: 10004
            initialDelaySeconds: 10
            periodSeconds: 10
        readinessProbe:
            httpGet:
              path: /rbac/internal/health/ready
              port: 10004
            initialDelaySeconds: 10
            periodSeconds: 10
          envFrom:
          - configMapRef:
              name: config
      imagePullSecrets:
        - name: regsecret
```