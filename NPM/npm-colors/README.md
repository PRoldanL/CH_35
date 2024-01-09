# Pasos para iniciar el proyecto colors
1. Crear una carpeta llamada colors
2.Crear un archivo `main.js`

## npm desde CLI 
3. Iniciamos un proyecto desde npm con el comando
```sh
npm init -y
4. Buscamos el package colors y los intalamos con el comando
```sh
npm i colors
```
5. Dentro del archivo `main.js` camos a importar el paquete colors con la línea de código
```javascript
const colors = require("colors");
```
6. Implementar las funciones de colors (estilos para el texto de la terminal) en el `main.js`. Para ello hay que consultr la documentación oficial de colors en [https://npmjs.com]

7. Para ejecutar el package, utilizamos el comando
```sh
node archivo.js
```
8. Eliminar (desinstalar) módulos de npm 
```sh
npm unistall colors
```