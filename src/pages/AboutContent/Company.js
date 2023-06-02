import React from 'react'
import company from '../../img/about/company.svg'

const Company = () => {
    return (
        <>
            <section className='cpntainer-fluid p-0'>
                <div className='companyBg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='companyImg'>
                                    <img src={company} alt="About Our Company" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='aboutContent'>
                                    <h4>About Our <br /> <span>Company.</span></h4>
                                    <p>At Digrowfa, we are dedicated to helping businesses of all sizes achieve their online growth goals through customized and effective digital marketing solutions. Our team of experienced professionals has a deep understanding of the latest industry trends and technologies, allowing us to provide cutting-edge strategies that drive real results for our clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Company