FROM node:9.5.0-alpine

WORKDIR /app

COPY . .

RUN yarn

CMD [ "yarn", "start"]⏎ 