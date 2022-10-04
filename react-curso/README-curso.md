# react-course

Video: https://www.youtube.com/watch?v=rLoWMU4L_qE&t=1345s
Min: 37:33

                                                                    <!-- ! CURSO DE REACT  -->

<!-- * Definición -->

ReactJS es una biblioteca de JavaScript para poder crear interfaces de usuario. Esta biblioteca nos permite crear aplicaciones web interactivas que responden velozmente
como si fueran aplicaciones nativas. React es Open Source (código abierto) y fue creado por Facebook y muchas de las páginas más conocidas utilizaron React para
su creación.

React está puesto al mismo nivel que otros Frameworks de JavaScript como Angular y Vue, esto se debe a que el flujo de trabajo de React se parece demasiado al de estos otros 2 Frameworks previamente mencionado.

React está basado en componentes, lo que quiere decir que nos permite dividir una aplicación grande en múltiples partes. <!--! "ES UNA BIBLIOTECA, NO ES UN FRAMEWORK", -->
al ser así, sólo permite crear interfaces pero no nos dice cómo ni qué utilizar. En la práctica, React necesita de otros módulos que fácilmente se pueden encontrar 
en la comunidad pero NO son parte de la biblioteca, así que la idea de React no es ser una solución para todos los problemas web, sino a uno en específico, el de crear
interfaces de forma rápida, escalable y sencilla. Además, en vez de estar re-inventando la misma funcionalidad en cada aplicación, React siempre va a tratar de estar utilizado código de JavaScript en lo posible, por lo que si ya sabemos JavaScript o se está estudiando el lenguaje a fondo, podemos aplicarlo de manera inmediata
en React.


<!-- * Requerimientos de Implementación  -->

<!--? Necesitamos tener instalado (NodeJs). -->
<!--? Necesitamos tener un editor de código. Preferiblemente (VScode). -->


<!-- ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

<!-- * Comandos  -->

  <!-- ! Instalación -->

    <!-- * create-react-app -->

Hay una herramienta llamada (create react app) que es la forma de crear proyectos React más utilizada. Si nosotros quisiéramos instalar React desde 0, deberíamos instalar 
muchos paquetes y quedaríamos con una herramienta muy similar a lo que esta herramienta hace. Con un solo comando, la herramienta nos permite crear documentos de React.
<!-- ? Comando: (npx create-react-app nombre_proyecto). -->

<!-- ? Tips de finalización de ejecución de este comando -->

  <!-- ! npm start -->
    Ejecuta un servido de desarrollo. Permite ver los cambios a medida de que se van realizando en el código.

  <!-- ! npm run build -->
    Nos permite construir o preparar la aplicación construida para producció. Lo ejecutamos cuando ya terminamos de ejecutar nuestro proyecto.

  <!-- ! npm test -->
    Se utiliza para hacer testing, para hacer test de las interfaces de react.

  <!-- ! npm run eject -->
    Permite sacar las configuraciones a esta herramienta de create-react-app. La herramienta ya nos ofrece unas configuraciones dadas pero si nosotro quisiéramos modificarlas necesitaríamos ejecutar este comando

We suggest that you begin by typing:

  cd example <!-- * Entrar en el directorio del proyecto -->
  npm start <!-- * Compilamos y lanzamos localmente el aplicativo -->

<!-- ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

<!-- * Comandos  -->

  <!-- ! Instalación -->

      <!-- * vite -->

Hay otra herramienta llamada (vite), nos permite crear proyectos de React como de otros múltiples Frameworks. Pocas personas conocen esta herramienta.
<!-- * Pasos para la instalación -->
<!-- ? (npm create vite@latest my-react-app -- --template react) -->
<!-- ? Ingresamos al directorio generado con el comando anterior -->
<!-- ? (npm install) -->
<!-- ? Corremos (npm run dev) para compilar y correr el template que nos ofrece la instalación por defecto -->

<!-- ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

<!-- * Estructura del Proyecto -->

<!-- ? Carpeta: (src) -->
Es donde nosotros vamos a colocar nuestro código, es decir, donde vamos a colocar archivos y vamos a desarrollar. (Tanto HTML como CSS y JS).

<!-- ? Carpeta: (puclic) -->
Encontramos los documentos HTML donde, con el código de JavaScript, podemos modificarlo.
También podemos ver que es la carpeta donde encontramos los recursos gráficos que utilizaremos en nuestro proyecto.

<!-- ? Archivo: (package.json) -->
Es el archivo que nos indica qué bibliotecas estamos trabajando en nuestra aplicación

<!-- ? Archivo: (package-lock.json) -->
Es el archivo que nos permite hacerle un seguimiento a los archivos instalados en node modules

<!-- ? Carpeta: (node_modules) -->
Es la carpeta que contiene todo el funcionamiento interno de la aplicación.

<!-- ! Carpeta: (build) -->
Es la carpeta la cual contiene el proyecto construido para producción, y es la carpeta la cual nosotros subiríamos a nuestro dominio al momento de finalizar 
el desarrollo. (Sólo aparece después de ejecutar el comando <!-- ? npm run build -->)

<!-- ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

<!-- * ¿Qué es un componente? -->
Los componentes son porciones de una interfaz mucho más grande. Son re-utilizables, es decir, si ya tengo un componente realizado el cual lo voy a utilizar varias
veces en mi código, en vez de volver a escribir el mismo código las veces que lo necesite, simplemente lo vuelvo a utilizar de nuevo sin volverlo a escribir.Algo a 
tener en cuenta es que hay un componente inicial el cual nosotros utilizamos para contener todo el aplicativo realizado en react, éste se llama Root.

Un componente es algo (funcion) que siempre retorna una interfaz.

  <!-- ! REGLA: Siempre que necesitemos crear componentes, debemos saber que deben ir contenidos por un componente general, es decir, si estamos creando -->  
  <!-- ! componentes, deben ir dentro de un contenedor HTML. -->  

      <!-- ! IMPORTANTE: cuando estamos escribiendo código JavaScript, nosotros NO podemos hacer un return de código HTML, pero en React SÍ. -->

<!-- ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

<!-- * ¿Qué es JSX? -->
JSX es una sintaxis que nosotros utilizamos en React, la cual es una combinación de HTML y JavaScript. JSX nos permite, dentro de un archivo JavaScript, retornar
porciones de HTML que al final pasarán siendo convertidas en JavaScript puro. Esta sintaxis nos permite también interpretar código, es decir, nos permite interactuar con variables, ejecutar funciones, operaciones etc... y ésto mezclarlo con HTML.

Al momento de intentar introducir código dentro de un return HTML, necesitamos, por regla de JSX, abrir llaves y dentro de ellas poner el código con el cual necesitemos
intereactuar. También podemos operar dentro de las llaves, por ejemplo podemos ubicar operaciones y el código se va a compilar sin problemas. Hay un caso particular con las variables booleanas, si nosotros queremos retornarlas, no mostrará nada en el navegador, pero si nosotros realizamos por ejemplo una condición para retornar algo con estas variables, sí lo podremos hacer.

<!-- ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

<!-- * Separar los Componentes en Archivos Individuales -->
Si nosotros tenemos todos nuestros componentes en un solo documento, podemos tener problemas de legibilidad y ejecución del código. La principal solución que se tiene para
ésto, es individualizar por documento cada uno de los componentes que se están utilizando, así generamos buenas prácticas y podremos acceder a los componentes mucho más fácil.
                                                                    <!-- ! CURSO DE REACT  -->