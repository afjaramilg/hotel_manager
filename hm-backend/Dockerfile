# syntax=docker/dockerfile:1
FROM node:19-alpine
WORKDIR /hm-backend
COPY . .
RUN npm install @nestjs/cli
RUN npm install mongodb
RUN npm install

# RUN npm build
CMD ["npm", "run", "start:dev"]
EXPOSE 3000
