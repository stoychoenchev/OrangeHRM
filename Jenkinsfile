pipeline {
  agent any

  tools {
    nodejs 'node-18'  // 👈 Make sure you have "node-18" set up in Jenkins Global Tools
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx playwright test'
      }
    }

    stage('Publish HTML Report') {
      steps {
        publishHTML([ 
          reportDir: 'playwright-report', 
          reportFiles: 'index.html', 
          reportName: 'Playwright Test Report'
        ])
      }
    }
  }
}
