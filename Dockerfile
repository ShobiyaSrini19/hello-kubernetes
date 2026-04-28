# Stage 1: Build
FROM node:20-alpine AS build-stage
WORKDIR /app

# 1. Copy package files first
COPY package.json package-lock.json* ./

# 2. Force a clean install of all dependencies
# We use --include=dev to make sure Vite is definitely installed
RUN npm install --include=dev

# 3. Copy the rest of the files
COPY . .

# 4. Build the project
RUN npx vite build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]