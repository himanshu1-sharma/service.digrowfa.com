import React from 'react'
import BackgorundParticlesAnimation from '../BackgorundParticlesAnimation/BackgorundParticlesAnimation'
import './CommonHeader.css'

const CommonHeader = ({ title, description, span }) => {
    return (
        <>
            <section className='container-fluid p-0'>
                <div className='headerBg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='headerContent'>
                                    <h1>{title}</h1>
                                    <h5>{description}<span>{span}</span></h5>
                                    <div className='downAnimation'>
                                        <div></div>
                                        <span>SCROLL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BackgorundParticlesAnimation />
                </div>
            </section>
        </>
    )
}

export default CommonHeader