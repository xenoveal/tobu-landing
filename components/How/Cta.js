import Image from "next/image"
import Logo from "../../public/Logo.svg"
import MoneyGrowth from "../../public/assets/increase-profit-illustration.svg"
import Button from "../Layout/Button"
import React, {useEffect} from 'react'

const Cta = () => {
    useEffect(()=>{ 
        document.getElementById("cta3").onclick = () => {
            document.getElementById("popup-modal").style.display="flex"
        }    
    })
    return (
        <>
            <section className="cta">

            <div className="wave">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="content">
                    <div className="logo"><Image src={Logo} alt="logo"/></div>
                    <div className="description">
                        <div className="illustration"><Image src={MoneyGrowth} alt="" /></div>
                        <div className="details">
                            <p className="small">Profit kamu adalah prioritas kami</p>
                            <p className="large">Tingkatkan keuntunganmu bersama Tobu</p>
                            <div id="cta3">
                                <Button text="Coba Tobu Sekarang" colorclass="iris1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    .cta{
                        position: relative;
                    }
                    .wave{
                        position: absolute;
                        width: 100vw !important;
                        top: -10vw;
                        height: 500px;
                        z-index: 1;
                        display:flex;
                        justify-content: center;
                        width: max-content;
                    }
                    .wave div{
                        border-radius:100%;
                        background: var(--monochrome1);
                        width: 25vw;
                        height: 20vw;
                        margin: 0 -10px 0 -10px;
                    }
                    .content{
                        position: relative;
                        z-index: 2;
                        padding: 80px 130px 200px 130px;
                        color: var(--monochrome5);
                    }
                    .description{
                        display: flex;
                        margin-top: 50px;
                        align-items: center;
                    }
                    .illustration{
                        width: 63%;
                        margin-right: 60px;
                    }
                    .small{
                        font-size: 36px;
                    }
                    .large{
                        font-size: 48px;
                    }
                    @media(max-width: 900px){
                        .content{
                            position: relative;
                            z-index: 2;
                            padding: 30px 10% 100px 10%;
                            color: var(--monochrome5);
                        }
                        .description{
                            flex-wrap: wrap;
                            justify-content: center;
                        }
                        .small{
                            font-size: 18px;
                        }
                        .large{
                            font-size: 24px;
                            font-weight: 600;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default Cta
