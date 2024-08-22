import React from 'react'
import Pokemon from './Pokemon'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonDetail from './PokemonDetail';

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
    </Routes>
</Router>
  )
}

export default App
