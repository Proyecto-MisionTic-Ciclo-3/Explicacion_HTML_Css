import logo from "./media/Logo.png";
import "./styles/styles.css"
import borderCollie from "./media/borderCollie.jpg"
import Rhodesian from "./media/Rhodesian.jpg"



function App() {
  return (
    <div classNameName="App">
      <header>
    <ul className="navbar">
       <li>
           <div>
               <img src= {logo} alt="imagen" className = "logo"/>
           </div>
        </li>
                 
        <li>
            <button className="button mainButton"> Nuevo post</button>
        </li>
        <li><button className="button secondaryButton">Login</button></li>
        <li>
            <div className ="buscar">
                <input placeholder="Buscar una raza"/>
                <i className="fas fa-search button iconoBusqueda"></i>
            </div>                   
        </li> 
        <li><button className="button mainButton">Registro</button></li>     
        
     

    </ul>
        
    </header>
     <main>
        <section>
            <h1>Razas de perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className = "contenedorImagen">
                        <img src={borderCollie} alt="Border Collie"/>
                    </div>
                    <span className = "breedTitle"> Bordercollie</span>
                    
                </li>
                <li className="breedCard">
                    <div className = "contenedorImagen">
                        <img src={Rhodesian} alt="Rhodesian"/>
                    </div>
                    <span className = "breedTitle"> Rhodesian </span>
                </li>


            </ul>
        </section>
        <section></section>
    </main>
     <footer></footer> 
    </div>
  );
}

export default App;
