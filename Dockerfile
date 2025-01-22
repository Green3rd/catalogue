# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
#RUN yarn install --production
RUN npm ci
COPY . /code

CMD [ "npm", "start" ]

EXPOSE 2000