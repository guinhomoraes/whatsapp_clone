import Image from 'next/image'

import styles from '../styles/CallItem.module.css'

import { BsFillTelephoneFill } from "react-icons/bs";

export default function CallItem({poke})
{
    return(<>

        <div className={styles.call_item}>

            <Image
                src={poke.image}
                width="40"
                height="40"
                alt={poke.name}
            />
            <div className={styles.user_info}>
                <h3>{poke.name}</h3>
                <p>{poke.description}</p>
            </div>
            <div className={styles.user_data}>
                {poke.icone && <BsFillTelephoneFill/> }
            </div>

                

        </div>
    </>)
}