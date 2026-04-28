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
                echo "Building directly on Windows..."
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                    bat """
                    docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}
                    docker build -t ${DOCKER_ID}/hello-app:latest .
                    docker push ${DOCKER_ID}/hello-app:latest
                    """
                }
            }
        }
        
        stage('K8s Deploy') {
            steps {
                echo "Deploying to Kubernetes..."
                bat """
                kubectl apply -f k8s-spec/
                kubectl rollout restart deployment/hello-app-deployment || echo "First time deploy"
                """
            }
        }
    }
}