import styles from '../../styles/Contact.module.css'
import trigger from '../../public/img/cs-trigger.svg'
import whatsapp from '../../public/img/cs-wa.svg'
import instagram from '../../public/img/cs-ig.svg'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'

const Contact = () => {
    const phone_number = "6285162846200"
    const text = "Hai kak. Saya ada pertanyaan untuk Event Startup Festival. Boleh tanya - tanya lebih lanjut?"
    const wa_url = "https://wa.me/"+phone_number+"?text="+encodeURI(text)
    const [choicesOpen, setChoicesOpen] = useState(0)
    function triggerClicked(){
        if(choicesOpen === 0){
            document.getElementById("contact-choices").style.visibility = "visible"
            document.getElementById("contact-choices").style.transform = "translateY(0)"
            setChoicesOpen(1)
        }
        else{
            document.getElementById("contact-choices").style.visibility = "hidden"
            document.getElementById("contact-choices").style.transform = "translateY(100px)"
            setChoicesOpen(0)
        }
    }
    return (
        <div className={styles.general}>
            <div className={styles.contacts} id="contact-choices">
                <Link href={wa_url}>
                    <a target="_blank">
                    <span><Image src={whatsapp} alt="" /></span>
                    </a>
                </Link>
                <Link href="https://instagram.com/kompeten.co">
                    <a target="_blank">
                    <span><Image src={instagram} alt="" /></span>
                    </a>
                </Link>
            </div>
            <div className={styles.trigger} onClick={triggerClicked}>
                <span><Image src={trigger} alt="" /></span>
            </div>
        </div>
    )
}

export default Contact
