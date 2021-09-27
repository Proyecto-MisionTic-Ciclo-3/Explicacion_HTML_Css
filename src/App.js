import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header>
        <ul class="navbar">
           <li>
                <img src= "./media/Logo.png" alt="imagen" class = "logo"/>
            </li>
                     
            <li>
                <button class="button mainButton"> Nuevo post</button>
            </li>
            <li><button class="button secondaryButton">Login</button></li>
            <li>
                <div class ="buscar">
                    <input placeholder="Buscar una raza"/>
                    <i class="fas fa-search"></i>
                </div>                   
            </li> 
            <li><button class="button mainButton">Registro</button></li>     
           
         
    
        </ul>
            
        </header>
        <main>
            <section></section>
            <section></section>
        </main>
        
        <footer></footer> 
    </div>
  );
}

export default App;
