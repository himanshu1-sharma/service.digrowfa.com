import React, { useState, useEffect } from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import TextTransition, { presets } from "react-text-transition";
import { Link } from "react-scroll";
import arrow from '../../img/icons/arrowUp.png'
import { BASEURL } from "../../Constant"
import Axios from 'axios';
import Navigation from '../Includes/Navigation/Navigation';
import BackgorundParticlesAnimation from '../Includes/BackgorundParticlesAnimation/BackgorundParticlesAnimation';

const HomeContent = () => {
    const [data, setData] = useState()
    const [TEXTS, setTEXTS] = useState([]);
    const [index, setIndex] = React.useState(0);
    // const TEXTS = [
    //     "Forest",
    //     "Building",
    //     "Tree",
    //     "Color"
    // ];
    const fetchData = async () => {
        try {
            await Axios.get(`${BASEURL}api/category/get-all-category`)
                .then(data => {
                    setData(data.data.data)
                    setTEXTS(
                        data.data.data.map(text => {
                            return text.name
                        })
                    )
                })
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchData()

        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <section className='container-fluid p-0'>
                <div className='homeHeaderBg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                {/* <div className='homeLogo'>
                                    <NavLink to="/">
                                        <img src={logo} alt="digrowfa_logo" className="img-fluid" />
                                    </NavLink>
                                </div> */}
                                <Navigation />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='homeHeaderContent'>
                                    <h1>
                                        are your ready to start your <br />
                                        <div className='homeHeaderText'>
                                            <TextTransition springConfig={presets.wobbly}>
                                                {TEXTS[index % TEXTS.length]}
                                            </TextTransition> journey?
                                        </div>
                                    </h1>
                                    <p>10x your online business growth</p>
                                    <div className='homeHeaderButton'>
                                        <Link to="categoryCards" spy={true} smooth={true} offset={0} duration={500}>
                                            <button><img src={arrow} alt="arrow" className='img-fluid' /></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <BackgorundParticlesAnimation />
                </div>
            </section>

            <section className='container-fluid p-0'>
                <div className='categoryCardBg' id="categoryCards">
                    <div className='container'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='categoryCardList'>
                                    <h2>solution we provide</h2>
                                    <ul>
                                        {data && data.map(curElt => {
                                            const urlName = curElt?.name
                                            const urlTrimName = urlName.replace(/ /g, '')
                                            return (
                                                <>
                                                    <li key={curElt?._id}>
                                                        <NavLink to={`/service/${urlTrimName}/${curElt?._id}`}>
                                                            <div className='categoryCardBox' >
                                                                <img src={curElt?.image} alt={curElt?.name} className='img-fluid' />
                                                                <h4>{curElt?.name}</h4>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeContent