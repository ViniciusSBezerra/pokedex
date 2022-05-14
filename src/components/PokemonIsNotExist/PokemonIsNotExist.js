
import { Text } from "../../styles/GlobalStyles"

import { ErrorResponse, Exit } from "./styles"

export function PokemonIsNotExits(){

   
    return(
        <>  
            <ErrorResponse>
                <Text>Pokemon não encontrado 
                    <Exit href="/">voltar</Exit>    
                </Text>
            </ErrorResponse>
        </> 
    )
}