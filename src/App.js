// App.js
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const nombre = "arivera editado";
  return <h1>Hola, soy { nombre }</h1>;
};

// Esta línea renderiza tu componente en el DOM.
// Nota: Esto es menos común para pruebas unitarias, pero lo mantendremos para seguir tu estructura.
ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
