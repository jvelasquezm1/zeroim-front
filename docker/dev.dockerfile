FROM node:12

ADD package.json /app/package.json
ADD tsconfig.json /app/tsconfig.json

WORKDIR /app

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "sh", "./docker/dev.entrypoint.sh" ]