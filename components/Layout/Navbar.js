import styles from '../../styles/Navbar.module.css'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import LogoSmall from '../../public/logo-small.svg'
import Link from 'next/link'
import hamburger from '../../public/img/hamburger.svg'
import close from '../../public/img/close.svg'
import React, {useState, useEffect} from 'react'

const Navbar = () => {
    const [state, setState] = useState(0)
    useEffect(()=>{ 
        let content = document.getElementById("content")
        document.getElementById("hamburger").onclick = () => {
            setState(1)
        }
        document.getElementById("close").onclick = () => {
            setState(0)
        }
        if(state === 0){
            document.getElementById("hamburger").style.display = "block"
            document.getElementById("close").style.display = "none"
            content.style.transform = "translateY(-500px)"
            content.style.opacity = 0
            content.style.opacity = 0
            content.style.background = "var(--monochrome5)"
        }
        else if(state === 1){
            document.getElementById("hamburger").style.display = "none"
            document.getElementById("close").style.display = "block"
            content.style.transform = "translateY(0)"
            content.style.opacity = 1
            content.style.background = "var(--iris5)"
        }
        document.getElementById("interested").onclick = () => {
            document.getElementById("popup-modal").style.display="flex"
        }
    }, [state])
    return (
        <div className={styles.general} id="navbar">
            <ul className={styles.ul}>  
                <Link href="/">
                <a className={styles.logo}>
                    <Image alt="" src={Logo} />
                </a>
                </Link> 
                <Link href="/">
                <a className={styles.slogo}>
                    <Image alt="" src={LogoSmall} />
                </a>
                </Link>
            </ul>
            <ul id="content" className={[styles.ul, styles.content].join(" ")}>
                <a href="#">Home</a>
                <a href="#about">About Us</a>
                <a href="#how">How Tobu Work?</a>
                <a id="interested" className={styles.button}>Coba Sekarang</a>
            </ul>
            <ul id="hamburger" className={[styles.ul, styles.hamburger].join(" ")}>
                <Image src={hamburger} alt="" />
            </ul>
            <ul id="close" className={[styles.ul, styles.close].join(" ")}>
                <Image src={close} alt="" />
            </ul>

        </div>
    )
}

export default Navbar
