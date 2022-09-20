# Instrucciones

Descargar proyecto e instalar dependencias con:

> npm install

Versión de node js: 16.15.1
## Comandos de Ejecución

Ejecutar con comandos:
> **npm run start**

Inicia el proyecto sin hot reload
> **npm run develop**

Inicia el proyecto con hot reload

## Rutas

Puerto de Ejecución: 3000
```
GET:        https://localhost:3000/contacts             | Retorna todos los contactos
GET:        https://localhost:3000/contacts?phrase=Za   | Retorna contacto por frase
GET:        https://localhost:3000/contacts/:id         | Retorna contacto en especifico
POST:       https://localhost:3000/contact              | Crear nuevo contacto
DELETE:     https://localhost:3000/contacts/:id         | Elimina contacto en especifico
```