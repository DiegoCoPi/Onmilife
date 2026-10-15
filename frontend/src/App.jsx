import { useState } from 'react'
import CardFlags from './tools/cards-flags'
import "./App.css"

function App() {
  return (
    <>
      <header>
        <h1>Welcome to the healty portal</h1>
        <br/>
        <h2>Please choose the language</h2>
      </header>
      <main>
        <CardFlags/>
      </main>
    </>
  )
}

export default App
