# Establecer la imagen base 
FROM node:latest as node


# Metadata
LABEL "AppNode" = "Ejemplo de app en un contenedor"
LABEL "CURSO" = "FULLSTACK"

ENV NODE_ENV =development

# Crear directorio trabajo
RUN mkdir -p /opt/app

# Establecer directorio de trabajo
WORKDIR "/opt/app"

COPY ./package.json .

RUN npm install --quiet

# Copiar la app
COPY . .


#Ejecutar la app al Iniciar el contenedor
CMD node server.js


EXPOSE 8080/tcp
