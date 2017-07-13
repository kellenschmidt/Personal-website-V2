#!/bin/bash

# Deploys kellenschmidt.com code from github to test, test.kellenschmidt.com
# Can be executed from desktop by 'deploy.sh' or manually from server

cd /var/www/temp-download/
git clone https://github.com/kellenschmidt/kellenschmidt.com.git
sudo rm -r ../test.kellenschmidt.com
mv kellenschmidt.com/ ../test.kellenschmidt.com/
cd ../test.kellenschmidt.com/public/
npm install
grunt deploy
cd /home/ubuntu/
