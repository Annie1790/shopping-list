# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.9.0
# Adjust NGINX_VERSION as desired
ARG NGINX_VERSION=1.25.3

FROM node:${NODE_VERSION}-slim as base

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"


# Throw-away build stage to reduce size of final image
FROM base as build

# Install node modules
COPY package-lock.json package.json ./
RUN npm ci

# Copy application code
COPY . .
RUN npm run build


# Final stage for app image
FROM node:${NODE_VERSION}-alpine

# Copy built application
COPY --from=build /app/build /usr/share/nginx/html

# Start the server by default, this can be overwritten at runtime
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
