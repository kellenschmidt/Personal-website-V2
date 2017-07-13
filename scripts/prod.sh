#!/bin/bash

# Deploys kellenschmidt.com code from github to production, kellenschmidt.com
# Can be executed from desktop by 'deploy.sh' or manually from server

CURRENTDATE=`date +"%Y-%m-%d_%T"`

cd /var/www/
mv kellenschmidt.com/ backups/kellenschmidt.com_${CURRENTDATE}
cp -r test.kellenschmidt.com/ kellenschmidt.com/
cd /home/ubuntu/
