import {FC} from "react";
import {SmallPokemon} from '../../interfaces'
import { Grid,Card,Row,Text } from "@nextui-org/react";
import { useRouter } from "next/router";
interface Props{
    pokemon:SmallPokemon
}

export const PokemonCard:FC<Props> = ({pokemon}) => {
    const {id,name,img} = pokemon
    const router = useRouter()

    const onClick = () => {
        router.push(`/name/${pokemon.name}`)
    }

    return (
        <Grid onClick={onClick}  xs={6} sm={3} xl={1} key={id}>
            <Card isHoverable isPressable>
                <Card.Body>
                <Card.Image
                    src={img}
                    width="100%"
                    height={ 200 }
                />
                </Card.Body>
                <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>{name}</Text>
                    <Text>#{id}</Text>
                </Row>
                </Card.Footer>
            </Card>
       </Grid>
    )
}