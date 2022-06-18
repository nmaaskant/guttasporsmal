import './App.css';
import { useState, useEffect } from 'react';
import Snusboks from './components/Snusboks';
import SnusboksLoader from './components/SnusboksLoader';
import Snusinfo from './components/Snusinfo';

function App() {

  const [loading, setLoading] = useState(false);

  const tekst = <h3 className="infoTekst">Snusboksleken går ut på at en snusboks
  blir kastet til den personen som påstanden passer best til. 
  Personen som mottar snusboksen drikker 3 slurker og kaster videre. 
  Kan også inkludere splash, hvor personene som sitter ved siden av
  den som får boksen også må drikke et visst antall slurker</h3>;

  const snus = () => {
    setMode( loading ? <SnusboksLoader /> : <Snusboks round="0" />)
  }
  const startScreen = () => {
    setMode(start);
  }

  const info = () => {
    setMode(<button onClick={startScreen} className="back">{tekst}</button>)
  }

    
const start = 
  <div className='start'>
    <div className='buttons'>
      <button onClick={snus} className="snusButton">Snusboksleken</button>
      <button onClick={info} className="info">i</button>
      <button className="disabled">Flere spill kommer snart!</button>
    </div>
  </div>;

  const [mode, setMode] = useState(start);



useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 4000) // Everytime you change this duration, change animation duration aswell
  }, [])

  return (
    <div className='App'>
      {mode}
    </div>
 );
}


export default App;
