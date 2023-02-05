
import { Inter } from '@next/font/google'
import { Button, Grid,Card,Row,Text } from '@nextui-org/react';
import { pokeApi } from '@/api';
import { GetStaticProps,InferGetStaticPropsType, NextPage } from 'next';
import {PokemonCard} from '@/components/pokemon'
/* import styles from '@/styles/Home.module.css' */
import {Layout} from '../components/layouts/Layout'
import { PokemonListResponse,SmallPokemon } from '@/interfaces';
const inter = Inter({ subsets: ['latin'] })

interface Props{
  pokemons:SmallPokemon[]
}
//function Home(props : InferGetStaticPropsType<typeof getStaticProps>) {

 const Home: NextPage<Props>= ({pokemons})=>{

 
  console.log(pokemons)
  return (
    <Layout title='Listado de pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon)=>(
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        
      </Grid.Container>
    </Layout>
  )
}

export const  getStaticProps: GetStaticProps = async(ctx) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
   const pokemons:SmallPokemon[] = data.results.map((poke,i) => ({
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1}.svg`
   }))
  return {
    props:{
      pokemons
    }
  }
}

export default Home
