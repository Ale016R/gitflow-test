// App.js
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const nombre = "arivera editado probando";
  return <h1>Hola, soy { nombre }</h1>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
