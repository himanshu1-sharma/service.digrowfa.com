import React from 'react'
import location from '../../../img/icons/location.svg'
import call from '../../../img/icons/call.svg'
import mail from '../../../img/icons/mail.svg'
import "./ContactForm.css"

import CommonForm from '../CommonForm/CommonForm'

const ContactForm = () => {
    return (
        <>
            <section className='container-fluid p-0'>
                <div className='formBg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                <div className='formContent'>
                                    <h4>Get in touch</h4>
                                    <div className='addressContentBox'>
                                        <div className='addressIconBox'>
                                            <div className='addressIcon'>
                                                <img src={location} alt="location" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className='addressContent'>
                                            <h5>Address</h5>
                                            <p>S-193, FIRST FLOOR SCHOOL BLOCK, SHAKARPUR, Laxmi Nagar, Delhi 110092</p>
                                        </div>
                                    </div>

                                    <a href="tel:7065066005">
                                        <div className='addressContentBox'>
                                            <div className='addressIconBox'>
                                                <div className='addressIcon'>
                                                    <img src={call} alt="call" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className='addressContent'>
                                                <h5>Call Us</h5>
                                                <p>+91 7065066005</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="mailto:service@digrowfa.com">
                                        <div className='addressContentBox'>
                                            <div className='addressIconBox'>
                                                <div className='addressIcon'>
                                                    <img src={mail} alt="mail" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className='addressContent'>
                                                <h5>E-mail</h5>
                                                <p>service@digrowfa.com</p>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>
                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                <CommonForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm