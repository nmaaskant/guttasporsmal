import './App.css';
import PlayerList from './components/PlayerList';
import Snusboks from './components/Snusboks';

function App() {
  return (
    <div>
      <PlayerList />
      {Snusboks(0)}
    </div>
  );
}

export default App;
