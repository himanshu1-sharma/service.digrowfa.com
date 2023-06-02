import React from 'react'
import Header from './ContactContent/Header'
import MapLocation from './ContactContent/MapLocation'
import ContactForm from './Includes/ContactForm/ContactForm'
import Navigation from './Includes/Navigation/Navigation'

const Contact = () => {
    return (
        <>
            <Navigation />
            <Header />
            <MapLocation />
            <ContactForm />
        </>
    )
}

export default Contact