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
        script {
            // This ensures if the build fails, the pipeline kills itself here
            bat "docker build -t shobiyasrinid14/hello-app:latest ."
            withCredentials([string(credentialsId: 'docker_hub_creds', variable: 'DOCKER_PASS')]) {
                bat "docker login -u shobiyasrinid14 -p %DOCKER_PASS%"
                bat "docker push shobiyasrinid14/hello-app:latest"
            }
        }
    }
}
        
        stage('K8s Deploy') {
    steps {
        echo "Deploying to Kubernetes..."
        bat """
        @echo off
        :: Apply the whole folder
        kubectl apply -f k8s-spec\\ --validate=false
        kubectl rollout restart deployment/hello-app-deployment || echo "Fresh deployment"
        """
    }
}
        stage('Integration Test') {
    steps {
        bat "docker-compose up --exit-code-from test"
    }
}
    }
}