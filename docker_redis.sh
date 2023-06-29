#!/bin/bash

# Pull the latest MongoDB image from Docker Hub
docker pull redis

# Run a MongoDB container named "mongodb" on port 37017
docker run --name redis -p 7379:6379 -d redis
