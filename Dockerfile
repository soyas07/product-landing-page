# Use an official Node.js runtime as a parent image
FROM node:20-alpine as prod

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app's source code to the working directory
COPY . .

# Build the app for production
RUN npm run build


# Use a smaller image for production
FROM nginx:1.25.3-alpine

# Copy the built app from the 'build' stage to the nginx 'html' directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# The default command to start Nginx
CMD ["nginx", "-g", "daemon off;"]