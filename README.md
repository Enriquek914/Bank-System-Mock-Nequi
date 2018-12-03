# Bank-System-Mock-Nequi

## Instalación de la base de datos
En el motor de base de datos MySQL instalado en su computadora, subir el backUp de la base de datos necesaria para iniciar el proyecto. La base de datos la encuentra en la ruta BD/nequicodum.bk

## Inicializar el proyecto 
1. Clonar el repositorio mediante el enlace https://github.com/Enriquek914/Bank-System-Mock-Nequi.git
2. Instalar dentro de la carpeta del proyecto clonado npm; ejecutar el siguiente comando: npm install -g
3. Instalar nodemon para actualización automática de cambios; ejecutar el comando:npm install -g nodemon

## Configurarción del servidor
1. Por consola editar el archivo database.js, ubicado en la ruta Bank-System-Mock-Nequi/Nequi/server/src/database.js
 1.1 Modificar los datos de: user, password, host; según la confuguración de su equipo
 1.2 Modificar el nombre de la base de datos por "nequicodum" en caso de que esté apuntando a una diferente
2. Por consola se debe inicializar el servidor de la siguiente manera
 2.1 cd [Carpeta en la que se encuentra el proyecto de Bank-System-Mock-Nequi]\Bank-System-Mock-Nequi/Nequi/server;
 2.2 ejecutar npm start
 2.3 verificar el estado del servidor en el navegador web: localhost:3000/api/users

## Configuración del cliente
1. Por consola ir al directorio Bank-System-Mock-Nequi/Nequi/frontend/nequi-codum/
2. Ejecutar el comando npm install -g 
3. Ejecutar npm start
4. Al finalizar la subida del cliente, se abrirá el navegador web para su navegación

## Ingreso al aplicativo
En el login encontrará los campos para usuario y contraseña, necesarios para el ingreso a la aplicación
- Como usuario de nevegación se define 
  user: pcardenas@mibanco.com
  pass: 123pcardenas
 Con estas credenciales podrá ingresar para navegar dentro de la aplicación
