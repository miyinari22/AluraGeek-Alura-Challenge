# Alura Geek

Repositorio del challenge Alura Geek, una aplicación web para mostrar y gestionar productos.

## Descripción

Alura Geek es una aplicación web diseñada para mostrar una lista de productos y permitir a los usuarios agregar nuevos productos, así como eliminar los existentes. Los usuarios también pueden ver detalles de cada producto, como el título, el precio y la imagen.

## Características

- Lista de productos electrónicos.
- Agregar nuevos productos.
- Eliminar productos existentes.
- Detalles de cada producto, incluyendo título, precio e imagen.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- JSON Server (para simular una API REST)
- Node.JS

## Uso

- Navega por la lista de productos en la página principal.
- Agrega nuevos productos utilizando el formulario de la sección "Agregar Productos".
- Haz clic en el botón de eliminar para eliminar un producto existente.

## Capturas de pantalla
![ScreenShot](img/funcionamiento.png)

## Simulación de API con JSON Server

Para simular una API REST y poder realizar solicitudes HTTP desde la aplicación, es necesario utilizar JSON Server. Asegúrate de tener Node.js instalado en tu máquina para poder ejecutar el servidor de forma local.

Para instalar JSON Server, puedes seguir estos pasos:

1. Abre una terminal en la raíz del proyecto.
2. Ejecuta el siguiente comando para instalar JSON Server globalmente:
   ```
   npm install json-server
   ```
3. Una vez instalado, ejecuta el servidor JSON Server con el siguiente comando:
   ```
   json-server --watch ./database/db.json --port 3000
   ```
   Esto iniciará el servidor en el puerto 3000 y utilizará el archivo `db.json` como base de datos para simular la API.

## Nota sobre la publicación en GitHub Pages

Debido a que esta aplicación requiere una API REST para funcionar correctamente y GitHub Pages solo admite la publicación de páginas estáticas, no es posible publicar esta aplicación directamente en GitHub Pages. Sin embargo, puedes clonar este repositorio y ejecutar la aplicación localmente siguiendo los pasos anteriores.

