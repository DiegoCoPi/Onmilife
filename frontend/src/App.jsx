import { Route, Routes } from 'react-router-dom';
import Espanol from './pages/languages/espanol'
import NutritionCardsEsp from '../src/pages/nutrition/nutrition-es'
import "./App.css";
import Home from './pages/home/home';

 
function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/espanol" element={<Espanol/>}/>

      <Route path="/nutrition-es" element={<NutritionCardsEsp/>}/>
    </Routes>
  )
}

export default App;