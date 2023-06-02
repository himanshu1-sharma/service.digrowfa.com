import React from 'react'
import Experienced_Professionals from "../../img/icons/Experienced_Professionals.svg"
import Top_notch_Solutions from "../../img/icons/top_notch.svg"
import achieve_online_growth_goals from "../../img/icons/achieve.svg"
import service from "../../img/outsourcing/service.svg"
import Cost_savings from "../../img/outsourcing/Cost_savings.svg"
import Access_expertise from "../../img/outsourcing/Access_expertise.svg"
import Increased_efficiency from "../../img/outsourcing/Increased_efficiency.svg"
import Scalability from "../../img/outsourcing/Scalability.svg"
import Improved_quality from "../../img/outsourcing/Improved_quality.svg"
import CommonForm from '../Includes/CommonForm/CommonForm'
import { Link } from "react-scroll";


const OutsourcingBody = () => {
    return (
        <>
            <section className='container-fluid p-0'>
                <div className='teamBg'>
                    <div className='container'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-9'>
                                <div className='teamContent'>
                                    <h4>our team</h4>
                                    <p>Our team of experienced professionals is committed to providing you with top-notch solutions to help you achieve your online growth goals. We offer a range of outsourcing services that cover various areas of Product Development digital marketing, including SEO, PPC, social media management, content creation, email marketing, and more.Our team of experienced professionals is committed to providing you with top-notch solutions to help you achieve your online growth goals. We offer a range of outsourcing services that cover various areas of Product Development digital marketing, including SEO, PPC, social media management, content creation, email marketing, and more.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='teamCard one'>
                                    <div className='teamIcon'>
                                        <img src={Experienced_Professionals} alt="Experienced_Professionals" className='img-fluid' />
                                    </div>
                                    <div className='teamName'>
                                        <h4>Experienced Professionals</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='teamCard two'>
                                    <div className='teamIcon'>
                                        <img src={Top_notch_Solutions} alt="Top_notch_Solutions" className='img-fluid' />
                                    </div>
                                    <div className='teamName'>
                                        <h4>Top-notch
                                            Solutions</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='teamCard three'>
                                    <div className='teamIcon'>
                                        <img src={achieve_online_growth_goals} alt="achieve_online_growth_goals" className='img-fluid' />
                                    </div>
                                    <div className='teamName'>
                                        <h4>achieve online
                                            growth goals</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='freeConsultation text-center'>
                                    <Link to="outsourcingForm" spy={true} smooth={true} offset={0} duration={500}>
                                        <button>Get Free Consultation</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid p-0'>
                <div className='outsourcingServiceBg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='outsourcingServiceImg'>
                                    <img src={service} alt="service" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='outsourcingServiceContent'>
                                    <h4>With our <span>outsourcing</span> services</h4>
                                    <p>you can rest assured that you're getting the best value for your money. Our team is dedicated to delivering quality work that meets and exceeds your expectations. We provide comprehensive reports to keep you updated on the progress of your projects, and our communication channels are always open to ensure that we're on the same page throughout the entire process.</p>
                                    <div className='freeConsultation'>
                                        <Link to="outsourcingForm" spy={true} smooth={true} offset={0} duration={500}>
                                            <button>Get Free Consultation</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid p-0'>
                <div className='outsourcingBenefitsBg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='outsourcingBenefitsTitle'>
                                    <h2>benefits of <span>outsourcing</span> your online growth
                                        solutions to us</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='outsourcingBenefitsContent'>
                                    <img src={Cost_savings} alt="Cost_savings" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='outsourcingBenefitsContent'>
                                    <h4>Cost savings</h4>
                                    <p>Outsourcing allows you to save on costs associated with hiring and training in-house staff. You'll only pay for the services you need, when you need them.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id="order2">
                                <div className='outsourcingBenefitsContent'>
                                    <h4>Access to expertise</h4>
                                    <p>Our team of experts has extensive experience in Online Solutions providers and can provide you with the knowledge and skills you need to grow your online presence.</p>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id="order1">
                                <div className='outsourcingBenefitsContent two'>
                                    <img src={Access_expertise} alt="Access_expertise" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='outsourcingBenefitsContent'>
                                    <img src={Increased_efficiency} alt="Increased_efficiency" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='outsourcingBenefitsContent'>
                                    <h4>Increased efficiency</h4>
                                    <p>Outsourcing frees up your time and resources so that you can focus on other important aspects of your business.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id="order2">
                                <div className='outsourcingBenefitsContent'>
                                    <h4>Scalability</h4>
                                    <p>Our outsourcing services are designed to be flexible, allowing you to scale up or down as your business needs change.</p>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id="order1">
                                <div className='outsourcingBenefitsContent two'>
                                    <img src={Scalability} alt="Scalability" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='outsourcingBenefitsContent'>
                                    <img src={Improved_quality} alt="Improved_quality" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='outsourcingBenefitsContent'>
                                    <h4>Improved quality</h4>
                                    <p>Our team is committed to delivering quality work that meets your standards and exceeds your expectations.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-9'>
                                <div className='outsourcingBenefitsParagraph'>
                                    <p>At Digrowfa, we take pride in our outsourcing services and the value we bring to our clients. Contact us today to learn more about how we can help you achieve your online growth goals through our outsourcing services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="outsourcingForm">
                <section className='container-fluid p-0'>
                    <div className='outsourcingFormBg'>
                        <div className='container'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-lg-8'>
                                    <div className='outsourcingForm'>
                                        <CommonForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default OutsourcingBody