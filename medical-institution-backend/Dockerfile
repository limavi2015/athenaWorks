FROM node:10

# Create app directory
WORKDIR /usr/src/app


# Copia todos los archivos
COPY . ./

#Instala todas las dependencias
RUN npm install

EXPOSE 3789

CMD [ "npm", "start" ]