# Bitacora de Prueba tecnica Front Ecomsur 2021 Luis Fernando Zurita Gonzalez

  - [Requerimientos mínimos](#requerimientos-mínimos)
  - [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)

## Requerimientos mínimos

- Node 14.15.0

## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Descomenta el archivo .env.examplevb rf, por defecto funcionara bien, pero si quieres verlo a traves de un celular en la red local averigua tu direccion IP y sustituyela por localhost.

4. Regresa al directorio root `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando
`npm run dev`
Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.


## DOCUMENTACION

### DEPENDENCIAS

#### FontAwesome
- Se utlilizaron estos paquetes para extraer iconos, y hacer el display de estrellas de los productos
#### react-router-dom v6
Se utilizo este paquete para asignar las rutas de nuestras pantallas
#### Redux React-Redux ReduxToolkit
 Se utlilizaron estos paquetes para manejar el estado global de la aplicacion y asi
  mantener el carrito de compras durante todas las pantallas, ademas se utilizo react-redux para
  poder usar los hooks e integrarlo con react, tambien se uso el set de herramientas RTK que sirve
  para potenciar el uso de redux ya que facilita su configuracion, nos ayuda a poder configurar nuestros
  reducers y actions en un solo archivo y evitar el codigo repetitivo que hacemos con redux.
#### SASS
 Se utlizo el preprocesador sass para poder seccionar nuestro css

### ESTRUCTURA DEL PROYECTO

- Dentro de la carpeta src se encuentra nuestro codigo fuente

  ## components
  En esta carpeta se encuentran todos nuestros componentes de react, dentro de esta se encuentra una 
  carpeta especial llamada pages, que mostrara las pantallas finales, las demas carpetas son componentes mas
  peque~os

  ## helpers
  Dentro de la carpeta helpers se encuentran funciones hechas por nosotros, sean de mera ayuda o llamadas a endpoints

  ## hooks

  Aqui se guardan todos los custom hooks

  ## redux

  En esta carpeta se hacen las configuraciones del store en donde estaran alojados los datos de nuestra aplicacion y las slices en donde gracias a RTK
  estan configuradas las acciones junto con los reducers







