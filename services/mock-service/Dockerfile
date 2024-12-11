FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY db.json ./
COPY server.js ./
EXPOSE 8000
CMD ["node", "server.js"]
