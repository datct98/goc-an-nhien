pipeline{
    agent any
    stages{
        stage("Build"){
            steps{
                echo "======== executing Build step ========"
                sh "npm run build"
            }
            post{
                always{
                    echo "========Build - always========"
                }
                success{
                    echo "========Build executed successfully========"
                }
                failure{
                    echo "========Build execution failed========"
                }
            }
        }
    }
    post{
        always{
            echo "========Clean up the pipeline========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}