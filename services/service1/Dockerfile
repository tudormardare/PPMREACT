# Usa un'immagine base leggera di Node.js
FROM node:14-alpine

# Imposta la directory di lavoro nel container
WORKDIR /usr/src/app

# Copia solo i file di dipendenze per sfruttare la cache Docker
COPY package*.json ./

# Installa le dipendenze
RUN npm install --production

# Copia il resto del codice nell'immagine
COPY . .

# Esponi la porta che il servizio utilizza
EXPOSE 8080

# Comando per avviare l'applicazione
CMD ["node", "service.js"]
