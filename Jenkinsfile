pipeline{
    agent any
    environment{
        VERSION = "0.0.6"
        SERVER_CREDENTIALS = credentials("test-pipeline-user-id")
    }
    stages{
        stage("build"){
            steps{
               echo("Build stage by saaad 2-2")
               nodejs("NodeJs 16.9.1"){
                   sh "yarn install"
               }
            }
        }
        stage("test"){
            when{
                expression{
                    BRANCH_NAME =='dev'
                }
            }
            steps{
               echo("test stage by saaad")
            }
        }
        stage("deploy"){
            steps{
               echo("version: ${VERSION}")
               echo("SERVER_CREDENTIALS: ${SERVER_CREDENTIALS}")
               echo("deploy stage by saaad") 
            }
        }
    }
    post{
        success{
            echo("Success message")
        }
        failure{
            echo("Failure message")
        }
    }
}
