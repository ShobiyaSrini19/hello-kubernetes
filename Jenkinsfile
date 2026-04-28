pipeline {
    agent any
    
    environment {
        DOCKER_ID = 'shobiyasrinid14' 
    }
    
    stages {
        stage('Unit Test') {
            steps {
                // We echo a skip message because React apps use different testing tools (like Vitest/Jest)
                echo "React Frontend detected. Skipping Python unit tests..."
            }
        }

        stage('Docker Build & Push') {
            steps {
                echo "Logging into Docker Hub and pushing React Frontend image..."
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
                echo "Deploying the React image to Kubernetes..."
                bat """
                C:\\Windows\\System32\\wsl.exe bash -c "kubectl apply -f ~/hello-app/k8s-spec/ || kubectl rollout restart deployment/python-deployment"
                """
            }
        }
    }
}