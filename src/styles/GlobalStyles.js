import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
    }

`
export const Container = styled.div`
    width: 100% ;
    height: 100% ;

    display: flex ;
    align-items: center ;
    justify-content: center ;

    flex-direction: column ;

`
export const Main = styled.div`
    width: 100% ;
    max-width: 1100px ;
    height: 100%;

    display: flex ;
    justify-content: center ;

    flex-wrap: wrap ;
    flex-direction: row;
    gap: 2rem ;

    
`


export const Text = styled.h1`
    font-weight: 500 ;
`
export const Card = styled.div`
width: 200px;
height: 400px;

display: flex ;
justify-content: center ;
align-items: center ;

flex-direction: column ;


`
  
export const Image = styled.img`
width: 100% ;
max-width: 100%;

object-fit: cover;
height: auto ;

background-color: #dcdcdc ;

border-radius: 10px;


`
export const NumberPokemon = styled.p`
margin-top: 5px;
color: #919191;
`
export const NamePokemon = styled.p`
font-size: 1.8rem;

font-weight: 300;
font-style: normal;

margin-top: 5px;
margin-bottom: 3px;

color: #313131;

`

export const ContainerTypes = styled.div`

width: 100%;

display: flex;
align-items: center;
justify-content: space-between;


`

export const Types = styled.div`
width: 100% ;
font-size: 1.25rem;

border-radius: 10px;
padding: 2px;

display: flex;
justify-content: center;
align-items: center;

color: white;
  
`
export const TypeGrass = styled(Types)`
background-color: #9bcc50;
background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);

`
export const TypeFire = styled(Types)`
background: linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
background-color: #fd7d24;

`
export const TypePoison = styled(Types)`
background: linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
background-color: #b97fc9;
`
export const TypeFlying = styled(Types)`
background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
background-color: #3dc7ef;

`
export const TypeBug = styled(Types)`

background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
background-color: #729f3f;


`
export const TypeFighting = styled(Types)`
background: linear-gradient(180deg, #d56723 50%, #d56723 50%);
background-color: #d56723;

`
export const TypeNormal = styled(Types)`
background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
background-color: #a4acaf;

`
export const TypeElectric = styled(Types)`
background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
background-color: #eed535;

`
export const TypeGround = styled(Types)`
background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
background-color: #f7de3f;

`
export const TypeFairy = styled(Types)`
   background: linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
background-color: #fdb9e9;

`
export const TypeWater = styled(Types)`
background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
background-color: #4592c4;

`
export const TypePsychic = styled(Types)`
background: linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
background-color: #f366b9;
`
export const TypeIce = styled(Types)`
background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
background-color: #3dc7ef;
`
export const TypeRock = styled(Types)`
background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
background-color: #3dc7ef;
`
export const TypeGhost = styled(Types)`
background: linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
background-color: #7b62a3;
`
export const TypeSteel = styled(Types)`
background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
background-color: #9eb7b8;
`
export const TypeDragon = styled(Types)`
background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
background-color: #53a4cf;
`
export const TypeDark = styled(Types)`
background: linear-gradient(180deg, #707070 50%, #707070 50%);
background-color: #707070;
`




