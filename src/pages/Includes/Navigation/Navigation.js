import React, { useState } from 'react'
import './Navigation.css'
import Logo from '../../../img/logo/digrowfaWhiteLogo.png'
import { Link } from 'react-router-dom'

const Navigation = () => {

    const [active, setActive] = useState(false)


    return (
        <>
            <section className='container-fluid'>
                <header className={active ? "header-area open_dropdown" : "header-area"}>
                    <div className="container">
                        <div className="navbar">
                            <Link to="/">
                                <img src={Logo} alt="" className="img-fluid logo" />
                            </Link>
                            <button className={active ? "hum-btn hub-toggle open" : "hum-btn hub-toggle"} onClick={() => setActive(!active)}>
                                <span className="text">MENU</span>
                                <span className="svg-wrap">
                                    <svg className="ham hamRotate ham4" viewBox="0 0 100
                                    100" width="80">
                                        <path className="line top" d="m 70,33 h -40 c
                                        0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796
                                        8.5,8.5 8.5,8.5 h 20 v -20" />
                                        <path className="line middle" d="m 70,50 h
                                            -40" />
                                        <path className="line bottom" d="m 30,67
                                                h 40 c 0,0 8.5,0.149796 8.5,-8.5
                                                0,-8.649796 -8.5,-8.5 -8.5,-8.5
                                                h -20 v 20" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <nav className={active ? "main-nav active" : "main-nav"}>
                        <div className="nav-container">
                            <ul className="navbar-nav">
                                <li className="link-item">
                                    <Link to="/about">
                                        <span className="text">ABOUT</span>
                                    </Link>
                                </li>
                                <li className="link-item">
                                    <Link to="/outsourcing">
                                        <span className="text">Outsourcing</span>
                                    </Link>
                                </li>
                                {/* <li className="link-item">
                                    <Link to="/portfolio">
                                        <span className="text">Portfolio</span>
                                    </Link>
                                </li> */}
                                <li className="link-item">
                                    <Link to="/contact-us">
                                        <span className="text">Contact Us</span>
                                    </Link>
                                </li>
                                <li className="link-item">
                                    <Link to="/career">
                                        <span className="text">Career</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </section>
        </>
    )
}

export default Navigation