import { useState } from "react";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { NextPage } from "next";
import { Layout } from "@/components/layouts";
import { Container,Image, Grid,Card,Text,Button } from "@nextui-org/react";
import { localFavorites } from "@/utils";
import { GetStaticProps,GetStaticPaths } from "next";
import { pokeApi } from "@/api";
import { getPokemonInfo } from "@/utils/getPokemonInfo";
interface Props{
    pokemon:Pokemon
}

const PokemonByNamePage:NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites,setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))
  
  const onToggleFavorite = () =>{
      console.log(localFavorites)
      localFavorites.toggleFavorite(pokemon.id)
      setIsInFavorites(!isInFavorites)
  }
    return (
      <Layout title={pokemon.name}>
      <Grid.Container css={{marginTop:'5px'}} gap={ 2 }>
          <Grid xs={ 12 } sm={ 4 }>
              <Card css={{padding:'30px'}}>
                  <Card.Body>
                      <Card.Image
                          src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                          alt={''}
                      /> 
                  </Card.Body>
              </Card>
          </Grid>
          <Grid xs={ 12 } sm={ 8 }>
              <Card>
                  <Card.Header css={{display:'flex',justifyContent:'space-between'}}>
                      <Text h1 transform="capitalize">{ pokemon.name }</Text>
                      <Button
                      color={'gradient'}
                      ghost={!isInFavorites}
                      onPress={onToggleFavorite}
                      >
                      {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}    
                      </Button>
                  </Card.Header>
                  <Card.Body>
                      <Text size={30}>Sprites:</Text>
                      <Container direction="row" display="flex" gap={ 0 }>
                          <Image 
                              src={pokemon.sprites.front_default}
                              alt={pokemon.name}
                              width={100}
                              height={100}
                          />
                           <Image 
                              src={pokemon.sprites.back_default}
                              alt={pokemon.name}
                              width={100}
                              height={100}
                          />
                           <Image 
                              src={pokemon.sprites.front_shiny}
                              alt={pokemon.name}
                              width={100}
                              height={100}
                          />
                           <Image 
                              src={pokemon.sprites.back_shiny}
                              alt={pokemon.name}
                              width={100}
                              height={100}
                          />
                      </Container>
                  </Card.Body>
              </Card>
          </Grid>
      </Grid.Container>
  </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async(ctx)=>{
    /* const pokemons151 = [...Array(151)].map(( value,index )=> `${ index + 1 }`) */
    const {data}  = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
    const pokemonNames: string[] = data.results.map(pokemon=> pokemon.name) 
    return {
        paths:pokemonNames.map(name=>({
          params:{name}  
        })),
        fallback:false
    }
}

export const  getStaticProps: GetStaticProps = async({ params }) => {
    
  const { name } = params as { name: string }
    
  return { 
    props:{
      pokemon:await getPokemonInfo( name )
    }
   } 
}

export default PokemonByNamePage