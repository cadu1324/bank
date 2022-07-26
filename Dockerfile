FROM node:16.15.1-alpine
RUN apk add --no-cache libc6-compat

WORKDIR /

COPY /build .

RUN npm install --global serve 

EXPOSE 3000
CMD ["serve", "-l", "3000", "-s", "build"]
