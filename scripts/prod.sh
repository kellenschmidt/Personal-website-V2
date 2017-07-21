#!/bin/bash

# Deploys site code from github to production, *.kellenschmidt.com
# Can be executed from desktop by 'deploy.sh' or manually from server
# Has one argument representing the codebase to deploy i.e: urlshortener.kellenschmidt

CURRENTDATE=`date +"%Y-%m-%d_%T"`

if [ "$1" != "kellenschmidt" ]
then
    if [ "$1" != "urlshortener.kellenschmidt" ]
    then
        echo "Error: The given site: $1.com, does not exist :("
        exit 1;
    fi
fi

cd /var/www/
mv $1.com/ backups/$1.com_${CURRENTDATE}
cp -r test.kellenschmidt.com/ $1.com/
cd /home/ubuntu/shell-scripts/
