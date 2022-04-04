import React, { useState } from "react";

import api from "../../api/Api";

import { Container, ErrorResponse, NamePokemon, ContainerSearch, Input, SearchButton, Main,
Card, Image, NumberPokemon, ContainerTypes, Types, TypeGrass, TypeFire, TypePoison,
TypeFighting, TypeBug, TypeDragon, TypeFlying, TypeFairy, TypeWater, TypeRock, TypeElectric,
TypeGhost, TypeIce, TypePsychic, TypeNormal, TypeGround, TypeSteel, TypeDark } from "../../styledComponents"


export default function SearchPokemon() {

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

            {error.type === "404" ?
                <ErrorResponse>
                    <NamePokemon>Pokemon não encontrado
                    <a href="/">Voltar</a>
                    </NamePokemon>
                    
                </ErrorResponse> : ""}
            <ContainerSearch onSubmit={findPokemon}>

                <Input
                    type="text"
                    onChange={getNamePokemon}
                    placeholder="Digite o nome do pokemon"
                    required
                >
                </Input>

                <SearchButton><img src="/search.svg" alt="Button"></img></SearchButton>
            </ContainerSearch>

            {error.type === "200" ? <Main>
                
                    <Card>
                        <Image src={searchPokemon.sprites.other.home.front_default} alt={searchPokemon.name} ></Image>
                        <NumberPokemon>{searchPokemon.id}</NumberPokemon>
                        <NamePokemon>{searchPokemon.name}</NamePokemon>

                        <ContainerTypes>
                            {searchPokemon.types.map(types => (
                                <Types key={types.type.name}>
                                    {types.type.name === "grass" ? <TypeGrass>{types.type.name}</TypeGrass> : <Types>{types.type.name}</Types>
                                        &&
                                        types.type.name === "fire" ? <TypeFire>{types.type.name}</TypeFire> : <Types>{types.type.name}</Types>
                                            &&
                                            types.type.name === "poison" ? <TypePoison>{types.type.name}</TypePoison> : <Types>{types.type.name}</Types>
                                                &&
                                                types.type.name === "flying" ? <TypeFlying>{types.type.name}</TypeFlying> : <Types>{types.type.name}</Types>
                                                    &&
                                                    types.type.name === "bug" ? <TypeBug>{types.type.name}</TypeBug> : <Types>{types.type.name}</Types>
                                                        &&
                                                        types.type.name === "poison" ? <TypePoison>{types.type.name}</TypePoison> : <Types>{types.type.name}</Types>
                                                            &&
                                                            types.type.name === "water" ? <TypeWater>{types.type.name}</TypeWater> : <Types>{types.type.name}</Types>
                                                                &&
                                                                types.type.name === "rock" ? <TypeRock>{types.type.name}</TypeRock> : <Types>{types.type.name}</Types>
                                                                    &&
                                                                    types.type.name === "electric" ? <TypeElectric>{types.type.name}</TypeElectric> : <Types>{types.type.name}</Types>
                                                                        &&
                                                                        types.type.name === "ghost" ? <TypeGhost>{types.type.name}</TypeGhost> : <Types>{types.type.name}</Types>
                                                                            &&
                                                                            types.type.name === "ice" ? <TypeIce>{types.type.name}</TypeIce> : <Types>{types.type.name}</Types>
                                                                                &&
                                                                                types.type.name === "psychic" ? <TypePsychic>{types.type.name}</TypePsychic> : <Types>{types.type.name}</Types>
                                                                                    &&
                                                                                    types.type.name === "fairy" ? <TypeFairy>{types.type.name}</TypeFairy> : <Types>{types.type.name}</Types>
                                                                                        &&
                                                                                        types.type.name === "normal" ? <TypeNormal>{types.type.name}</TypeNormal> : <Types>{types.type.name}</Types>
                                                                                            &&
                                                                                            types.type.name === "ground" ? <TypeGround>{types.type.name}</TypeGround> : <Types>{types.type.name}</Types>
                                                                                                &&
                                                                                                types.type.name === "steel" ? <TypeSteel>{types.type.name}</TypeSteel> : <Types>{types.type.name}</Types>
                                                                                                    &&
                                                                                                    types.type.name === "fighting" ? <TypeFighting>{types.type.name}</TypeFighting> : <Types>{types.type.name}</Types>
                                                                                                        &&
                                                                                                        types.type.name === "dark" ? <TypeDark>{types.type.name}</TypeDark> : <Types>{types.type.name}</Types>
                                                                                                            &&
                                                                                                            types.type.name === "dragon" ? <TypeDragon>{types.type.name}</TypeDragon> : <Types>{types.type.name}</Types>
                                    }

                                </Types>
                            ))}
                        </ContainerTypes>
                    </Card>



                

            </Main> : ""}

        </Container >
    )
}
