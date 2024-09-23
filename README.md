# `Frontend Project - Bryan Misael Morales Martin`

Este proyecto se basa en la creacion de un frontend utilizando el Framework de React, este debe poseer todas las cosas vistas en el curso, ya sea el renderizado dinamico de vistas, useEffect, useState, Context, etc. y tambien se busca que posea autenticacion utilizando internet identity y permita observar los chats de la plataforma Open Chat. 

## Librerias utilizadas

- [Bootstrap 5.3]
- [FontAwesome]
- [SweetAlert2]
- [React-router-dom]
Ademas de las implementadas para la funcionalidad de Internet Identity y OpenChat

## Ejecución

La aplicacion se trabajo de manera local, utilizando los comandos
```bash
dfx start --host 127.0.0.1:5173

dfx deploy
```

## Aplicación

La aplicacion consiste en lo siguiente:

En la primera pantalla se enlistan todos los productos obtenidos por el backend proporcionado, cada uno con su propio input para ingresar la cantidad necesitada, ademas de un boton que funciona para añadirse al carrito.

Este ultimo solo se puede utilizar si el usuario esta autenticado, para eso, se necesita iniciar sesion utilizando la implementacion de Internet Identity. Una vez con la sesion iniciada, ya se puede empezar a ingresar productos.

En el apartado del carrito, se tiene una lista que posee el nombre, descripcion, imagen, cantidad y precio total de cada uno de los productos. Estando en esta pantalla, se puede actualizar la cantidad del producto utilizando el input de cada uno y pulsando el boton de un lado de este. Si se llega a ingresar una cantidad menor a cero, la aplicacion preguntara al usuario si se quiere borrar ese producto de la lista, en una respuesta afirmativa, se hara el borrado de este y se regresara a la pantalla principal.

Durante toda la ejecucion de la aplicacion, en el lado inferior derecho se tiene un boton que permite acceder a OpenChat (realizando pruebas utilizando 
```bash 
npm run start
```
se logro que esta implementacion funcionase, ya que al parecer la pagina esta configurada para evitar verse incrustada en otro sitio web).

## Variables de entorno

En las pruebas realizadas, las variables de entorno utilizadas fueron las siguientes:
- CANISTER_ID_FRONTEND='bd3sg-teaaa-aaaaa-qaaba-cai'
- CANISTER_ID_BACKEND='bkyz2-fmaaa-aaaaa-qaaaq-cai'
- CANISTER_ID_INTERNET_IDENTITY='be2us-64aaa-aaaaa-qaabq-cai'

Por ultimo, se cambio levemente el archivo ".ic-assets.json5" ya que se trabajo con CDNs
"Content-Security-Policy": "default-src *; script-src *; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",

