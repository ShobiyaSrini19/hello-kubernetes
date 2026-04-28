# Stage 1: Build
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund --loglevel=error
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
# Vite builds into the 'dist' folder by default
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]