# Build phase
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN apt-get update \
&& apt-get install -y --no-install-recommends nano openssl \
&& apt-get install certbot -y \
&& apt-get install python3-certbot-nginx -y \
&& rm -rf /var/lib/apt/lists/*
RUN npm run build

# Serve phase
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port Nginx will use
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]