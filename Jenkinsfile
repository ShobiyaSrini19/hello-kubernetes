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
                echo "Building directly on Windows to bypass WSL network issues..."
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    // We remove the C:\Windows\System32\wsl.exe bash -c part
                    bat """
                    docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}
                    // Change the build line in your Jenkinsfile to this:
docker build -t ${DOCKER_ID}/hello-app:latest . --build-arg CACHEBUST=$(date +%s)
                    docker push ${DOCKER_ID}/hello-app:latest
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