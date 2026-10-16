import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardFlags from './tools/cards-flags'

import "./App.css"
  
function App() {
  return (
    <>
      <header>
        <h1 className="title">Welcome to the healthy portal / Bienvenidos al portal de la salud</h1>
      </header>
      <main>
        <h2 className="second-title">Choose your language / Elige tu idioma</h2>
        <CardFlags/>
      </main>
      
    </>
  )
}

export default App
