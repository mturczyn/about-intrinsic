# 1. For build React app
FROM node:22-alpine AS development

ARG VITE_AI_SERVER_HOST
ENV VITE_AI_SERVER_HOST=$VITE_AI_SERVER_HOST

WORKDIR /app

# COPY .nginx/nginx.conf /app/.nginx/nginx.conf
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

ENV CI=false
ENV PORT=3000

RUN npm run build

# 2. For Nginx setup
FROM nginx:latest

ARG VITE_AI_SERVER_HOST
ENV VITE_AI_SERVER_HOST=$VITE_AI_SERVER_HOST

# Copy config nginx
COPY --from=development /app/.nginx/nginx.conf.template /etc/nginx/templates/default.conf.template

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage to nginx
COPY --from=development /app/build .

# Install envsubst, which is part of gettext package
RUN apt-get update && apt-get install -y gettext-base && apt-get clean

# Command to replace placeholders with environment variables and start NGINX
CMD ["/bin/sh", "-c", "envsubst '${VITE_AI_SERVER_HOST}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
