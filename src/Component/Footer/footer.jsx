import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import styles from "../Footer/footer.module.css"
import { Link } from "react-router-dom";

function Footer(){
    return(
   <nav className={styles.navContainer}>
        <div className={styles.background}>
            <div className={styles.logo}>
            <Link to="/">
                <p>Solo</p>
                <p>Games</p>
                </Link>
                </div>
                <div className={styles.logos}>
                    <FaTwitter className={styles.logoStyle} />
                    <LuInstagram className={styles.logoStyle}/>
                    <FaLinkedin className={styles.logoStyle}/>
                    <FaFacebookSquare className={styles.logoStyle}/>
                </div>
        </div>
        <div className={styles.otherItems}>
            <div className={styles.location}>
                    <p>Locations</p>
                    <p>SEMICOLON</p>
            </div>
        </div>
        <div className={styles.menuItems}>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
    </nav>
        
)
}
export default Footer;
