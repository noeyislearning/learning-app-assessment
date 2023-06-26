## CLUSTER (PM2)

# 1. Install pm2
npm install pm2 -g # -g for global

# 2. Start app.js with pm2
pm2 start app.js -i 3 # -i for number of instances to run

# 3. List all running instances
pm2 list # or pm2 ls

# 4. Stop all running instances
pm2 stop all

# 5. Delete all running instances
pm2 delete all

# 6. Stopp all running instances on app.js
pm2 stop app

# 7. Delete all running instances on app.js
pm2 delete app

# 8. Start app.js with pm2 and run as many instances as possible
pm2 start app.js -i -1

# 9. Monitor all running instances
pm2 monit

# 10. Reload all running instances
pm2 reload app

# 11. Get logs of all running instances
pm2 logs


## LOADTEST

# 1. Install loadtest
npm install loadtest -g # -g for global

# 2. Run loadtest
loadtest -n 1000 -c 100 http://localhost:3000/ # -n for number of requests, -c for number of concurrent requests

