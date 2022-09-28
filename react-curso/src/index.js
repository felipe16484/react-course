import React from 'react'               // * De esta manera podemos importar React desde las bibliotecas que tenemos instaladas en nuesto proyecto.
import ReactDOM from 'react-dom/client' // * Con react-dom, decimos que vamos a estar importando de la librería, las funcionalidades para trabajar en el Navegador

// ? Hay que tener en cuenta que React sirve para trabajar en múltiples ambientes (Front - Móvil - Conexión con Back...), por lo tanto debemos especificar 
// ? de qué forma vamos a trabajarlo. En este caso, como vamos a trabajar en fron, importamos para el trabajo en navegador.

// * En el index HTML vamos a tener un <div id='root'></div> el cual se va a encargar de contener nuestra aplicación desarrollada. Por medio de un selector, referenciamos 
// * ese elemento para poder trabajar con él en nuestro JS.

// ? Tenemos varias sintaxis para poder gestionar la inicialización de nuestra aplicación con React:
// * Root: es el elemento raíz (aplicación inicial de react).

// ? Forma 1:
// const rootElement = document.getElementById('root'); 
// ReactDOM.createRoot(rootElement);

// ? Forma 2:
const root = ReactDOM.createRoot(document.getElementById('root'));

// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// ? La función render de un root espera elementos hijos, es decir, la aplicación o elementos HTML.

// ! Algo importante a tener en cuenta es que al momento de nosotros realizar un cambio en nuestro código fuente, directamente el aplicativo se actualiza y por ende
// ! se actualiza el DOM. Por ejemplo si cambiamos el texto de abajo podemos observar que sin necesidad de recargar la página se actualizan los cambios realizados.
// root.render(<h1>Hola mundo</h1>) <--- texto de abajo 

function Greeting() {
    return <div>
        <h1>Este es un componente, generado como HTML</h1>
        <p>Lorem 1234</p>
    </div>
}

// ? Para poder ejecutar una función en React, debemos abrir llaves y escribir el nombre de la misma dentro de ellas, pero esta es una manera muy poco legible al momento de
// ? escribir código.

/* root.render(<div>

    { Greeting() }

</div>) */


// ? Podemos escribir un componente como si fuera una etiqueta de html así: <Greeting></Greeting>. Aunque podemos tener una sintaxis aún más resumida puesto que
// ? no vamos a escribir nada dentro de las "etiquetas" generadas: <Greeting/>, a esta sintaxis de etiquetas se les llama "Self Closing Tags".

root.render(<div>

    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />

</div>)