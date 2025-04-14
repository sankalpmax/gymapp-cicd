pipeline {
  agent any

  environment {
    SONARQUBE_URL = 'SonarScanner'  // Must match the "Name" in Jenkins → SonarQube servers
    SONAR_TOKEN = credentials('sonar-token') // Add SonarQube token in Jenkins credentials
  }

  stages {
    stage('Checkout Code') {
      steps {
        git url: 'https://github.com/sankalpmax/gymapp-cicd.git', branch: 'main'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv("${SONARQUBE_URL}") {
          sh '''
            npx sonar-scanner \
              -Dsonar.projectKey=gymapp \
              -Dsonar.projectName=gymapp \
              -Dsonar.sources=src \
              -Dsonar.host.url=http://13.61.182.203:5000 \
              -Dsonar.login=${SONAR_TOKEN}
          '''
        }
      }
    }

    stage('Build App') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Archive Artifacts') {
      steps {
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished.'
    }
  }
}
