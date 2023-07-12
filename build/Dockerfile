FROM node:16-alpine as builder
WORKDIR /app
COPY ../app/package.json .
COPY ../app/yarn.lock .
RUN yarn install
COPY ../app/ .
RUN yarn build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
RUN rm /etc/nginx/nginx.conf
COPY build/nginx.conf /etc/nginx/
#EXPOSE 8088
ENTRYPOINT ["nginx", "-g", "daemon off;"]
