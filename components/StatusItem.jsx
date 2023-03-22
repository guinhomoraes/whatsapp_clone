import Image from 'next/image'

import styles from '../styles/StatusItem.module.css'

export default function Conversa({poke})
{
    return(<>

        <div className={styles.status_item}>

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

        </div>
    </>)
}