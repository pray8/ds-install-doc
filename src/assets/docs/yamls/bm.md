# bm.yaml

This bm.yaml file defines a Kubernetes Service and Deployment for the bm (likely short for "Bookmark Manager" or a similarly named service) running in the appveen namespace.

- **Deployment Details**
  - Deployment Name: bm
  - Namespace: appveen
  - Replicas: 1
  - Container Image: datanimbus/datanimbus.io.bm:3.2.10
  - Ports Exposed in Container:
    - 10011 (likely HTTP)
    - 10443 (likely HTTPS)
  - Probes:
    - Liveness & Readiness Probes: Check `/bm/internal/health/live` and `/bm/internal/health/ready` on port 10011
  - Environment Variables:
    - Pulled from a ConfigMap named config
  - Service Account:
    - Uses ds-admin-appveen, likely to access other K8s resources securely

- **Service Details**
  - Service Type: ClusterIP (internal access only)
  - Ports Exposed to Cluster:
    - Port 80 forwards to container's 10011 (HTTP)
    - Port 443 forwards to container's 10443 (HTTPS)
  - Selector: app: bm (binds the service to the deployment)

- **Purpose**
  - Exposes the bm app inside the cluster on standard HTTP/HTTPS ports
  - Routes traffic to appropriate container ports
  - Ensures health through readiness and liveness probes
  - Externalizes config using a ConfigMap for flexibility

# yaml

```yaml

apiVersion: v1
kind: Service
metadata:
  name: bm
  namespace: appveen
spec:
  type: ClusterIP
  selector:
    app: bm
  ports:
    - protocol: TCP
      name: http-port
      port: 80
      targetPort: 10011
    - protocol: TCP
      name: https-port
      port: 443
      targetPort: 10443
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bm
  namespace: appveen
spec:
  replicas: 1
  selector:
    matchLabels:
      app: bm
  template:
    metadata:
      labels:
        app: bm
    spec:
      serviceAccountName: ds-admin-appveen
      containers:
        - name: bm
          image: 'datanimbus/datanimbus.io.bm:3.2.10'
          ports:
            - containerPort: 10011
            - containerPort: 10443
          livenessProbe:
            httpGet:
              path: /bm/internal/health/live
              port: 10011
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          readinessProbe:
            httpGet:
              path: /bm/internal/health/ready
              port: 10011
            initialDelaySeconds: 10
            periodSeconds: 10
            timeoutSeconds: 60
          envFrom:
          - configMapRef:
              name: config
```