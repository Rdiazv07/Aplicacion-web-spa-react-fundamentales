import React, {useState, useEffect} from "react";
import{
  Routes,
  Route,
  Link
} from "react-router-dom";
import Pokemon from "./Componentes/Pokemon"
import Recomendaciones from "./Componentes/Recomendaciones"

const App =() => {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Pokemon/>}/>
          <Route path='/pokedex' element={<Pokemon/>}/>
          <Route path='/recomienda' element={<Recomendaciones/>}/>
        </Routes>
     
    </> 
  );
}

export default App;
