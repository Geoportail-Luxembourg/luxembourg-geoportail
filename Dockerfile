# syntax=docker/dockerfile:1.7

# Build stage
FROM node:22.13.0-alpine3.21 AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Install Transifex CLI
RUN apk add --no-cache curl bash \
  && curl -o- https://raw.githubusercontent.com/transifex/cli/master/install.sh | bash \
  && mv /app/tx /usr/local/bin/tx

COPY . .

# Pull latest translations from Transifex and transform PO → JSON
# TX_TOKEN must be provided as a build secret: --secret id=tx_token,env=TX_TOKEN
RUN --mount=type=secret,id=tx_token \
    TX_TOKEN=$(cat /run/secrets/tx_token) npm run fetch-translations

RUN npm run build

# Serve stage
FROM nginx:1.27.2-alpine
ENV NODE_ENV=production

# Replace default nginx config with SPA-friendly one
RUN rm /etc/nginx/conf.d/default.conf \
  && cat <<'EOF' > /etc/nginx/conf.d/default.conf
server {
  listen 80;
  listen [::]:80;
  server_name _;
  root /usr/share/nginx/html;

  # Cache-bust the service worker to ensure updates propagate.
  location = /service-worker.js {
    add_header Cache-Control "no-store, must-revalidate";
    try_files $uri =404;
  }

  # Long-cache static assets.
  location /assets/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
    try_files $uri =404;
  }

  # Default: serve files, fall back to SPA entrypoint.
  location / {
    try_files $uri $uri/ /index.html;
  }
}
EOF

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
