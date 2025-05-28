## 🚀 Installation Steps

---

### Step 1: Create Namespace to Install DNIO

**Generalized Command:**

```bash
kubectl create ns <namespace>
```

**Example Usage:**

```bash
kubectl create ns data-stack
```

Check if it was created:

```bash
kubectl get ns
```

---

### Step 2: Generate Server Certificates or Copy from Existing Machine

### To Copy from Existing Machine

Ensure you have the `<your-pem-file>.pem` on both machines.

**Generalized Command:**

```bash
scp -r -i <your-pem-file>.pem <source_path>/odp_default.* <user>@<remote_ip>:/home/ubuntu
```

**Example Usage:**

```bash
scp -r -i av.pem /home/ubuntu/odp-setup/odp_default.* ubuntu@192.168.0.1:/home/ubuntu
```

Rename the keys:

```bash

mv odp_default.crt odp_server.crt
mv odp_default.key odp_server.key
mv odp_server.* keys
```

### To Generate Server Certificates

Based on the domain name and server location, generate the server certificates.

**Generalized Command:**

```bash
openssl req -newkey rsa:2048 -nodes \
  -keyout <your_domain>.key \
  -out <your_domain>.crt \
  -subj "/C=<Country>/ST=<State>/L=<City>/O=<Organization>/OU=<Org Unit>/CN=<Common Name>"
```

**Example Usage:**

```bash
openssl req -newkey rsa:2048 -nodes \
  -keyout odp_server.key \
  -out odp_server.crt \
  -subj "/C=IN/ST=Karnataka/L=Bangalore/O=appveen/OU=Engineering/CN=appveen.com"
```

---

### Step 3: Create Proxy Secret

**Generalized Command:**

```bash
kubectl create secret -n <namespace> generic ds-proxy-sec \
  --from-file=./keys/<your_domain>.key \
  --from-file=./keys/<your_domain>.crt
```
**Example Usage:**

```bash
kubectl create secret -n data-stack generic ds-proxy-sec \
  --from-file=./keys/odp_server.key \
  --from-file=./keys/odp_server.crt
```

Check secrets:

```bash
kubectl get secret -n <namespace>
```

---

### Step 4: Docker Credentials – Use Existing or Create New

#### To Use Existing Docker Credentials

**Generalized Command:**

```bash
scp -i <private_key.pem> <source_path> <user>@<remote_ip>:<destination_path>
```

**Example Usage:**

```bash
scp -i av.pem /home/ubuntu/.docker/*.* ubuntu@192.168.0.1:/home/ubuntu
```

#### To Create New Docker Credentials
If no existing credentials are available, generate new ones:

```bash
docker login 
```
You'll be prompted to enter your Docker Hub (or other registry) username and password or access token. This will automatically generate the required config.json file at:
```bash 
~/.docker/config.json
```
Create Docker directory:

```bash

mkdir .docker
mv *.json .docker
cd .docker/
```

Verify and login:

```bash
docker login -u _json_key --password-stdin https://asia.gcr.io  < /home/ubuntu/.docker/data-stack-gcr-push-key.json
```

---

### Step 5: Prepare YAML Files 

Create folder to place the yaml files:

```bash
mkdir yamls
```
please note these are the yamls required for DNIO 3.2.X,
for detailed information about each YAML file, refer to the YAML section of the documentation:

1. [cache](/app/docs/yamls/cache)
2. [messaging](/app/docs/yamls/messaging)
3. [user](/app/docs/yamls/user)
4. [sm](/app/docs/yamls/sm)
5. [mon](/app/docs/yamls/mon)
6. [bm](/app/docs/yamls/bm)
7. [common](/app/docs/yamls/common)
8. [gw](/app/docs/yamls/gw)
9. [fm](/app/docs/yamls/fm)

__yamls can be copied from the existing server or can be created manually__

__To copy from existing server__

**Generalized Command:**

```bash
scp -r -i <pem_file> <source_path>/*.* <user>@<remote_ip>:<destination_path>
```

**Example Usage:**

```bash
scp -r -i av.pem /home/ubuntu/yamls/*.* ubuntu@192.168.0.1:/home/ubuntu/yamls
```

Update the namespace and release versions inside all YAML files manually.

__To create manually__
```bash

#first create a folder to place the yaml files
mkdir yamls 
#go to the yamls folder
cd yamls
#create config.yaml file and enter the contents from config.yaml 
#from the yaml section, 
#make the necessary changes to the namespace, release versions and docker image.
vi config.yaml


#repeat these steps for all the mentioned yamls

```

---

### Step 6: Docker Login & Pull Latest Images

**Generalized Command:**

```bash
$(aws ecr get-login --region <region> --no-include-email)
docker pull <ecr_repo_url>/<image_name>:<tag>
```

**Example Usage:**

```bash
$(aws ecr get-login --region ap-south-1 --no-include-email)
docker pull 410762039193.dkr.ecr.ap-south-1.amazonaws.com/datanimbus.io.bm:3.0.0
```

Update image tags in YAML files after pulling.

---

### Step 7: Apply YAML Files

Update the configMap values in the ```config.yaml``` file with server specific details
```yaml
Namespace: <namespace>
CACHE_HOST: "cache.<namespace>"
B2B_EDGE_GATEWAY_FQDN: <PublicIP>:30000
DATA_STACK_NAMESPACE: "<namespace>"
FQDN: "<PublicIP>"
MONGO_APPCENTER_URL: mongodb://<PrivateIP>:27017
MONGO_AUTHOR_URL: mongodb://<PrivateIP>:27017
MONGO_LOGS_URL: mongodb://<PrivateIP>:27017
RELEASE: "2.7.0"
STREAMING_HOST: "nats://messaging.<namespace>:4222"
DOCKER_REGISTRY_SERVER: datanimbus.io
```

### Apply the yaml files in the following order:

### Generalized Command:

```bash
kubectl apply -f <yaml_file>
```

### Example Usage:

```bash
kubectl apply -f config.yaml
```

1. `config.yaml`
2. `cache.yaml`
3. `messaging.yaml`
4.  `user.yaml`
5. `sm.yaml`
6. `mon.yaml`
7. `bm.yaml`
8. `common.yaml`
9. `gw.yaml`
10. `fm.yaml`

---

### Step 8: Verify Deployment

**Generalized Command:**

```bash
kubectl get pods -n <namespace>
```

Ensure all pods show status `1/1 Running`

---

### Notes

* Proxy component is excluded in 3.0.\* versions.
* In `gw.yaml`, if `https` is used, update liveness/readiness port from `9000` to `9443`.
