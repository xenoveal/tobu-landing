import Image from "next/image"
import Air from '../../public/assets/air-shipping-illustration.svg'
import EasyTrack from '../../public/assets/easy-track-illustration.svg'

const Different = () => {
    return (
        <>
            <section className="different">
                <div className="content">
                    <h2>Kirim pakai Tobu itu beda karena..</h2>
                    <div className="item">
                        <div className="illustration">
                            <Image src={Air} alt="air-delivery" />
                        </div>
                        <div className="description">
                            <h3>Paket kamu di antar melalui udara</h3>
                            <p>Engga ada lagi tuh yang namanya macet!</p>
                        </div>
                    </div>
                    <div className="item">
                        <div id="b" className="description">
                            <h3>Mudah track paket kamu di aplikasi</h3>
                            <p>Engga perlu khawatir paket kamu engga sampai di tangan pembeli!</p>
                        </div>
                        <div id="a" className="illustration">
                            <Image src={EasyTrack} alt="air-delivery" />
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    .different{
                        background: var(--monochrome5);
                        position: relative;
                    }
                    .different::before{
                        content: '';
                        position: absolute;
                        width: 100vw;
                        top: -100px;
                        height: 500px;
                        border-radius: 100px;
                        background: var(--monochrome5);
                        z-index: 1;
                    }
                    .content{
                        position: relative;
                        z-index: 2;
                        padding: 30px 110px 200px 110px;
                        text-align: center;
                        color: var(--monochrome1);
                    }
                    .item{
                        display: flex;
                        width: 100%;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 70px;
                    }
                    .illustration{
                        width: 50%;

                    }
                    .description{
                        width: 30%;
                        text-align: left;
                        margin: 0 100px 0 100px;
                    }
                    @media(max-width: 900px){
                        .content{
                            padding: 0px 10% 100px 10%;
                            text-align: left;
                        }
                        .different::before{
                            border-radius: 70px;
                        }
                        .content h2{
                            font-size: 32px;
                        }
                        .item{
                            flex-direction: column;
                        }
                        .illustration{
                            width: 80vw;
                        }
                        .description{
                            width: 100%;
                        }
                        #b {order: 2;}
                        #a {order: 1;}
                    }
                `}
            </style>
        </>
    )
}

export default Different
