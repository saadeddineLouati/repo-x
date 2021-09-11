pipeline{
    agent any
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
            steps{
               echo("test stage by saaad") 
            }
        }
        stage("deploy"){
            steps{
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
