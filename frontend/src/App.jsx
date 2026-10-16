import { Route, Routes } from 'react-router-dom';
import CardFlags from './tools/cards-flags';
import Espanol from './pages-languages/espanol'
import "./App.css";

 
function App() {
  return(
    <Routes>
      <Route path="/" element={<CardFlags/>}/>
      <Route path="/espanol" element={<Espanol/>}/>
    </Routes>
  )
}

export default App;