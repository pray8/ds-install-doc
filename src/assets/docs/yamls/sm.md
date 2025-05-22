# sm.yaml

- This YAML deploys the Service Manager (sm) component in the appveen namespace with:

- A ClusterIP Service on port 80, mapping to container port 10003.

- A Deployment with 1 replica of image datanimbus.io.sm:3.2.3.

- Health probes on /sm/internal/health/live and /ready.

- Uses ds-admin-appveen service account, config ConfigMap, and private registry via regsecret.


```yaml

apiVersion: v1
kind: Service
metadata:
  name: sm
  namespace: appveen
spec:
  type: ClusterIP
  selector:
    app: sm
  ports:
    - protocol: TCP
      port: 80
      targetPort: 10003
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sm
  namespace: appveen
spec:
  replicas: 1
  selector:
    matchLabels:
      app: sm
  template:
    metadata:
      labels:
        app: sm
    spec:
      serviceAccountName: ds-admin-appveen
      containers:
        - name: sm
          image: 'datanimbus/datanimbus.io.sm:3.2.3'
          imagePullPolicy: Always
          ports:
            - containerPort: 10003
          livenessProbe:
            httpGet:
              path: /sm/internal/health/live
              port: 10003
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          readinessProbe:
            httpGet:
              path: /sm/internal/health/ready
              port: 10003
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          envFrom:
          - configMapRef:
              name: config
      imagePullSecrets:
        - name: regsecret
```
