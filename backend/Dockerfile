# Usa un'immagine base di Node.js leggera
FROM node:14-alpine

# Imposta la directory di lavoro all'interno del container
WORKDIR /usr/src/app

# Copia i file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia tutto il resto del progetto
COPY . .

# Esponi la porta usata dal backend
EXPOSE 5000

# Comando per avviare l'applicazione
CMD ["node", "src/server.js"]
