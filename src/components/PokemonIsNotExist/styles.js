import styled from "styled-components"



export const ErrorResponse = styled.div`
    width: 100%;
    max-width: 1100px;
    height: 100vh;

    display: flex;

    align-items: center;
    justify-content: center;

   
    z-index: 999;

    


`


export const Exit = styled.a`

    width: 1rem;
    height: 1rem;

    text-decoration: none;
    color: black;
    gap: 1rem;
    margin-left: 1rem;

    

    font-weight: 100;
    
    border-radius: 10px;
    &:hover{
      
        transition: 1s;

        background-color: red;
        color: white;

        border: .5px solid red;

    
        
    }

`
