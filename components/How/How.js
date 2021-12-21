import Cta from "./Cta"

const How = () => {
    return (
        <>
            <section id="how">
                <div className="content">

                    <h2>Cara Kerja Tobu</h2>
                    <div className="description">
                        <iframe width="500" height="290" src="https://www.youtube.com/embed/PsYfkC_pDOw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="steps">
                            <div className="step">
                                <p className="number">1</p>
                                <p>Pilih opsi pengiriman di Aplikasi</p>
                            </div>
                            <div className="step">
                                <p className="number">2</p>
                                <p>Track pengiriman kamu</p>
                            </div>
                            <div className="step">
                                <p className="number">3</p>
                                <p>Barang kamu telah sampai!</p>
                            </div>
                            <div className="step">
                                <p className="number">4</p>
                                <p>Sampai jumpa kembali Tobu!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Cta />
            <style jsx>
                {`
                    #how{
                        background: var(--iris2);
                        position: relative;
                    }
                    #how::before{
                        content: '';
                        position: absolute;
                        width: 100vw;
                        top: -100px;
                        height: 500px;
                        border-radius: 100px;
                        background: var(--iris2);
                        z-index: 1;
                    }
                    .content{
                        position: relative;
                        z-index: 2;
                        padding: 30px 110px 200px 110px;
                        text-align: center;
                        color: var(--monochrome5);
                    }
                    .description{
                        display:flex;
                        justify-content: center;
                        text-align: left;
                        align-items:center;
                    }
                    iframe{
                        border-radius: 30px;
                        margin-right: 100px;
                    }
                    .step{
                        display: flex;
                        align-items: center;
                    }
                    .number{
                        margin-right: 30px;
                        background: #161616;
                        border-radius: 100%;
                        width: 60px;
                        height: 60px;
                        padding: 14px 0 0 22px;
                        font-weight: var(--bold);
                    }
                    .step p{
                        font-size: 24px;
                    }
                    @media(max-width: 900px){
                        .content{
                            padding: 30px 10% 100px 10%;
                        }
                        #how::before{
                            border-radius: 70px;
                        }
                        .content h2{
                            font-size: 32px;
                            margin: 0;
                        }
                        .description{
                            flex-wrap: wrap;
                        }
                        iframe{
                            margin: 40px 0 20px 0;
                        }
                        .step p{
                            font-size: 16px;
                        }
                        .number{
                            margin-right: 10px;
                            width: 45px;
                            height: 45px;
                            padding: 12px 0 0 18px;
                            font-weight: var(--bold);
                        }
                    }
                `}
            </style>
        </>
    )
}

export default How
