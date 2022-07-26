FROM node:16.15.1-alpine
RUN apk add --no-cache libc6-compat

WORKDIR /

COPY /build .

RUN npm install --global serve 

EXPOSE 80
CMD ["serve", "-l", "80", "-s", "build"]
