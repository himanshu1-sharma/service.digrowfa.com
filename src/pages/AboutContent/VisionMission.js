import React from 'react'
import mission from "../../img/about/mission.svg"
import vision from "../../img/about/vision.svg"

const VisionMission = () => {
    return (
        <>
            <section className='container-fluid p-0'>
                <div className='visionMissionBg mission'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='aboutContent '>
                                    <h4>Our <br /> <span>Mission</span></h4>
                                    <p>Our mission is to empower businesses with the tools and knowledge they need to succeed in the digital age. We believe that every company has the potential to thrive online, and we are committed to providing the support and guidance necessary to make that a reality. By offering a wide range of services, including Product Development, search engine optimization (SEO), social media management, content creation, and more, we help businesses maximize their online visibility and drive traffic, leads, and sales.</p>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='missionImg'>
                                    <img src={mission} alt="digrowfa service mission" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='visionMissionBg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='visionImg'>
                                    <img src={vision} alt="digrowfa service vision" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='aboutContent '>
                                    <h4>Our <br /> <span>Vision</span></h4>
                                    <p>Our vision is to be the leading online growth solution provider in the industry, recognized for our innovative strategies, exceptional customer service, and proven track record of success. We strive to be a trusted partner for businesses, helping them navigate the complex world of digital marketing and achieve their online growth goals with confidence and ease.
                                        At Digrowfa, we are committed to delivering exceptional results for our clients, and we measure our success by their success. We believe in building strong, long-lasting relationships with our clients, and we work tirelessly to ensure that every project is executed with the utmost care and attention to detail. With a focus on continuous learning and improvement, we stay ahead of the curve and ensure that our clients always have access to the latest and most effective digital marketing strategies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VisionMission