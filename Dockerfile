# Stage 1: Build
FROM node:20-alpine AS build-stage
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install ALL dependencies (including devDependencies like Vite)
RUN npm install

# Copy the rest of the code
COPY . .

# Now vite WILL be found and the 'dist' folder will be created
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy the build output from the first stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]