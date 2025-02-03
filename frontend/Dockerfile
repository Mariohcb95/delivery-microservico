FROM node:lts AS builder
WORKDIR /app
COPY . .
COPY proxy.conf.js /app
COPY package.json /app
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/static
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/mime.types /etc/nginx/mime.types
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]