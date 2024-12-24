# Server Dockerfile (server/Dockerfile)

# Use an appropriate Node.js base image with version >= 20
FROM node:18.17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the backend port (adjust if needed)
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
