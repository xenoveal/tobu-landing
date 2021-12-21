import styles from '../../styles/Popup.module.css'
import Image from 'next/image'
import close from '../../public/img/close.svg'
import interested from '../../public/assets/popup.svg'
import Button from './Button'
import React, {useState, useEffect} from 'react'


const Popup = () => {

    const [user, setUser] = useState('')
    function closePopup(){
        document.getElementById("popup-modal").style.display = "none"
    }

    useEffect(()=>{
        window.onload=() => {
            setUser(window.sessionStorage.getItem("user"))
            
        }
        if(user !== ""){
            document.getElementById("not-added").style.display = "none"
            document.getElementById("added").style.display = "block"
        } else {

            document.getElementById("added").style.display = "none"
            document.getElementById("not-added").style.display = "block"
        }
        
    })

    const submitData = async (event) => {
        event.preventDefault()

        const data = document.getElementById("data").value
        var re = /\S+@\S+\.\S+/;
        
        var to_submit = "email"

        if(!re.test(data))
        to_submit = "phone"

        const url = window.location.origin.toString()+"/api/submit?+"+to_submit+"="+data
        try{
            const response = await (await fetch(url)).json()
            window.sessionStorage.setItem('user', data)
            setUser(data)
            if(data.error){
                console.log(data)
            }
        } catch (err){
            alert(err)
            // alert("server error, please try again later or contact admin")
        }
    }
    return (
        <div className={styles.general} id="popup-modal">
            <span onClick={closePopup} id="outside"></span>
            <div className={styles.content}>
                <span onClick={closePopup}><Image src={close} alt="" /></span>
                <div className={styles.image}>
                    <Image src={interested} alt="" layout="responsive" />
                </div>
                <div id="not-added">
                    <div className={styles.text}>
                        <h3>Layanan Tobu Akan Segera Tiba</h3>
                    </div>

                    <div className={styles.email}>
                        <p>Gabung sekarang dan dapatkan prioritas untuk mencoba layanan Tobu</p>
                        <form onSubmit={submitData} className={styles.form}>
                            <input className={styles.input} id="data" placeholder="Tulis nomor HP/Email" required />
                            <button type="submit" className={styles.btn}>
                                <Button buttonid="submit-data" colorclass="iris1" text="Kirim" />
                            </button>
                        </form>
                    </div>
                </div>
                <div id="added">
                    <div className={styles.text}>
                        <h3><strong>{user}</strong> Telah Diprioritaskan</h3>
                    </div>
                    <div className={styles.email}>
                        <p>Nantikan kehadiran layanan kami. Kamu akan diberitahu saat layanan kami sudah hadir!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
