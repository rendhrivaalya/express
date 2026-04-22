pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'master',
                url: 'https://github.com/rendhrivaalya/express.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Express tidak butuh build khusus'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy lokal'
                sh 'mkdir -p /tmp/express && cp -r . /tmp/express'
            }
        }
    }
}
