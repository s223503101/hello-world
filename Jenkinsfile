pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Install the project's dependencies using npm (on Windows)
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React app for production (on Windows)
                bat 'npm run build'

                // Archive the build folder as a zip file
                bat 'powershell Compress-Archive -Path build\\* -DestinationPath build.zip'
                archiveArtifacts artifacts: 'build.zip', allowEmptyArchive: false
            }
        }

        stage('Run Tests') {
            steps {
                // Run the React app tests with `--passWithNoTests` to avoid failure if no tests are found
                bat 'npm test -- --watchAll=false --passWithNoTests'
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
