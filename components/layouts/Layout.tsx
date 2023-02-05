import  Head  from 'next/head'
import * as React from 'react';
import { Navbar } from '../ui';
type Props = {
  children?: React.ReactNode,
  title?: string 
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin)

export const Layout: React.FC<Props> = ({children,title}) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App' }</title>
            <meta name='author' content='Johnny Torres'></meta>
            <meta name='description' content='informacion sobre pokemon xxxxx'></meta>
            <meta name='keywords' content='XXX,pokemon,pokedex' />

           {/*  <meta property='og:title' content={`Informacion sobre ${ title }`} />
            <meta property='og:description' content={`Esta es la pagina sobre ${ title }`} />
            <meta property='og:image' content={`${ origin }/`} /> */}
        </Head>
        <Navbar />
        <main>
            {children}
        </main>
    </>
  )
}
