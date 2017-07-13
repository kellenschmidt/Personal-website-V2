#!/usr/bin/expect -f

# SSH into aws server
# Execute using 'expect ssh.sh'

set timeout -1
cd ~/.ssh
spawn ssh -i id_rsa ubuntu@kellenschmidt.com
expect "Enter passphrase for key 'id_rsa':" {send -- "PASSWORD\r"}
expect "$ " { interact }
