import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';
import { useEffect, useState } from 'react';

function App() {
  const [stateCar, setStateCar] = useState(false)
  const [contar, setContar] = useState(0)
  
  const user = {
    "name": "carenalga",
    "age": 39,
    "color": "black"
  }

  const saludarFn = (name, age) => {
    console.log(`Hola ${name}, tu edad es ${age} años.`);    
  }

  const encenderApagar = () => {
    //prevValue es el valor actual y me lo da la misma función que cambia el estado
    setStateCar(prevValue => !prevValue)
    setContar(prevValue => prevValue + 1) 
  }

  useEffect(() => {
    console.log(`Total: ${contar}`);     
  }, [contar])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo/>
        <AdiosMundo/>
        
        <Saludar userInfo={user} saludarFn={saludarFn}/>
        <h3>El carro esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}>Encender / Apagar</button>        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
