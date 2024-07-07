# Use the official Node.js image as a base image
FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory in the container
WORKDIR /app

# Copy the package.json files
COPY package.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application files
COPY . .

# Build the React app using pnpm
RUN pnpm run build

# Use the official NGINX image to serve the build output
FROM nginx:alpine

# Remove the default NGINX configuration file
RUN rm /etc/nginx/conf.d/*

# Copy the NGINX configuration file
COPY ./default.conf /etc/nginx/conf.d

# Copy the build output to the NGINX html directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]