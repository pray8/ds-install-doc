# gw.yaml

This YAML defines a Kubernetes Deployment and Service for a component named gw in the appveen namespace.

- **Deployment & Service Configuration**
  - Runs 1 replica of a container from a private ECR image
  - Exposes ports:
    - 9000 (HTTP)
    - 9443 (HTTPS)
  - Uses ClusterIP for internal service exposure
  - Includes liveness and readiness probes on HTTPS
  - Loads config from:
    - Two ConfigMaps
    - Secret volume for keys
  - Designed for internal routing and secure communication within the cluster

## yaml 

```yaml

apiVersion: v1
kind: Service
metadata:
  name: gw
  namespace: appveen
spec:
  type: ClusterIP
  selector:
    app: gw
  ports:
  - name: http-port
    protocol: TCP
    port: 80
    targetPort: 9000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gw
  namespace: appveen
spec:
  replicas: 1
  selector:
    matchLabels:
      app: gw
  template:
    metadata:
      labels:
        app: gw
    spec:
      containers:
        - name: gw
          image: '410762039193.dkr.ecr.ap-south-1.amazonaws.com/datanimbus.io.gw:3.x-MAR-12'
          ports:
            - containerPort: 9443
              protocol: TCP
            - containerPort: 9000
              protocol: TCP
          livenessProbe:
            httpGet:
              path: /gw/internal/health/live
              port: 9443
              scheme: HTTPS
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          readinessProbe:
            httpGet:
              path: /gw/internal/health/ready
              port: 9443
              scheme: HTTPS
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          envFrom:
          - configMapRef:
              name: config
          - configMapRef:
              name: dnio-headers
          volumeMounts:
          - mountPath: /tmp/app/keys
            name: ds-proxy-sec
            readOnly: true
      volumes:
      - name: ds-proxy-sec
        secret:
          defaultMode: 420
          secretName: ds-proxy-sec
```