FROM node:12-apline as build

COPY package.json /building/package.json
COPY tsconfig.json /building/tsconfig.json
COPY src /building/src

WORKDIR /building

RUN npm install
RUN npm run build
RUN npm prune --production

FROM node:12-apline as prod

COPY --from=build /build/node_modules /app/node_modules
COPY --from=build /build/build /app

RUN rm -rf building

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json