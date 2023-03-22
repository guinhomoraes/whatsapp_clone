import styles from '../../styles/User.module.css';

import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillTelephoneFill, BsFillCameraFill, BsArrowLeftShort, BsFillLockFill,
         BsEmojiLaughing, BsPaperclip, BsCamera, BsMic} from "react-icons/bs";

import Image from 'next/image';
import Link from 'next/link';



export async function getStaticPaths()
{


   const req = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=25`);
   const pokemoms = await req.json();


    pokemoms.results.forEach((element,idx) => {
        element.id = idx +1,
        element.image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${element.id}.svg`
    });

    const paths = pokemoms.results.map((p) => ({
        params: { userId: p.id.toString() },
    }))
    

   return { paths, fallback: false }

   
}


export async function getStaticProps(context)
{

   const req = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=25`);
   const pokemoms = await req.json();

   pokemoms.results.forEach((element,idx) => {
      element.id = idx +1,
      element.image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${element.id}.svg`
   });

   const pokemom = pokemoms.results.filter(el => { if(el.id ==  context.params.userId){ return el;}} )


   return {
    props: {pokemom}
   }
}

export default function User({pokemom})
{
    return(<>
        <div className={styles.user_navbar}>
            <Link className={styles.user_return} href="/"><BsArrowLeftShort/></Link>
            <Image
                src={pokemom[0].image}
                width="30"
                height="30"
                alt={pokemom[0].name}
            />
            <div className={styles.logo}>
                <h3>{pokemom[0].name}</h3>
            </div>
            <div className={styles.actions}>
                <BsFillCameraFill/>
                <BsFillTelephoneFill/>
                <BiDotsVerticalRounded/>
            </div>
        </div>

        <div className={styles.user_container}>

            <div className={styles.user_conversa}>
                <h3>22 de Março de 2023</h3>
                <p> <BsFillLockFill/> As mensagens e chamadas desta conversa estão protegidas com a criptografia de ponta a ponta</p>
            </div>

            <div className={styles.user_message}>
                <div className={styles.user_message_input}>
                    <span><BsEmojiLaughing/></span>  
                    <input type="text"/>
                    <span><BsPaperclip/></span>  
                    <span><BsCamera/></span>  
                </div>
                <div className={styles.user_message_button}>
                    <button><BsMic/></button>
                </div>
            </div>
        </div>

    </>)
}