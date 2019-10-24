FROM node:10

ADD package.json /app/package.json
ADD public /app/public
ADD src /app/src
ADD tsconfig.json /app/tsconfig.json
WORKDIR /app

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
