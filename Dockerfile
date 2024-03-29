FROM node:alpine3.19 as build

WORKDIR /app

COPY package*.json .

COPY . .

RUN npm install

RUN npm run build

# Step 2: Server With Nginx
FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=build /app/build .

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]