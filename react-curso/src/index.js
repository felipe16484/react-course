import React from "react"; // * De esta manera podemos importar React desde las bibliotecas que tenemos instaladas en nuesto proyecto.
import ReactDOM from "react-dom/client"; // * Con react-dom, decimos que vamos a estar importando de la librería, las funcionalidades para trabajar en el Navegador

import { Greeting } from "./Greeting" // ! Esta línea se utiliza en conjunto con la línea 178: "Ejemplo de Individualización de Documentos por Componente"

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
const root = ReactDOM.createRoot(document.getElementById("root")); // ! Esta es la forma que se utilizará en el resto de este documento para la ejecución

// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// ? La función render de un root espera elementos hijos, es decir, la aplicación o elementos HTML.

// ! Algo importante a tener en cuenta es que al momento de nosotros realizar un cambio en nuestro código fuente, directamente el aplicativo se actualiza y por ende
// ! se actualiza el DOM. Por ejemplo si cambiamos el texto de abajo podemos observar que sin necesidad de recargar la página se actualizan los cambios realizados.
// root.render(<h1>Hola mundo</h1>) <--- texto de abajo

/* function Greeting() {
    return <div>
        <h1>Este es un componente, generado como HTML</h1>
        <p>Lorem 1234</p>
    </div>
} */

// ? Para poder ejecutar una función en React, debemos abrir llaves y escribir el nombre de la misma dentro de ellas, pero esta es una manera muy poco legible al momento de
// ? escribir código.

/* root.render(<div>

    { Greeting() }

</div>) */

// ? Podemos escribir un componente como si fuera una etiqueta de html así: <Greeting></Greeting>. Aunque podemos tener una sintaxis aún más resumida puesto que
// ? no vamos a escribir nada dentro de las "etiquetas" generadas: <Greeting/>, a esta sintaxis de etiquetas se les llama "Self Closing Tags".

/* root.render(<div>

    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />

</div>) */

// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// ? Manejo de sintaxis JSX

// * De esta manera podemos enviar código de JS por medio de un return HTML

/* function Greeting(){

    const name = 'Felipe'

    return <h1> Hello {name} </h1>
}

root.render(
    <Greeting/>
) */

// ? Manejo de sintaxis JSX con variables booleanas

// * Cabe aclarar, que las si devuelvo una variable booleana en un return html, el navegador no tendrá ningún cambio, pero si realizo alguna lógica en base a las variables
// * booleanas si podría hacerlo, así:

/* function Greeting() {
  const married = true;

  if (married) return <h1>I'm married!</h1>;
  else {
    return <h1>I'm not married!</h1>;
  }

  // return <h1>{married ? "I'm married!" : "I'm not married!"}</h1>; // ? Se puede usar el Operador Ternario para poder resumir las condiciones.

}

root.render(<Greeting />); */

// ? Manejo de sintaxis JSX para objetos

//* Sintaxis errada

/* function Greeting(){
    const user = {
        firstName: 'Ryan',
        lastName: 'Ray'
    }
    return <h1>{ user }</h1> //! Esta sintaxis no es permitida para react, puesto que un Objeto no puede ser un hijo de una salida HTML
} */

// * Posible sintaxis para mostrar un objeto completo en un return

/* function Greeting(){
    const user = {
        firstName: 'Ryan',
        lastName: 'Ray'
    }
    return <h1>{ JSON.stringify(user) }</h1> //? Por medio de este método podemos convertir un Objeto de JavaScript en su versión String
} */

// * Para mostrar las propiedades de un objeto

/* function Greeting() {

  const user = {
    firstName: "Ryan",
    lastName: "Ray",
  };

  return ( // ? Como directamente estamos accediendo a las propiedades que son strings, no necesitamos ese "parseo" del caso anterior.
    <div>
      <h1>{user.firstName}</h1> 
      <h2>{user.lastName}</h2>
    </div>
  );

} */

// * Para mostrar un booleano sin utilizar condiciones

/* function Greeting() {
  const married = true;
  return (
    <div>
      <h1>{married.toString()}</h1> // ? Utilizamos el método toString(), el cual sirve para convertir un booleano en string.
    </div>
  );
} */

// * Para interpretar una función dentro de otra función

/* function Greeting() {
  function add(x, y) {
    return x + y;
  }

  return (
    <div>
      <h1>{add(30, 50)}</h1>
    </div>
  );
} */

// * Etiquetas "Fragment", usabilidad:

/* function Greeting() {
  function add(x, y) {
    return x + y;
  }

  return <h1>{add(30, 50)}</h1>;
}

root.render( // ? Esta es la sintaxis que podemos utilizar cuando no queremos que los componentes queden dentro de una etiqueta como tal
  <> 
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
  </>
); */

// * Ejemplo de Individualización de Documentos por Componente:

root.render( // ? Esta es la sintaxis que podemos utilizar cuando no queremos que los componentes queden dentro de una etiqueta como tal
  <> 
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
  </>
);