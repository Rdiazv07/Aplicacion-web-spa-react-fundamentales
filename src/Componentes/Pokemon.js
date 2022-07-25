import React, {useState, useEffect} from "react";
import Articuno from '../assets/images/articuno.jpg'
import Kabutops from '../assets/images/kabutops.jpg'
import Charizard from '../assets/images/charizard.jpg'
import Butterfree from '../assets/images/butterfree.jpg'
import PokemonFragment from "./Fragments/PokemonFragment"
const Pokemon = () => {

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Pokedex!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                <PokemonFragment 
                    textoDescripcion="  A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains."
                    imagen={Articuno}
                    titulo="Articuno"
                    tipo="ICE FLYING"
                    ></PokemonFragment>
              
                </div>
                <div className="col-4">
                <PokemonFragment 
                    textoDescripcion="  Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids."
                    imagen={Kabutops}
                    titulo="Kabutops"
                    tipo="ROCK WATER"
                    ></PokemonFragment>
                
                </div>
                <div className="col-4">
                <PokemonFragment 
                    textoDescripcion="  Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."
                    imagen={Charizard}
                    titulo="Charizard"
                    tipo="FIRE FLYING"
                    ></PokemonFragment>
                </div>
                <div className="col-4">
                <PokemonFragment 
                    textoDescripcion="  In battle, it flaps its wings at high speed to release highly toxic dust into the air."
                    imagen={Butterfree}
                    titulo="Butterfree"
                    tipo="BUG FLYING"
                    ></PokemonFragment>
                    
                </div>
            
            </div>
        </div>
        
        </>
    )

}
export default Pokemon