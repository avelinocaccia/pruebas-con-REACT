
import './App.css';

function App() {
  return (
      
     <div>
      <h1> mi aplicacion </h1>
      <br/>
      <MostrarLista
       titulo="Clientes"
       nombre1="mateo"
        nombre2="benjamin"
        nombre3="leo"      
       />
      
      <br/>

      <MostrarLista titulo="Amigos"
      
        nombre1="maria"
        nombre2="josefa"
        nombre3="clara"    
      />
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
        <li>{props.nombre1}</li> {/* esto es un comentario*/}
        <li>{props.nombre2}</li>
        <li>{props.nombre3}</li>
        <li>avelino</li>
        <li>juan</li>
        <li>pedro</li>
        <li>vhufdbhukgresg</li>
      </ul>
    </div>
    
    
    );
  
  
  }

export default App;
