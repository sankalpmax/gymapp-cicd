pipeline {
    agent any

environment {
        SONARQUBE_URL = 'SonarScanner'
        SONAR_TOKEN = credentials('sonarqube-token') // Jenkins credential ID (secret text)
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sankalpmax/gymapp-cicd.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('MySonarQube') { // This name must match Jenkins -> SonarQube config
                    sh """
                    mvn sonar:sonar \
                        -Dsonar.projectKey=gym-app \
                        -Dsonar.host.url=http://13.61.182.203:5000 \
                        -Dsonar.login=$SONAR_TOKEN
                    """
                }
            }
        }
    }
}
