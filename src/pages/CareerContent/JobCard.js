import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faClock, faLocationDot, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
import { BASEURL } from '../../Constant'

const JobCard = () => {

    const [data, setData] = useState()

    const fetchData = async () => {
        await Axios.get(`${BASEURL}api/job-detail/get-all-job`)
            .then(data => {
                setData(data.data.data)
            })
    }


    console.log("data", data)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className='container-fluuid p-0'>
            <div className='jobCardBg'>
                <div className='container'>
                    <div className='row  d-flex justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='jobTitle'>
                                <h2>We Are Growing Fast and Looking for Amazing <span>Team Members!</span></h2>
                                <p>At Digrowfa Tech, we believe in a simple work philosophy— “We want to grow, and we want you to grow.” With us, you always have opportunities for growth in your career, level of work, and skills. Explore our open job positions and apply now to join the team on a mission!</p>
                            </div>
                        </div>
                    </div>

                    <div className='row d-flex justify-content-center'>
                        {data && data.map(curElt => {
                            const title = curElt.title.replace(/ /g, '')
                            return (
                                <>
                                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                        <div className='jobCard'>
                                            {curElt.isUrgent &&
                                                <div className='urgent'>
                                                    <span>Urgent</span>
                                                </div>
                                            }

                                            <div className='jobNameBox'>
                                                {curElt.title ? <h4>{curElt.title}</h4> : ""}
                                                {curElt.minExperience && curElt.maxExperience ? <span>{curElt.minExperience}-{curElt.maxExperience} YEARS OF EXPERIENCE</span> : ""}
                                            </div>
                                            <div className='jobTypeList'>
                                                <ul>
                                                    <li>
                                                        {curElt.category ? <><FontAwesomeIcon icon={faIdCard} /> {curElt.category?.name}</> : ""}

                                                    </li>
                                                    <li>
                                                        {curElt.jobType ? <><FontAwesomeIcon icon={faClock} /> {curElt.jobType}</> : ""}

                                                    </li>
                                                    <li>
                                                        {curElt.workType ? <><FontAwesomeIcon icon={faBriefcase} /> {curElt.workType}</> : ""}

                                                    </li>
                                                    <li>
                                                        {curElt.location ? <><FontAwesomeIcon icon={faLocationDot} /> {curElt.location}</> : ""}

                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='jobSkills'>
                                                <ul>
                                                    {curElt.skills ?

                                                        <>
                                                            {curElt.skills?.map(curSkill => {
                                                                return (
                                                                    <>
                                                                        <li>{curSkill}</li>
                                                                    </>
                                                                )
                                                            })}
                                                        </>

                                                        :

                                                        ""
                                                    }
                                                </ul>
                                            </div>
                                            <div className='jobDetailBox'>
                                                <ul>
                                                    <li>
                                                        <Link to={`/career/${title}/${curElt?._id}`}>
                                                            <button className="cta">
                                                                <span>View Detail</span>
                                                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                                                    <path d="M1,5 L11,5"></path>
                                                                    <polyline points="8 1 12 5 8 9"></polyline>
                                                                </svg>
                                                            </button>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}


                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobCard