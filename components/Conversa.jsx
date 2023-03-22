import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Conversa.module.css'

export default function Conversa({poke})
{
    return(<>

            <Link href={`/user/${poke.id}`} className={styles.conversa_item}>

                <Image
                    src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${poke.id}.svg`}
                    width="40"
                    height="40"
                    alt={poke.name}
                />

                <div className={styles.user_info}>
                    <h3>{poke.name}</h3>
                    <p>vfdskljgvnfsdkjvnfsdjknvkjfdsnvkj</p>
                </div>

                <div className={styles.user_data}>
                    <p>14:45 da tarde</p>
                </div>

            </Link>

    </>)
}