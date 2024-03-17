# syntax = docker.io/docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.11.1
# Adjust NGINX_VERSION as desired
ARG NGINX_VERSION=1.25.4

FROM docker.io/library/node:${NODE_VERSION}-slim as base

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
FROM docker.io/library/nginx:${NGINX_VERSION}-alpine

# Copy built application
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Start the server by default, this can be overwritten at runtime
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
