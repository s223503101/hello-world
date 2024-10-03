pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Install the project's dependencies including ESLint
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

        stage('Lint Code with ESLint') {
            steps {
                // Run ESLint to check for code quality and style issues
                bat 'npx eslint .'
            }
        }

        stage('Run Tests') {
            steps {
                // Run the React app tests (on Windows)
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
