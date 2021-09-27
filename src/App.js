import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
    <ul class="navbar">
       <li>
           <div>
               <img src= "./media/Logo.png" alt="imagen" class = "logo"/>
           </div>
        </li>
                 
        <li>
            <button class="button mainButton"> Nuevo post</button>
        </li>
        <li><button class="button secondaryButton">Login</button></li>
        <li>
            <div class ="buscar">
                <input placeholder="Buscar una raza"/>
                <i class="fas fa-search button iconoBusqueda"></i>
            </div>                   
        </li> 
        <li><button class="button mainButton">Registro</button></li>     
        
     

    </ul>
        
    </header>
     <main>
        <section>
            <h1>Razas de perros</h1>
            <ul class="breedCardContainer">
                <li class="breedCard">
                    <div class = "contenedorImagen">
                        <img src="./media/Border Collie.jpg" alt="Border Collie"/>
                    </div>
                    <span class = "breedTitle"> Border collie </span>
                    
                </li>
                <li class="breedCard">
                    <div class = "contenedorImagen">
                        <img src="./media/Rhodesian.jpg" alt="Rhodesian"/>
                    </div>
                    <span class = "breedTitle"> Rhodesian </span>
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
