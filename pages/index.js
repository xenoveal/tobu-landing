import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import React, {useEffect} from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import How from '../components/How/How'
import Popup from '../components/Layout/Popup'

export default function Home() {

    useEffect(()=> {
        window.onload = () => {
            document.getElementById("page-loader").style.display = "none"
        }
    })
    return (
        <div className={[styles.container, "noselect"].join(" ")}>
            <div id="page-loader" className="loader-bg">
                <div className="loader"></div>
            </div>
            <Head>
            <title>Tobu - Homepage</title>
            </Head>
            <Popup />
            <Navbar />
            <Hero />
            <About />
            <How />

            <Footer />
            <style jsx>{`
            .loader-bg{
                background: var(--monochrome1);
                width: 100%;
                height: 100%;
                z-index:20;
                position:fixed;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            .loader {
                border: 16px solid var(--monochrome2); /* Light grey */
                border-top: 16px solid var(--iris1); /* Blue */
                border-radius: 50%;
                width: 120px;
                height: 120px;
                animation: spin 2s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            `}</style>
        </div>
    )
}
