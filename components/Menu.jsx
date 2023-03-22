import styles from '../styles/Menu.module.css'

import Link from 'next/link';
import {useRouter} from 'next/router';


export default function Menu()
{
    const router = useRouter()

    return(<>

       {router.pathname.indexOf('/user') == -1 && 
            <ul className={styles.menu}>
                <li><Link className={styles.link} href="/">Conversas</Link></li>
                <li><Link className={styles.link} href="/status">Status</Link></li>
                <li><Link className={styles.link} href="/call">Chamadas</Link></li>
            </ul>
        }
    </>)
}