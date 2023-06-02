import React from 'react'
import './LeftPanel.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserState } from '../../../../Context'

const LeftPanel = () => {

    const { user, setUser } = UserState()
    const navigate = useNavigate()
    console.log("user", user)

    const handleLogOut = () => {
        setUser({})
        navigate('/admin/login')
    }

    return (
        <>
            <div className='leftPanel'>
                <div className='profileBox'>
                    <div className='profileImg' style={{ backgroundImage: `url(${user?.profilepic})` }}></div>
                    <div className='profileName'>
                        <h2>{user?.name}</h2>
                        <div onClick={handleLogOut} style={{ color: "red", cursor: "pointer" }}>Logout</div>
                    </div>
                </div>
                <div className='leftPanelList'>
                    <ul>
                        <NavLink exact="true" activeclassname="active" to="/admin/dashboard">
                            <li>
                                <div className='leftPanelListName'>Dashboard</div>
                            </li>
                        </NavLink>

                        <NavLink exact="true" activeclassname="active" to="/admin/category">
                            <li>
                                <div className='leftPanelListName'>Category</div>
                            </li>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" to="/admin/category-detail">
                            <li>
                                <div className='leftPanelListName'>Category Detail</div>
                            </li>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" to="/admin/question-answer">
                            <li>
                                <div className='leftPanelListName'>Question Answer</div>
                            </li>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" to="/admin/subscribe-newsletter">
                            <li>
                                <div className='leftPanelListName'>Subscribe Newsletter</div>
                            </li>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" to="/admin/user-conversation">
                            <li>
                                <div className='leftPanelListName'>User Conversation</div>
                            </li>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" to="/admin/contact-data">
                            <li>
                                <div className='leftPanelListName'>Contact Data</div>
                            </li>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" to="/admin/job-category">
                            <li>
                                <div className='leftPanelListName'>Job Category</div>
                            </li>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" to="/admin/job-list">
                            <li>
                                <div className='leftPanelListName'>Job List</div>
                            </li>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" to="/admin/career-applications">
                            <li>
                                <div className='leftPanelListName'>Career Applications</div>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LeftPanel