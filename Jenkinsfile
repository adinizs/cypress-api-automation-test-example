pipeline {
    agent any
    
    stages{
        stage('Build') {
            steps {
                // Clean before build
                cleanWs()
                // We need to explicitly checkout from SCM here
                checkout scm
            }
        }

        stage('Preparação do ambiente') {
            steps {
                script{
                    sh "mkdir -p ./allure-results"
                    sh 'docker-compose build'
                }
            }
        }
        stage('Test and Report') {
            steps {
                echo 'running tests'
                sh 'docker-compose run --rm qa npx cypress run -e allure=true'
            }
            post {
                always{
                    script{
                        // dir('allure-results') {
                        //     writeFile file: 'environment.properties', text: "Ambiente=${params.env}"
                        // }
                        allure([
                                includeProperties: false, 
                                jdk: '', 
                                reportBuildPolicy: 'ALWAYS',
                                results: [[path: 'allure-results']],
                                report: 'allure-report'
                        ])
                    }
                }
            }
        }
        stage('Message') {
            steps {
                echo 'Test run finished!'
            }
        }
    }
}