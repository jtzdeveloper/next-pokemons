import { useTheme,Text, Spacer,Container } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import NextLink from 'next/link'

export const Navbar = () => {
  const { theme } = useTheme()
  /* console.log(theme) */
  return (
    <div style={{
       display: 'flex',
       width:'100%',
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'start',
       padding:'0px 20px',
       backgroundColor: theme?.colors.gray100.value   
    }}>

      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt='aaaaa'
        width={70}
        height={70}
      />

    <NextLink href="/">
          <Container  direction="row" display="flex" gap={0} >
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemon</Text>
          </Container>
    </NextLink>
    
    <Spacer css={{ flex:1 }} />
      
    <NextLink href="/favorites" passHref>
      <Text color='white'>Favotitos</Text>
    </NextLink>
  </div>
  )
}
