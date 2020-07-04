

## Ejecución


- Ejecutamos la imagen en nuestra máquina
`docker build -t my-apache .`   

- Crear el contenedor a partir de la imagen descargada
`docker run -dit --name my-running-app -p 8080:80 my-apache`      