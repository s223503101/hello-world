pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Install the project's dependencies using npm (on Windows)
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run the React app tests (on Windows)
                bat 'npm test -- --watchAll=false'
            }
        }

        stage('Build') {
            steps {
                // Build the React app for production (on Windows)
                bat 'npm run build'
            }
        }

        stage('Deploy (optional)') {
            steps {
                // You can deploy your React app if you have a deployment environment set up
                echo 'Deploying the build...'
                // Example of copying build files on Windows (optional)
                // bat 'copy build\\* \\\\your-server\\path-to-deploy\\'
            }
        }
    }

    post {
        always {
            // Clean up workspace after the build
            cleanWs()
        }
    }
}
