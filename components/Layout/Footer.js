import styles from '../../styles/Footer.module.css'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Website from '../../public/assets/website-icon.svg'
import Mail from '../../public/assets/mail-icon.svg'

const Footer = () => {
    return ( 
		<div className={styles.general}>
			<div className={styles.description}>
				<div className={styles.info}>
					<p>The Fastest & Cheapest<br/>Delivery Service</p>
				</div>
				<div className={styles.sns}>
					<h5>Contact Us</h5>
					<Link href="https://tobudelivery.com">
						<a target="_blank">
							<div className={styles.contact}><Image src={Website} alt="Website"/>&ensp;&ensp;https://tobudelivery.com</div>
						</a>
					</Link>
					<div className={styles.contact}><Image src={Mail} alt="Email"/>&ensp;&ensp;tobu-delivery@gmail.com</div>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>© Tobu 2021</p>
			</div>
		</div>
    )
}

export default Footer
