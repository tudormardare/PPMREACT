FROM node:14-alpine AS build
WORKDIR /usr/src/app

# Copio prima i package.json per sfruttare la cache dei layer
COPY package*.json ./
RUN npm install

# Ora copio il resto dell’app
COPY . .

# Eseguo la build
RUN npm run build

# Secondo stage per servire i file statici
FROM node:14-alpine AS serve
RUN npm install -g serve
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build ./
EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]
