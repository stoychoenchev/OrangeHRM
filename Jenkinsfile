pipeline {
  agent any

  tools {
    nodejs 'node-18'  // Make sure you have "node-18" set up in Jenkins Global Tools
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        bat 'npm ci'  // Changed from 'sh' to 'bat' for Windows
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        bat 'npx playwright install'  // Removed '--with-deps' as it's not needed for Windows
      }
    }

    stage('Run Tests') {
      steps {
        bat 'npx playwright test'  // Changed from 'sh' to 'bat' for Windows
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
