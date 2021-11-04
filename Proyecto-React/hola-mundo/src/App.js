
import './App.css';

function App() {
  return (
      
     <div>
      <h1> mi aplicacion </h1>
      <br/>
      <MostrarLista titulo="Clientes"/>
      <br/>
      <MostrarLista titulo="Amigos"/>
      <br/>
      <MostrarLista titulo="Familiares"/>
    
     </div>
     


      
  );
}

function MostrarLista(props){
  console.log("esta es una salida por consola")

 

  return(
    <div className="lista">
      <h4>mi lista de {props.titulo}:</h4>

      <ul>
        <li>santiago</li>
        <li>avelino</li>
        <li>juan</li>
        <li>pedro</li>
        <li>vhufdbhukgresg</li>
      </ul>
    </div>
    
    
    );
  
  
  }

export default App;
