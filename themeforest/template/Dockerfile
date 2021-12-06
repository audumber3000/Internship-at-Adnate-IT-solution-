FROM node:12.10.0-alpine

EXPOSE 4200
WORKDIR .
COPY . ./client
WORKDIR ./client
RUN yarn install

CMD ["yarn", "serve:prod"]
