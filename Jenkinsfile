stage('K8s Deploy') {
            steps {
                echo "Deploying the new image to Kubernetes..."
                // Updated with 'my-python-app' instead of 'python-deployment'
                bat """
                C:\\Windows\\System32\\wsl.exe bash -c "kubectl set image deployment/python-deployment my-python-app=shobiyasrinid14/hello-app:latest"
                """
            }
        }pipeline {
    agent any
    
    environment {
        // Your Docker Hub ID
        DOCKER_ID = 'shobiyasrinid14' 
    }
    
    stages {
        stage('Docker Build & Push') {
            steps {
                // This pulls your 'shobiyasrinid14' and 'Shobi1234@' from Jenkins Credentials
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    echo "Logging into Docker Hub and pushing image..."
                    
                    // Using -p flag directly to prevent the terminal from hanging
                    bat """
                    C:\\Windows\\System32\\wsl.exe bash -c "docker login -u ${DOCKER_USER} -p ${DOCKER_PASS} && \
                    cd ~/hello-app && \
                    docker build -t ${DOCKER_ID}/hello-app:latest . && \
                    docker push ${DOCKER_ID}/hello-app:latest"
                    """
                }
            }
        }
        
        stage('K8s Deploy') {
            steps {
                echo "Deploying the new image to Kubernetes..."
                // Tells Kubernetes to pull the fresh image we just pushed to the Hub
                bat """
                C:\\Windows\\System32\\wsl.exe bash -c "kubectl set image deployment/python-deployment python-deployment=${DOCKER_ID}/hello-app:latest"
                """
            }
        }
    }
}
