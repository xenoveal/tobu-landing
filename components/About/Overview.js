import Logo from '../../public/assets/logo.svg'
import LowPrice from '../../public/assets/low-price-icon.svg'
import Protect from '../../public/assets/protect-icon.svg'
import Fast from '../../public/assets/fast-icon.svg'
import Image from 'next/image'

const Overview = () => {
    return (
        <>
            <section id='about'>
                <div className='title'>
                    <div className='logo'>
                        <Image src={Logo} alt='Tobu Logo' />

                    </div>
                    <p>Pengiriman dengan Drone yang&ensp;
                        <strong>
                            Aman, Murah,
                        </strong>
                        &ensp;dan&ensp;
                        <strong>
                            Cepat
                        </strong>
                    </p>
                </div>
                <div className='content'>
                    <div className='card'>
                        <div className='illustration'>
                            <Image src={Protect} alt="Guarantee 100% Illustration" />
                        </div>
                        <h4>Garansi Hingga 100%</h4>
                        <p>Tidak perlu takut barang rusak. Kami ganti 100%*!</p>
                        <p className='detail-desc'>*) Syarat dan Ketentuan Berlaku</p>
                    </div>
                    <div className='card'>
                        <div className='illustration'>
                            <Image src={LowPrice} alt="Low Price Illustration" />
                        </div>
                        <h4>Harga Mulai dari Rp 550/km</h4>
                        <p>Biaya pengiriman 45% lebih murah dibanding jasa pengiriman lain.</p>
                    </div>
                    <div className='card'>
                        <div className='illustration'>
                            <Image src={Fast} alt="Fast Illustration" />
                        </div>
                        <h4>Pengiriman Hanya 7 Menit</h4>
                        <p>Antarkan paketmu dengan kecepatan 80km/jam.</p>
                    </div>
                </div>   
            </section>  
            <style jsx>
                {`
                    #about{
                        color: var(--monochrome5);
                        padding: 0px 110px 400px 110px;
                    }
                    .title p{
                        font-size: 48px;
                        margin: 40px 0 130px 0;
                        width: 70%;
                    }
                    .card{
                        background: #3B3B61;
                        border-radius: 20px;
                        width: 30%;
                        padding: 50px 30px 20px 30px;
                    }
                    .card h4{
                        font-size: 24px;
                    }
                    .card p{
                        font-size: 20px;
                    }
                    .card .detail-desc{
                        font-size: 12px;
                    }
                    .content{
                        position: relative;
                        display: flex;
                        justify-content: space-between;
                    }
                    .card{
                        position: relative;
                    }
                    .illustration{
                        position: absolute;
                        top: -35px;
                        left: 30px;
                    }
                    @media(max-width: 900px){
                        .logo{
                            width: 60%;
                        }
                        .title p{
                            font-size: 24px;
                            margin: 40px 0 30px 0;
                            width: 100%;
                        }
                        #about{
                            padding: 0px 10% 100px 10%;
                        }
                        .content{
                            flex-direction: column;
                        }
                        .card{
                            width: 100%;
                            margin: 50px 0;
                        }
                    }

                `}
            </style>
        </>
    )
}

export default Overview
