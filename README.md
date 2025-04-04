## Integration with Google Cloud
This app is containerised with Docker and uploaded to Google Cloud's Artifact Registry.  
It demonstrates how a microservice can be stored, managed, and run from GCP infrastructure.

### Required tools
- Git
- Visual Studio code
- Node.js
- Docker
- Google CLoud Platform(GCP)

### Installation
1. Clone the repository:
```
git clone https://github.com/lswitlearning/sit737-2025-prac5d.git
```

2. Install required dependencies:
```
npm install
```

### Step-by-Step: Push Docker Image to Google Cloud Artifact Registry

On Google Cloud Platform
```
Step 1: Enable Artifact Registry API
Step 2: Create a Repository
```

On Local Machine

1. Log in and Initialize gcloud: 
```
gcloud init
```
2. Authenticate Docker with Google Cloud
```
gcloud auth configure-docker australia-southeast1-docker.pkg.dev
```
3. Build Docker Image
```
docker build -t myapp .
```

4. Tag it for Google Cloud
```
docker tag myapp australia-southeast1-docker.pkg.dev/sit737-25t1-lam-5dc5f78/sit737-2025-prac5d/myapp
```

5. Push the Image to GCP
```
docker push australia-southeast1-docker.pkg.dev/sit737-25t1-lam-5dc5f78/sit737-2025-prac5d/myapp
```
6. Run the Image from GCP to Test
```
docker run -p 8081:3000 australia-southeast1-docker.pkg.dev/sit737-25t1-lam-5dc5f78/sit737-2025-prac5d/myapp
```
7. Open your browser and go to:  
http://localhost:8081  
If the app runs (showing "Hello, Docker!"), the deployment is successful.