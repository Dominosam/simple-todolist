# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install any dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the application listens on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]