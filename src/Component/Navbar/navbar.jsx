import React from "react";
import styles from "../Navbar/navbar.module.css";
import { Link } from "react-router-dom";
import FilledButton from '../Buttons/FilledButton/filledbutton';
// import { BsCart3} from 'react-icons/bs';

function Navbar(){
    return (
        <nav className={styles.navContainer}>
            <div className={styles.background}>
                <div className={styles.logo}>
                    <Link to="/">
                        <p>Solo<span>Games</span></p>
                    </Link>
                </div>
            </div>
            <div className={styles.links}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    <p>Home</p>
                </Link>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    <p>Games</p>
                </Link>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    <p>Comming Soon</p>
                </Link>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    <p>How it Works?</p>
                </Link>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    <p>Blog</p>
                </Link>
            </div>

        <div className={styles.btnDiv}>
            <Link to="/">
                <FilledButton text={'Login'} padding={"7px 20px"} fontSize={'14px'} cursor={"pointer"} fontWeight={"bold"} border={"1px solid"} borderRadius={"10px"} />
            </Link>
            
            <Link to="/">
                <FilledButton text={'Sign up'} padding={"7px 20px"} fontSize={'14px'} cursor={"pointer"} fontWeight={"bold"} border={"1px solid"} borderRadius={"10px"} />
            </Link>
           
        </div>
    </nav>
)
}

export default Navbar;