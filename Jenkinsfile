pipeline {
    agent any
    
    environment {
        DOCKER_ID = 'shobiyasrinid14' 
    }
    
    stages {
        stage('Docker Build & Push') {
            steps {
                echo "Logging into Docker Hub and pushing image..."
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
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
                bat """
                C:\\Windows\\System32\\wsl.exe bash -c "kubectl set image deployment/python-deployment my-python-app=${DOCKER_ID}/hello-app:latest"
                """
            }
        }
    }
}
