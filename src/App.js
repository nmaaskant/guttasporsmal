import './App.css';
import { useState, useEffect } from 'react';
import Snusboks from './components/Snusboks';
import SnusboksLoader from './components/SnusboksLoader';
import Snusinfo from './components/Snusinfo';

function App() {

  const [loading, setLoading] = useState(false);

  const tekst = <h3>Snusboksleken går ut på snusboks
  blir kastet til den personen som påstanden passer best til. 
  Personen som mottar snusboksen drikker 3 slurker og kaster videre. 
  Kan også inkludere splash, hvor personene som sitter ved siden av
  den som får boksen også må drikke et visst antall slurker</h3>;

  const snus = () => {
    setMode( loading ? <SnusboksLoader /> : <Snusboks round="0" />)
  }

  const info = () => {
    setMode(tekst)
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

  const backButton = <button onClick={setMode(start)}>Tilbake</button>;


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
