# BITÁCORA DE PRUEBA TÉCNICA

## REQUERIMIENTOS MÍNIMOS

- Node 14.15.0

## INSTALACIÓN

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. En el directorio front renombrar el archivo .env.example a .env, por defecto funcionara bien, pero si quieres verlo desde otro dispositivo en la red local averigua tu direccion IP y sustituyela por localhost.

4. Regresa al directorio root `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando.
`npm run dev`
Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.


## DEPENDENCIAS

- ***font awesome:***
se utlilizó este conjunto de paquetes para extraer iconos, y hacer el display de estrellas de los productos.
- ***react-router-dom v6:***
se utilizó este paquete para asignar las rutas de nuestras pantallas.
- ***redux:***
 se utilizó para manejar el estado global de la aplicación y así
  mantener el carrito de compras durante todas las pantallas. 
- ***react-redux:***
se utilizó para
  poder usar los hooks e integrarlo con react.
- ***redux toolkit:***
se utilizó el set de herramientas RTK ya que sirve
  para potenciar el uso de redux porque facilita su configuración, nos ayuda a poder configurar nuestros
  reducers y actions en un solo archivo, y evita el código repetitivo que hacemos con redux.
- ***sass:***
 se utilizó el preprocesador sass para poder seccionar nuestro css asi como agregar variables y usar sus funciones para colores.

## ESTRUCTURA DE LAS CARPETAS

- ***src:***
  Dentro de la carpeta src se encuentra nuestro código fuente.

- ***components:*** En esta carpeta se encuentran todos nuestros componentes de react, dentro de esta se encuentra una 
  carpeta especial llamada pages, que mostrara las pantallas finales, las demas carpetas son componentes mas
  pequeños.

- ***helpers:*** Dentro de la carpeta helpers se encuentran funciones hechas por nosotros, sean de mera ayuda o llamadas a endpoints.

 - ***hooks:*** Aqui se guardan todos los custom hooks.
 - ***redux*** En esta carpeta se hacen las configuraciones del store en donde estarán alojados los datos de nuestra aplicacion y las slices en donde gracias a RTK
  estan configuradas las acciones junto con los reducers.

- ***components:*** En esta carpeta se encuentran todos nuestros partials y nuestro archivo principal de SASS, esta dividido entre estilos de las paginas (pages) , componentes, componentes UI y un archivo de configuración de colores.

## ACCIONES DE LOS REDUCERS

#### cartSlice
 - addPoduct: Agrega un producto al carrito, si ya hay una instancia de este producto agrega uno a su contador, si rebasa el stock, muestra
  una alerta.

  
 - removePoduct: Elimina 1 elemento del carrito, si este tiene mas instancias, descuenta la cantidad 1 unidad, si el contador llega a 0 se remueve el producto del carrito.

 #### productSlice
 - fetchProducts: Realiza una petición asíncrona para recuperar todos los productos y cambia el estado a su respectivo estado del fetching (cargando y no cargando).

  
 - fetchProductByID: Realiza una petición asíncrona para recuperar un productos por ID y cambia el estado a su respectivo estado del fetching (cargando y no cargando).

 




