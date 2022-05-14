import styled, { keyframes } from "styled-components"

export const PokebolaLoading = styled.img`
    width: 50px;
    height: 50px;

    margin-top: 10px;
`
const rotate = keyframes`
    from{
        transform:  rotate(0deg);
    }

    to{
        transform:  rotate(360deg);
    }
`
export const Load = styled.div`
    margin-top: 5px;
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
`