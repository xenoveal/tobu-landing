import Cheap from '../../public/assets/cheap-illustration.svg'
import WorkHours from '../../public/assets/working-hours-illustration.svg'
import Quick from '../../public/assets/quick-illustration.svg'
import Ecofriendly from '../../public/assets/ecofriendly-illustration.svg'
import Image from 'next/image'
import Button from '../Layout/Button'
import React, {useEffect} from 'react'

const Why = () => {
    useEffect(()=>{ 
        document.getElementById("cta2").onclick = () => {
            document.getElementById("popup-modal").style.display="flex"
        }    
    })
    return (
        <>
            <section className="why">
                <div className="wave">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="content">
                    <h2>Kenapa Kamu Harus Pakai Tobu?</h2>
                    <div className="item">
                        <div className="card cheap">
                            <div className='illustration'>
                                <Image src={Cheap} alt="" />
                            </div>
                            <h3>45%</h3>
                            <p>biaya pengiriman yang bisa dihemat</p>
                        </div>
                        <div className="card work">
                            <div className='illustration'>
                                <Image src={WorkHours} alt="" />
                            </div>
                            <h3>24 jam</h3>
                            <p>layanan pengiriman yang dapat dinikmati</p>
                        </div>
                        <div className="card quick">
                            <div className='illustration'>
                                <Image src={Quick} alt="" />
                            </div>
                            <h3>64%</h3>
                            <p>waktu pengiriman yang bisa dihemat</p>
                        </div>
                        <div className="card eco">
                            <div className='illustration'>
                                <Image src={Ecofriendly} alt="" />
                            </div>
                            <h3>99%</h3>
                            <p>lebih ramah lingkungan</p>
                        </div>
                    </div>
                    <h3>Tingkatkan keuntunganmu dengan Tobu!</h3>
                    <div id="cta2" className='cta'>
                        <Button text="Coba Tobu Sekarang" colorclass="iris1" />
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    .why{
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
                        padding: 30px 130px 200px 130px;
                        text-align: center;
                        color: var(--monochrome5);
                    }
                    .item{
                        display: flex;
                        justify-content: space-between;
                        margin-top: 150px;
                    }
                    .card{
                        padding: 150px 30px 20px 30px;
                        text-align: left;
                        color: var(--monochrome1); 
                        width: 22%;
                        position: relative;
                        border-radius: 30px;
                    }
                    .card h3{
                        font-size: 36px;
                        margin: 10px 0 10px 0;
                    }
                    .card p{
                        font-size: 18px;
                        margin:0 0 40px 0;
                    }
                    .illustration{
                        position: absolute;
                        top: -50px;
                        right: 2px;
                    }
                    .cheap .illustration{
                        top: -80px;
                    }
                    .cheap{
                        background: #6EDCFF;
                        box-shadow: 0px 0px 36px 5px rgba(110, 220, 255, 0.5);
                    }
                    .work{
                        background: #FFC24E;
                        box-shadow: 0px 0px 36px 5px rgba(255, 194, 78, 0.5);
                    }
                    .quick{
                        background: #72FFAD;
                        box-shadow: 0px 0px 36px 5px rgba(114, 255, 173, 0.5);
                    }
                    .eco{
                        background: #D974FF;
                        box-shadow: 0px 0px 36px 5px rgba(217, 116, 255, 0.5);
                    }
                    .content>h3{
                        font-size: 36px;
                        margin-top: 135px;
                    }
                    .cta{
                        display: flex;
                        justify-content: center;
                        width: 100%;
                    }
                    @media(max-width: 900px){
                        .content h2{
                            font-size: 32px;
                        }
                        .content>h3{
                            font-size: 18px;
                            margin-top: 0;
                        }
                        .item{
                            flex-direction: column;
                            margin-top: 50px;
                        }
                        .card{
                            width: 100%;
                            margin: 50px 0;
                        }
                        .content{
                            padding: 30px 10% 150px 10%;
                        }
                        .card h3{
                            font-size: 32px;
                            margin: 10px 0 10px 0;
                        }
                        .card p{
                            font-size: 16px;
                            margin:0 0 40px 0;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default Why
