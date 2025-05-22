# mon.yaml

- This YAML sets up a monitoring (mon) service in the appveen namespace with:

- A Deployment running 1 replica of the datanimbus.io.mon:3.2.2 image.

- Health checks on /mon/internal/health/*.

- Env config from the config ConfigMap.

- A Service exposing the pod internally at port 80 (mapped to container port 10005).

- Uses a private registry via regsecret.

# yaml

```yaml

apiVersion: v1
kind: Service
metadata:
  name: mon
  namespace: appveen
spec:
  type: ClusterIP
  selector:
    app: mon
  ports:
    - protocol: TCP
      port: 80
      targetPort: 10005
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mon
  namespace: appveen
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mon
  template:
    metadata:
      labels:
        app: mon
    spec:
      containers:
        - name: mon
          image: '410762039193.dkr.ecr.ap-south-1.amazonaws.com/datanimbus.io.mon:3.2.2'
          ports:
            - containerPort: 10005
          livenessProbe:
            httpGet:
              path: /mon/internal/health/live
              port: 10005
            initialDelaySeconds: 10
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /mon/internal/health/ready
              port: 10005
            initialDelaySeconds: 10
            periodSeconds: 10
          envFrom:
          - configMapRef:
              name: config
      imagePullSecrets:
        - name: regsecret