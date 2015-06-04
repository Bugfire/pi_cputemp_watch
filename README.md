# pi_cputemp_watch

requires mysql module

    # npm install mysql

pi_cputemp_watch.sh example

    #!/bin/sh
    # for crontab
    # * * * * * /AISEG_WATH_PATH/pi_cputemp_watch/pi_cputemp_watch.sh

    cd `dirname "${0}"`
    /NODE_JS_PATH/node pi_cputemp_watch.js
