FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY db.json ./
EXPOSE 8000
CMD ["npx", "json-server", "--watch", "db.json", "--port", "8000"]
