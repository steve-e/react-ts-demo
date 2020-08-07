import React from 'react';
import PokemonSearch from './components/PolemonSearch'
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonSearch name="John Doe" numberOfPokemons={10} />
    </div>
  );
}

export default App;
