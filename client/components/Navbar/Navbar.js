import styles from "./Navbar.module.scss"
import Link from 'next/link'
import { useState } from "react"
import ScrollLock from 'react-scrolllock';

const Logo = () => {
return(
    <svg fill="#ffffff" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">ё
            <path d="M122.5,34.031L0,245.001l122.5,210.968h245L490,245.001L367.5,34.031H122.5z M287.558,318.293h-85.116l-42.557-73.292 l42.557-73.292h85.116l42.557,73.292L287.558,318.293z"/>
    </svg>
    )
}

const Navbar = (links) => {

    const allLinks = links.links;
    const enabledLinks = allLinks.filter(function(linkfilter) {
        return linkfilter.enabled;
    });
    
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }


    return (
        <div className={`${styles.header} ${hamburgerOpen ? `${styles.open}` : ""}`}>
            <div className={styles.secondaryNav}>
                <div className={styles.logo}>
                    <Link href="/"><Logo/></Link>
                </div>
                        
                <div className={`position-absolute top-0 end-0 ${styles.navigation}`}>
                   <ul>
                       {enabledLinks.map(({ id, label, link }) => (
                            <Link key={id} href={link}>
                               {label}
                            </Link>
                        ))}
                    </ul>
                </div>
                    
                <button className={styles.burgerBtn} onClick={toggleHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <ScrollLock isActive={hamburgerOpen} />
        </div>
    )
    };

export default Navbar;