#!/bin/bash

# Pull the latest MongoDB image from Docker Hub
docker pull mongo

# Run a MongoDB container named "mongodb" on port 37017
docker run --name mongodb -p 37017:27017 -d mongo
