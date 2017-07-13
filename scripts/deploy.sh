#!/usr/bin/expect -f

# Usage: To deploy kellenschmidt.com from GitHub run:
# expect deploy.sh {test | prod}
# Use 'test' or 'prod' to define where to deploy to, test or production

set timeout -1
set flag [lindex $argv 0];
cd ~/.ssh
spawn ssh -i id_rsa ubuntu@kellenschmidt.com
expect "Enter passphrase for key 'id_rsa':" {send -- "PASSWORD\r"}
expect "$ " {send -- "source shell-scripts/$flag.sh\r"}
expect "$ " {send -- "exit\r"}
expect "$ " {}
