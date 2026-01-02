pipeline{
    agent any
    stages{
        stage("Build"){
            steps{
                echo "======== executing Build step ========"
                sh "npm install"
                sh "npm run build"
                sh "sudo mkdir -p /var/www/nuxt-app"
                sh "sudo rm -rf /var/www/nuxt-app/*"
                sh "sudo chown -R jenkins:jenkins /var/www/nuxt-app"
                sh "sudo chmod -R 755 /var/www/nuxt-app"
                sh "sudo cp -r /var/lib/jenkins/workspace/khan-fe/dist/* /var/www/nuxt-app/"
                sh "sudo nginx -t"
                sh "sudo systemctl reload nginx"
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