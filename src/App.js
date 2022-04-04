import React from "react";

import { Routes, Route } from "react-router-dom"

import Pokedex from "./pages/TotalPokemons";

function App(){

    return(
        <Routes>
            <Route element={<Pokedex/>} path="/"  />    
        </Routes>
    )
}

export default App;