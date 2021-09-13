pipeline {
    environment {
    registry = "saadeddinelouati/repo-x"
    registryCredential = 'dockerhub'
    dockerImage = ''
    }
    tools{
        dockerTool 'dockerTool'
    }

    agent any
    stages {
            // stage('Cloning our Git') {
            //     steps {
            //     git 'https://github.com/saadeddineLouati/repo-x.git'
            //     }
            // }

            stage('Building Docker Image') {
                steps {
                    script {
                        dockerImage = dockerTool.build registry + ":$BUILD_NUMBER"
                    }
                }
            }

            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    script {
                        dockerTool.withRegistry('', registryCredential) {
                        dockerImage.push()
                        }
                    }
                }
            }

            stage('Cleaning Up') {
                steps{
                  sh "docker rmi --force $registry:$BUILD_NUMBER"
                }
            }
        }
    }