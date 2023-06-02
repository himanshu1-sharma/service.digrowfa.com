import React, { useState } from 'react'
import './Footer.css'
import logo from '../../../img/logo/digrowfaWhiteLogo.png'
import { Link } from 'react-router-dom'
import youtube from '../../../img/icons/youtube.svg'
import facebook from '../../../img/icons/facebook.svg'
import linkedin from '../../../img/icons/linkedin.svg'
import twitter from '../../../img/icons/twitter.svg'
import instagram from '../../../img/icons/instagram.svg'
import { BASEURL } from '../../../Constant'
import Axios from 'axios'
import SweetAlert from 'react-bootstrap-sweetalert';

const Footer = () => {

    const [email, setEmail] = useState()
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault()
        try {
            Axios.post(`${BASEURL}api/subscribe/subscribe-newsletter`, { email: email })
                .then(data => {
                    if (data.data.errorcode === 0) {
                        setEmail("")
                        setShowAlert(true);
                    }
                    else if (data.data.errorcode === 2) {
                        setEmail("")
                        setShowErrorAlert(true)
                    }
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleHideAlert = () => {
        setShowAlert(false);
        setShowErrorAlert(false)
    };

    return (
        <>
            <SweetAlert
                success
                show={showAlert}
                title="Thank You"
                onConfirm={handleHideAlert}
            >
                <p>For Subscribing to Our Newsletter!</p>
                <br />
                <p>You Will Get the Latest Information On Your Subscription Mail</p>
            </SweetAlert>
            <SweetAlert
                danger
                show={showErrorAlert}
                title="Ohh!"
                onConfirm={handleHideAlert}
            >
                <p>You Already Subscribe to Our News Letter </p>
            </SweetAlert>

            <section className='container-fluid p-0'>
                <div className='footerBg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className='newsletter'>
                                    <h4>Sign up to our newsletter</h4>
                                    <p>Stay up to date with the latest news, announcements, and articles.</p>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className='footerForm'>
                                    <form onSubmit={handleSubscribe}>
                                        <input tpe="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                                        <button>subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className='footerLogo'>
                                    <Link to="/">
                                        <img src={logo} alt="logo" className='img-fluid' />
                                    </Link>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className='footerMenu'>
                                    <ul>
                                        <li>
                                            <Link to='/about'>
                                                about
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/outsourcing'>
                                                outsourcing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/contact-us'>
                                                Contact us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/career'>
                                                career
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container copyright'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className='copyrightLeft'>
                                    <h4>2023. All rights reserved</h4>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className='copyrightRight'>
                                    <ul>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCUkojDbZtwVY1pDtlFkOrdA" target="_blank">
                                                <img src={youtube} alt="youtube" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/DigrowfaServices" target="_blank">
                                                <img src={facebook} alt="facebook" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/digrowfaservices/" target="_blank">
                                                <img src={instagram} alt="instagram" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">
                                                <img src={twitter} alt="twitter" className="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">
                                                <img src={linkedin} alt="linkedin" className="img-fluid" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer

