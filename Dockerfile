# Stage 1: Build
FROM node:20-alpine as build-stage
WORKDIR /app

# Copy both package files
COPY package*.json ./

# Force install EVERYTHING including devDependencies
RUN npm install --include=dev

COPY . .

# Use npx to find vite even if the path is wonky
RUN npx vite build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]