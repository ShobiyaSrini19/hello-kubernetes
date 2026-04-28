# Stage 1: Build
FROM node:20-alpine AS build-stage
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Use 'npm run build' instead of calling the binary directly
# (Make sure your package.json has a "build": "vite build" script)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]