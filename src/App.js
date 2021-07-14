import logo from './assets/images/logo.svg';
import './assets/css/App.css';


/* importar componentes  */
import MiComponente from './components/MiComponente';

function holamundo(nombre, edad){
  var presentacion = (
  <div> 
      <h2>hola, soy {nombre}</h2>
      <h3>tengo {edad}</h3>
  </div>
  );
  return presentacion;
}

function App() {
var nombre ="eduard";
var presentacion = <h2>hola, soy {nombre}</h2>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hola este es un edit
        </p>

        {holamundo(nombre, 24)}

    

      <section className= "componentes">
          <MiComponente/>
      
      </section>

      </header>
    </div>
  );
}

export default App;
