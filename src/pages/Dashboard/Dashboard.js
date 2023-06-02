import React, { useEffect } from 'react'
import "./Dashboard.css"
import { UserState } from '../../Context'
import { useNavigate } from 'react-router-dom'
import Navigation from './Includes/Navigation/Navigation'

const Dashboard = () => {
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
                    <div className='container dashboardContentBg'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='dashboardTitle'>
                                    <h2>Dashboard</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard