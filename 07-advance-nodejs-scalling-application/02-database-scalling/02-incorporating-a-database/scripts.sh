# Starting app.js with pm2 with 3 instances
pm2 start app.js -i 3

# Monitor all running instances
pm2 monit

# Stop all running instances
pm2 stop all

# Delete all running instances
pm2 delete all