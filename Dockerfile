FROM node:alpine as build-reactproject-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build-reactproject-stage /app/build /usr/share/nginx/html