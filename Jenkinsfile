pipeline {
    agent any
    
    environment {
        // Define environment variables
        NODE_VERSION = '16.x' // Specify your Node.js version here
    }

    stages {
        stage('Install Node.js') {
            steps {
                // Install Node.js if required
                script {
                    def nodeJs = tool name: 'NodeJS', type: 'NodeJSInstallation' // Assuming NodeJS is installed in Jenkins
                    env.PATH = "${nodeJs}\\bin;${env.PATH}" // Adjusting the PATH for Windows
                }
            }
        }

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
