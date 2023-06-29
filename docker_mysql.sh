#!/bin/bash

# Pull the latest MongoDB image from Docker Hub
docker pull mysql

# Run a MongoDB container named "mongodb" on port 37017
docker run --name mysql -p 3406:3306 -d -e MYSQL_ROOT_PASSWORD=123456 mysql
