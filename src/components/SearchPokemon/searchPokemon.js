import React, { useState } from "react";

import api from "../../api/Api";

import { Container, Main, } from "../../styles/GlobalStyles";
import { PokemonIsNotExits } from "../PokemonIsNotExist/PokemonIsNotExist";


import { CardPokemon } from "../Card/Card";

import { ContainerSearch, Input, SearchButton } from "./styles"

import IconSearch from "../../assets/search.svg"


export function SearchPokemon() {

    const [searchPokemon, setSearchPokemon] = useState({})

    const [name, setName] = useState('')

    const [error, setError] = useState({
        type: '',

    })

   

    const getNamePokemon = e => {
        e.preventDefault()
        const namePokemon = e.target.value;

        setName(namePokemon);
    }

    const findPokemon = async (e) => {
        e.preventDefault();

        const find = await api.get(`pokemon/${name}`)
            .then((response) => {
                setSearchPokemon(response.data)

                if (response.status === 200) {
                    setError({
                        type: '200'
                    })
                }

            }).catch((err) => {
                setError({
                    type: '404',

                })
            })

        return find
    }

    return (

        <Container>

            {error.type === "404" ? <PokemonIsNotExits /> : ""}

            <ContainerSearch onSubmit={findPokemon}>

                <Input
                    type="text"
                    onChange={getNamePokemon}
                    placeholder="Digite o nome do pokemon"
                    required
                >
                </Input>

                <SearchButton><img src={IconSearch} alt="search button"></img></SearchButton>
            </ContainerSearch>

            {error.type === "200" ? <Main>

                <CardPokemon 
                    key={searchPokemon.id}
                    name={searchPokemon.name}
                    image={searchPokemon.sprites.other.home.front_default}
                    number={searchPokemon.id}
                    typePokemon={searchPokemon.types.map(type => (type.type.name))}
                >
                 
                </CardPokemon>

            </Main> : ""}

        </Container >
    )
}
