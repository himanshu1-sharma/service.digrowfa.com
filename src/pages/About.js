import React from 'react'
import Company from './AboutContent/Company'
import Header from './AboutContent/Header'
import VisionMission from './AboutContent/VisionMission'
import Navigation from './Includes/Navigation/Navigation'

const About = () => {
    return (
        <>
            <Navigation />
            <Header />
            <Company />
            <VisionMission />
        </>
    )
}

export default About