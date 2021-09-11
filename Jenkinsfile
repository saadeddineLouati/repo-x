pipeline{
    agent any
    environment{
        VERSION = "0.0.6"
        SERVER_CREDENTIALS = credentials("test-pipeline-user-id")
    }
    tools{
        nodejs 'NodeJs 16.9.1'
    }
    stages{
        stage("build"){
            steps{
               echo("Build stage by saaad 2-2")
               nodejs("NodeJs 16.9.1"){
                   sh "yarn install"
                   sh "npm start"
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
                withCredentials([usernamePassword(credentialsId: 'test-pipeline-user-id', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                // available as an env variable, but will be masked if you try to print it out any which way
                // note: single quotes prevent Groovy interpolation; expansion is by Bourne Shell, which is what you want
                sh 'echo $PASSWORD'
                // also available as a Groovy variable
                echo USERNAME
                // or inside double quotes for string interpolation
                echo "username is $USERNAME"
                }
                echo("deploy stage by saaad") 
            }
        }
    }
    post{
        success{
            echo("Success message")
            npm start
        }
        failure{
            echo("Failure message")
        }
    }
}
