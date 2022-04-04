import { useState, useEffect } from "react";

import {
  Container, Card, Main, Image, NumberPokemon, NamePokemon, ContainerTypes, Types,
  TypeGrass, TypeFire, TypePoison, TypeFlying, TypeBug, TypeWater, TypeRock, TypeGhost, TypeElectric,
  TypeIce, TypePsychic, TypeFairy, TypeNormal, TypeGround, TypeSteel, TypeFighting, TypeDark, TypeDragon, Load, PokebolaLoading,
} from "../../styledComponents";

import api from "../../api/Api";

import SearchPokemon from "../../components/SearchPokemon/searchPokemon"

export default function Pokedex() {
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
      
      <SearchPokemon/>

      <Main>
        {loading ? (<Load> <PokebolaLoading src="/pokebola.png"></PokebolaLoading>  </Load>) : (pokemon.map(pokemons => (

          <Card key={pokemons.data.name}>

            <Image src={pokemons.data.sprites.other.home.front_default} alt={pokemons.data.name}></Image>

            <NumberPokemon>Nº {pokemons.data.id}</NumberPokemon>
            <NamePokemon>{pokemons.data.name}</NamePokemon>

            <ContainerTypes >

              {pokemons.data.types.map(typesPokemons => (
                <Types key={typesPokemons.type.name}>
                  {typesPokemons.type.name === "grass" ? <TypeGrass>{typesPokemons.type.name}</TypeGrass> : <Types>{typesPokemons.type.name}</Types>
                    &&
                    typesPokemons.type.name === "fire" ? <TypeFire>{typesPokemons.type.name}</TypeFire> : <Types>{typesPokemons.type.name}</Types>
                      &&
                      typesPokemons.type.name === "poison" ? <TypePoison>{typesPokemons.type.name}</TypePoison> : <Types>{typesPokemons.type.name}</Types>
                        &&
                        typesPokemons.type.name === "flying" ? <TypeFlying>{typesPokemons.type.name}</TypeFlying> : <Types>{typesPokemons.type.name}</Types>
                          &&
                          typesPokemons.type.name === "bug" ? <TypeBug>{typesPokemons.type.name}</TypeBug> : <Types>{typesPokemons.type.name}</Types>
                            &&
                            typesPokemons.type.name === "poison" ? <TypePoison>{typesPokemons.type.name}</TypePoison> : <Types>{typesPokemons.type.name}</Types>
                              &&
                              typesPokemons.type.name === "water" ? <TypeWater>{typesPokemons.type.name}</TypeWater> : <Types>{typesPokemons.type.name}</Types>
                                &&
                                typesPokemons.type.name === "rock" ? <TypeRock>{typesPokemons.type.name}</TypeRock> : <Types>{typesPokemons.type.name}</Types>
                                  &&
                                  typesPokemons.type.name === "electric" ? <TypeElectric>{typesPokemons.type.name}</TypeElectric> : <Types>{typesPokemons.type.name}</Types>
                                    &&
                                    typesPokemons.type.name === "ghost" ? <TypeGhost>{typesPokemons.type.name}</TypeGhost> : <Types>{typesPokemons.type.name}</Types>
                                      &&
                                      typesPokemons.type.name === "ice" ? <TypeIce>{typesPokemons.type.name}</TypeIce> : <Types>{typesPokemons.type.name}</Types>
                                        &&
                                        typesPokemons.type.name === "psychic" ? <TypePsychic>{typesPokemons.type.name}</TypePsychic> : <Types>{typesPokemons.type.name}</Types>
                                          &&
                                          typesPokemons.type.name === "fairy" ? <TypeFairy>{typesPokemons.type.name}</TypeFairy> : <Types>{typesPokemons.type.name}</Types>
                                            &&
                                            typesPokemons.type.name === "normal" ? <TypeNormal>{typesPokemons.type.name}</TypeNormal> : <Types>{typesPokemons.type.name}</Types>
                                              &&
                                              typesPokemons.type.name === "ground" ? <TypeGround>{typesPokemons.type.name}</TypeGround> : <Types>{typesPokemons.type.name}</Types>
                                                &&
                                                typesPokemons.type.name === "steel" ? <TypeSteel>{typesPokemons.type.name}</TypeSteel> : <Types>{typesPokemons.type.name}</Types>
                                                  &&
                                                  typesPokemons.type.name === "fighting" ? <TypeFighting>{typesPokemons.type.name}</TypeFighting> : <Types>{typesPokemons.type.name}</Types>
                                                    &&
                                                    typesPokemons.type.name === "dark" ? <TypeDark>{typesPokemons.type.name}</TypeDark> : <Types>{typesPokemons.type.name}</Types>
                                                      &&
                                                      typesPokemons.type.name === "dragon" ? <TypeDragon>{typesPokemons.type.name}</TypeDragon> : <Types>{typesPokemons.type.name}</Types>
                  }

                </Types>


              ))}


            </ContainerTypes>
          </Card>
        )))}
      </Main>

    </Container>

  );
}
