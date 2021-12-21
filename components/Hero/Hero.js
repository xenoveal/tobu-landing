import Button from '../Layout/Button'
import Image from 'next/image'
import Drone from '../../public/assets/drone-illustration.svg'
import React, {useEffect} from 'react'


const Hero = () => {
    useEffect(()=>{ 
        document.getElementById("cta1").onclick = () => {
            document.getElementById("popup-modal").style.display="flex"
        }    
    })
    return (
        <>
        <section id="hero">
            <p>Kurangi biaya<br/>pengiriman<br/>paket hingga</p>
            <h1>45%</h1>
            <div id="cta1">
                <Button text="Coba Tobu Sekarang" colorclass="iris1" />
            </div>
            <div className="illustration">
                <Image src={Drone} alt="" />
            </div>
        </section>
        <style jsx>
        {`
            #hero{
                color: var(--monochrome5);
                padding: 150px 110px 0 110px;
                position: relative;
            }
            #hero p, #hero h1{
                margin: 0;
            }
            #hero>div{
                position: relative;
                z-index:1;
            }
            #hero p{
                font-size: 48px;
            }
            #hero h1{
                font-size: 108px;
                padding: 0 0 30px 0;
            }
            @media(min-width: 900px){

                .illustration{
                    position: absolute;
                    right: -40vw;
                    top: -150px;
                }
            }
            @media(max-width: 900px){
                .illustration{
                    right: -30%;
                    width: 100vw;
                }
                #hero p{
                    font-size: 32px;
                }
                #hero h1{
                    font-size: 72px;
                }
                #hero{
                    padding: 150px 10% 0 10%;
                }
            }
        `}
        </style> 
        </>

    )
}

export default Hero
