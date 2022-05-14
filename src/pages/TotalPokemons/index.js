import { useState, useEffect } from "react";

import { Container, Main, } from "../../styles/GlobalStyles"


import api from "../../api/Api";

import { SearchPokemon } from "../../components/SearchPokemon/searchPokemon"
import { CardPokemon } from "../../components/Card/Card";

import {Loading} from "../../components/Loading/Loading"



export function Pokedex() {
  const [pokemon, setPokemon] = useState({});

  const [loading, setLoading] = useState(true);

  const pokemons = async () => {
    const pokemonsArray = [];

    const TOTAL_POKEMONS = 898;

    for (let ID_POKEMONS = 1; ID_POKEMONS <= TOTAL_POKEMONS; ID_POKEMONS++) {
      pokemonsArray.push(await getPokemonData(ID_POKEMONS));
    }
    setPokemon(pokemonsArray);
    setLoading(false);
  }

  const getPokemonData = async (id) => {
    const res = await api.get("pokemon/" + id);
    return res;
  }

  useEffect(() => {
    pokemons();

  }, []);

  return (

    <Container>

      <SearchPokemon />

      
      <Main>
        {loading ? (<Loading/>) : (pokemon.map(pokemons => (
          <CardPokemon
            key={pokemons.data.id}
            name={pokemons.data.name}
            image={pokemons.data.sprites.other.home.front_default}
            number={pokemons.data.id}
            typePokemon={pokemons.data.types.map(type => (type.type.name))}
          >

          
          </CardPokemon>
        )))}
      </Main>

    </Container>

  );
}
