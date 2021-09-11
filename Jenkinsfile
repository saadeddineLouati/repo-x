pipeline{
    agent any
    environment{
        VERSION = "0.0.6"
        SERVER_CREDENTIALS = credentials("test-pipeline-user-id")
    }
    tools{
        nodejs 'NodeJs 16.9.1'
    }
    parameters{
        choice(name:'BUILD_VERSION', choices: ['1.0','2.0','3.0'], description:"Select a BUILD_VERSION parameter to start the build")
        booleanParam(name:"excuteTests", defaultValue: true, description:"")
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
                    params.excuteTests
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
                echo("deploying version ${BUILD_VERSION}") 
            }
        }
    }
    post{
        success{
            echo("Success message")
            sh "npm start &"
        }
        failure{
            echo("Failure message")
        }
    }
}
