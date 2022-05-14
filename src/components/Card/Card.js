

import {
    Card, Image, NumberPokemon, NamePokemon, ContainerTypes, Types, TypeBug, TypeDark,
    TypeDragon, TypeElectric, TypeFairy, TypeFighting, TypeFire, TypeFlying, TypeGhost, TypeGrass, TypeGround,
    TypeIce, TypeNormal, TypePoison, TypePsychic, TypeRock, TypeSteel, TypeWater
} from "./styles"


export function CardPokemon({ name, image, number, typePokemon}, props) {
    
    return (
        <>

            <Card>
                    
               
                <Image src={image} alt={name} >
                
                    
                </Image>
                <NumberPokemon>{number}</NumberPokemon>
                <NamePokemon>{name}</NamePokemon>
                
             <ContainerTypes>
                {typePokemon.map(name => (
                   
                   <Types>
                       {name === "grass" ? <TypeGrass>{name}</TypeGrass> : <Types>{name}</Types> &&
                        name === "fire" ? <TypeFire>{name}</TypeFire> : <Types>{name}</Types> &&
                        name === "poison" ? <TypePoison>{name}</TypePoison> : <Types>{name}</Types>&&
                        name === "flying" ? <TypeFlying>{name}</TypeFlying> : <Types>{name}</Types>&&
                        name === "bug" ? <TypeBug>{name}</TypeBug> : <Types>{name}</Types>&&
                        name === "poison" ? <TypePoison>{name}</TypePoison> : <Types>{name}</Types>&&
                        name === "water" ? <TypeWater>{name}</TypeWater> : <Types>{name}</Types> &&
                        name === "rock" ? <TypeRock>{name}</TypeRock> : <Types>{name}</Types> &&
                        name === "electric" ? <TypeElectric>{name}</TypeElectric> : <Types>{name}</Types>&&
                        name === "ghost" ? <TypeGhost>{name}</TypeGhost> : <Types>{name}</Types>&&
                        name === "ice" ? <TypeIce>{name}</TypeIce> : <Types>{name}</Types>&&
                        name === "psychic" ? <TypePsychic>{name}</TypePsychic> : <Types>{name}</Types> &&
                        name === "fairy" ? <TypeFairy>{name}</TypeFairy> : <Types>{name}</Types>&&
                        name === "normal" ? <TypeNormal>{name}</TypeNormal> : <Types>{name}</Types>&&
                        name === "ground" ? <TypeGround>{name}</TypeGround> : <Types>{name}</Types>&&
                        name === "steel" ? <TypeSteel>{name}</TypeSteel> : <Types>{name}</Types>&&
                        name === "fighting" ? <TypeFighting>{name}</TypeFighting> : <Types>{name}</Types>&&
                        name === "dark" ? <TypeDark>{name}</TypeDark> : <Types>{name}</Types>&&
                        name === "dragon" ? <TypeDragon>{name}</TypeDragon> : <Types>{name}</Types>
                            }
                       }
                   </Types>
                    
                    
                ))}
                </ContainerTypes>
                      
            </Card>
        
        </>
    )
}