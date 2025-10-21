import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './components/MovieSelector';
import MovieSelector from './components/MovieSelector';

function App() {
  //const [selectedGenre, setSelectedGenre] = useState(0)

  return (
    <>
      <div className="App">
           <MovieSelector />     
      </div>
    </>
  )
}

export default App