# Use the official MongoDB image as the base image
FROM mongo

# Expose the default MongoDB port
EXPOSE 27017

# Set the container name
ENV MONGO_CONTAINER_NAME mongodb

# Run the MongoDB server
CMD ["mongodb"]
