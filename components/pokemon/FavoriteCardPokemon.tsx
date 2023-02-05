import { FC } from "react";
import { Grid,Card,Image } from "@nextui-org/react";
interface Props{
    pokemonId:number
}

export const FavoriteCardPokemon:FC<Props> = ({ pokemonId }) => {
    return(
        <Grid xs={6} sm={2} xl={1} key={ pokemonId }>
            <Card isHoverable css={{padding:10}}>
            <Card.Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                width={'100%'}
                height={140}
            />
            </Card>
      </Grid>
    )
}