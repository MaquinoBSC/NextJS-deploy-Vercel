import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import styles from './MainLayout.module.css';


const MainLayout : FC <PropsWithChildren> = ({ children }) => {
    return (
        <div className={ styles.container }>
          {/* EL Head es un componente especial de Next que le dice al mismo framework */}
          {/* La informacion que esta aqui, es informacion que debe de estar en el <head></head> de la pagina */}
          {/* Podemos agregar mas de un componente Head en nuestra pagina */}
            <Head>
                <title>Home- Maquino</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Head>
                <title>Home- Maquino 2</title>
            </Head>

            {/* Barra de navegación */}
            <Navbar />
    
            {/* Contenido principal */}
            <main className={ styles.main }>
                { children }
            </main>
        </div>
      )
}

export default MainLayout;