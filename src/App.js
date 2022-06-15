import './App.css';
import { useState, useEffect } from 'react';
import Snusboks from './components/Snusboks';
import SnusboksLoader from './components/SnusboksLoader';

function App() {

  const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 4000) // Everytime you change this duration, change animation duration aswell
  }, [])

  return (
    <div className='App'>
      { loading ? <SnusboksLoader /> : <Snusboks round="0" />}
    </div>
 );
}


export default App;
