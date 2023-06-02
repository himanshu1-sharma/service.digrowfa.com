import React, { useEffect } from 'react'
import "./Dashboard.css"
import { UserState } from '../../Context'
import { useNavigate } from 'react-router-dom'
import Navigation from './Includes/Navigation/Navigation'
import QuestionAnswerTable from "./DashboardTable/QuestionAnswerTable"

const QuestionAnswer = () => {

    const { user } = UserState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (!user.token) {
            navigate('/admin/login')
        }
    }, [user])

    return (
        <>
            <Navigation />
            <section className='container-fluid p-0'>
                <div className='dashboardBg'>
                    <div className='dashboardContentBg'>
                        <div className='row'>
                            <div className='col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12'></div>
                            <div className='col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12'>
                                <div className='dashboardTitle'>
                                    <h2>Question Answer</h2>
                                </div>
                                <div className='dashboardTable'>
                                    <QuestionAnswerTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuestionAnswer