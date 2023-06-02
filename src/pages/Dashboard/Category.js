import React, { useEffect } from 'react'
import "./Dashboard.css"
import { UserState } from '../../Context'
import { useNavigate } from 'react-router-dom'
import Navigation from './Includes/Navigation/Navigation'
import CategoryTable from "./DashboardTable/CategoryTable"

const Category = () => {

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
                                    <h2>Category</h2>
                                </div>
                                <div className='dashboardTable'>
                                    <CategoryTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category