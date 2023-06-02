import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../../img/logo/digrowfaWhiteLogo.png"
import './Navigation.css'
import LeftPanel from '../LeftPanel/LeftPanel'

const Navigation = () => {
    const [active, setActive] = useState(true);
    return (
        <>
            <div className='dashboardNavigation'>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={logo} alt="logo" className="img-fluid" />
                        </Link>
                    </li>
                    <li>
                        <div className="mobile-menu" onClick={() => setActive(!active)}>
                            <div className={active ? 'menu_click active' : 'menu_click'}>
                                <div id="top"></div>
                                <div id="middle"></div>
                                <div id="bottom"></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={active ? 'handleLeftPanel active' : 'handleLeftPanel'} >
                <LeftPanel />
            </div>
        </>
    )
}

export default Navigation