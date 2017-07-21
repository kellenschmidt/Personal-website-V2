#!/usr/bin/expect -f

# Usage: To deploy a site from GitHub run:
# expect deploy.sh {test | prod} {name_of_site_w/o_.com}
# Use 'test' or 'prod' to define where to deploy to, test or production
# ex: expect deploy.sh test urlshortener.kellenschmidt

set timeout -1
set flag [lindex $argv 0]
set site [lindex $argv 1]
cd ~/.ssh
spawn ssh -i id_rsa ubuntu@kellenschmidt.com
expect "Enter passphrase for key 'id_rsa':" {send -- "5mA&iueKabv^hR4A\r"}
expect "$ " {send -- "source shell-scripts/$flag.sh $site\r"}
expect "$ " {send -- "exit\r"}
expect "$ " {}
