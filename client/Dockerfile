# Use Node.js version 20 or higher
FROM node:18.17-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


RUN npm install

# Copy the rest of the app code
COPY . .

# Expose the port (adjust as needed)
EXPOSE 3000

# Start the client app
CMD ["npm", "start","--","--host","0.0.0.0"]
