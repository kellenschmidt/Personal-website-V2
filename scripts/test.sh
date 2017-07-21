#!/bin/bash

# Deploys site code from github to test, test.kellenschmidt.com
# Can be executed from desktop by 'deploy.sh' or manually from server
# Has one argument representing the codebase to deploy i.e: urlshortener.kellenschmidt

if [ "$1" != "kellenschmidt" ]
then
    if [ "$1" != "urlshortener.kellenschmidt" ]
    then
        echo "Error: The given site: $1.com, does not exist :("
        exit 1;
    fi
fi

cd /var/www/temp-download/
git clone https://github.com/kellenschmidt/$1.com.git
sudo rm -r ../test.kellenschmidt.com
mv $1.com/ ../test.kellenschmidt.com/
cd ../test.kellenschmidt.com/
if [ "$1" = "kellenschmidt" ]
then
    cd public/
    npm install
    grunt deploy
elif [ "$1" = "urlshortener.kellenschmidt" ]
then
    npm install
    ng build --prod
fi
cd /home/ubuntu/shell-scripts
