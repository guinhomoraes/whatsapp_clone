import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Status.module.css'
import StatusItem from '@/components/StatusItem'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps()
{
   const req = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=4');
   const pokemom = await req.json();

   pokemom.results.forEach((element,idx) => {
      element.id = idx +1,
      element.image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${element.id}.svg`,
      element.description = 'Há 10 minutos'
   });

   return {
    props: {pokemom}
   }
}


export default function Status({pokemom}) 
{

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <div className={styles.status_container}>

            <StatusItem key={0} poke={{image: '/images/status.png', id:0,name:"Meu Status", description:"Toque para atualizar seu status"}}/>

            <p className={styles.atualizacoes}>Atualizações recentes</p>

            {pokemom.results.map((it,idx) => <StatusItem key={idx} poke={it}/>)}

            <p className={styles.atualizacoes}>Atualizações vistas</p>

            {pokemom.results.map((it,idx) => <StatusItem key={idx} poke={it}/>)}

          </div>
      </main>
    </>
  )
}
