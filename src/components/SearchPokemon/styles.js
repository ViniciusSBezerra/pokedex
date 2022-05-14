import styled from "styled-components";

export const ContainerSearch = styled.form`
    width: 100%;
    max-width: 1100px;

    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    
`


export const Input = styled.input`
    width: 100%;
    max-width: 900px;
    height: 40px;

   font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: .5rem;

    border: 1px solid black;
    border-right: none;

    color: none;

    
`

export const SearchButton = styled.button`
    width: 40px;
    max-width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0;

    background-color: white;
    
    border: 1px solid black;
    border-left: none;

    cursor: pointer;
`