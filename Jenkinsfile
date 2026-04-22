pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18'
    }

    environment {
        NODE_ENV = 'test'
        NPM_CONFIG_FUND = 'false'
        NPM_CONFIG_AUDIT = 'false'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'master',
                url: 'https://github.com/rendhrivaalya/express.git'
            }
        }

        stage('Clean Workspace') {
            steps {
                sh '''
                echo "Cleaning workspace..."
                rm -rf node_modules package-lock.json
                npm cache clean --force
                '''
            }
        }

        stage('Install Dependencies') {
    steps {
        sh '''
        echo "Clean install dependencies..."
        rm -rf node_modules package-lock.json
        npm cache clean --force
        npm install --legacy-peer-deps
        '''
    }
}

        stage('Lint (Code Quality)') {
            steps {
                sh '''
                echo "Running ESLint..."
                npm run lint
                '''
            }
        }

        stage('Test (Mocha)') {
            steps {
                sh '''
                echo "Running tests..."
                npm run test || npm test
                '''
            }
        }

        stage('Coverage (Optional)') {
            steps {
                sh '''
                echo "Running coverage..."
                npm run test-cov || true
                '''
            }
        }

        stage('Deploy (Simulation)') {
            steps {
                sh '''
                echo "Deploy simulation..."
                mkdir -p /tmp/express-ci
                cp -r . /tmp/express-ci
                '''
            }
        }
    }

    post {
        success {
            echo 'PIPELINE SUCCESS ✔ CI Express berjalan normal'
        }

        failure {
            echo 'PIPELINE FAILED ❌ cek dependency / test error'
        }

        always {
            echo 'Cleaning after build...'
        }
    }
}
