
import styles from '../styles/Navbar.module.css'
import { BiSearch, BiDotsVerticalRounded, BiCamera } from "react-icons/bi";
import {useRouter} from 'next/router';

import Menu from './Menu';

export default function Navbar()
{
    const router = useRouter()

    return(<div className={styles.navbar}>
        
        {router.pathname.indexOf('/user') == -1 && 

            <div className={styles.navbar_action}>
                <div className={styles.logo}>
                    WhatsApp
                </div>
                <div className={styles.actions}>
                    <BiCamera/>
                    <BiSearch/>
                    <BiDotsVerticalRounded/>
                </div>
            </div>
        }

        <div className={styles.navbar_menu}>

        </div>

        <Menu/>

    </div>)
}