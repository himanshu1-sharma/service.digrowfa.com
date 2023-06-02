import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Dashboard/Login'
import Home from '../pages/Home'
import ScrollToTop from '../ScrollToTop'
import Service from '../pages/Service'
import Dashboard from '../pages/Dashboard/Dashboard'
import Category from '../pages/Dashboard/Category'
import CategoryDetail from '../pages/Dashboard/CategoryDetail'
import About from '../pages/About'
import Outsourcing from '../pages/Outsourcing'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Career from '../pages/Career'
import EditCategoryDetail from '../pages/Dashboard/DashboardTable/EditCategoryDetail'
import SubscribeNewsletter from '../pages/Dashboard/SubscribeNewsletter'
import UserConversationData from '../pages/Dashboard/UserConversationData'
import ContactData from '../pages/Dashboard/ContactData'
import QuestionAnswer from '../pages/Dashboard/QuestionAnswer'
import JobCategory from '../pages/Dashboard/JobCategory'
import JobList from '../pages/Dashboard/JobList'
import EditJobDetail from '../pages/Dashboard/DashboardTable/EditJobDetail'
import JobDetail from '../pages/CareerContent/JobDetail'
import CareerApplication from '../pages/Dashboard/CareerApplication'

const Routers = () => {
    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/outsourcing" element={<Outsourcing />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/service/:name/:id" element={<Service />} />
                    <Route path="/career/:name/:id" element={<JobDetail />} />

                    {/* ==============dashboard=============== */}

                    <Route path="/admin/login" element={<Login />} />
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/subscribe-newsletter" element={<SubscribeNewsletter />} />
                    <Route path="/admin/user-conversation" element={<UserConversationData />} />
                    <Route path="/admin/contact-data" element={<ContactData />} />
                    <Route path="/admin/category" element={<Category />} />
                    <Route path="/admin/category-detail" element={<CategoryDetail />} />
                    <Route path="/admin/edit-category-detail/:id" element={<EditCategoryDetail />} />
                    <Route path="/admin/question-answer" element={<QuestionAnswer />} />
                    <Route path="/admin/job-category" element={<JobCategory />} />
                    <Route path="/admin/job-list" element={<JobList />} />
                    <Route path="/admin/edit-job-detail/:id" element={<EditJobDetail />} />
                    <Route path="/admin/career-applications" element={<CareerApplication />} />

                </Routes>
            </ScrollToTop>
        </>
    )
}

export default Routers