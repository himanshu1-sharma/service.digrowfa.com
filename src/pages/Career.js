import React from 'react'
import Header from './CareerContent/Header'
import Navigation from './Includes/Navigation/Navigation'
import ContactForm from "./Includes/ContactForm/ContactForm"
import JobCard from './CareerContent/JobCard'

const Career = () => {
    return (
        <>
            <Navigation />
            <Header />
            <JobCard />
            <ContactForm />
        </>
    )
}

export default Career