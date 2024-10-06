pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Install dependencies including ESLint and TypeScript ESLint plugins
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React app for production
                bat 'npm run build'

                // Archive the build folder as a zip file
                bat 'powershell Compress-Archive -Path build\\* -DestinationPath build.zip'
                archiveArtifacts artifacts: 'build.zip', allowEmptyArchive: false
            }
        }

        stage('Run Tests') {
            steps {
                // Run the React app tests
                bat 'npm test -- --watchAll=false --passWithNoTests'
            }
        }
    }

    post {
        always {
            // Clean up the workspace
            cleanWs()
        }
    }
}
