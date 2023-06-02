import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faClock, faLocationDot, faBriefcase, faUserGear } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
import { BASEURL } from '../../Constant'
import Navigation from '../Includes/Navigation/Navigation'
import Footer from "../Includes/Footer/Footer"
import { useParams } from 'react-router-dom'
import { Link } from "react-scroll";
import SweetAlert from 'react-bootstrap-sweetalert';
import Form from "react-bootstrap/Form";

const JobDetail = () => {

    const [data, setData] = useState()
    const parmas = useParams()
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [resume, setResume] = useState("")
    const [active, setActive] = useState();

    const stickyPanel = () => {
        let windowHeight = window.scrollY;
        windowHeight > 80 ? setActive("active") : setActive("");
    }

    const fetchData = async () => {
        await Axios.get(`${BASEURL}api/job-detail/job-detail/${parmas.id}`)
            .then(data => {
                setData(data.data.data[0])
            })
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name)
            formData.append("email", email)
            formData.append("number", number)
            formData.append("resume", resume)

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };

            await Axios.post(`${BASEURL}api/career/apply`, formData, config)
                .then(data => {
                    if (data.data.errorcode === 0) {
                        setName("")
                        setEmail("")
                        setNumber("")
                        setResume("")
                        setShowAlert(true);
                    }
                    else if (data.data.errorcode === 2) {
                        setShowErrorAlert(true)
                    }
                })
        } catch (error) {
            console.log(error.message)
        }



    };

    const handleHideAlert = () => {
        setShowAlert(false);
        setShowErrorAlert(false)
    };

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        setResume(file)
    }

    useEffect(() => {
        fetchData()
        window.addEventListener("scroll", stickyPanel);
    }, [])

    return (
        <>
            <Navigation />
            <section className='container-fluid p-0'>
                <div className='jobDetailBg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                <div className={`joDetailLeftPanel ${active}`}>
                                    {data?.isUrgent && <div>Urgent</div>}
                                    <h1>{data?.title}</h1>
                                    <ul>
                                        <li>
                                            {data?.category ? <><FontAwesomeIcon icon={faIdCard} /> <span>{data?.category?.name}</span></> : ""}

                                        </li>
                                        <li>
                                            {data?.jobType ? <><FontAwesomeIcon icon={faClock} /> <span>{data?.jobType}</span></> : ""}

                                        </li>
                                        <li>
                                            {data?.workType ? <><FontAwesomeIcon icon={faBriefcase} /> <span>{data?.workType}</span></> : ""}

                                        </li>
                                        <li>
                                            {data?.location ? <><FontAwesomeIcon icon={faLocationDot} /> <span>{data?.location}</span></> : ""}
                                        </li>
                                        <li>
                                            {data?.minExperience && data?.maxExperience ? <><FontAwesomeIcon icon={faUserGear} /> <span>{data?.minExperience}-{data?.maxExperience} YEARS OF EXPERIENCE</span></> : ""}
                                        </li>
                                    </ul>
                                    <Link to="applicationForm" spy={true} smooth={true} offset={-120} duration={500}>
                                        <button>Apply Now</button>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                <div className='jobDetail'>
                                    {data?.description ? <>

                                        <h4>Description</h4>
                                        <p>{data?.description}</p>

                                    </>
                                        :
                                        ""}

                                    {data?.responsibilities ?
                                        <>
                                            <h4>Responsibilities</h4>
                                            <ul>
                                                {data?.responsibilities.map(curElt => {
                                                    return (
                                                        <>
                                                            <li>{curElt}</li>
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </>

                                        :
                                        ""

                                    }

                                    {data?.qualification ?
                                        <>
                                            <h4>Qualification</h4>
                                            <ul>
                                                {data?.qualification.map(curElt => {
                                                    return (
                                                        <>
                                                            <li>{curElt}</li>
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </>
                                        :
                                        ""

                                    }

                                    {data?.skills ?
                                        <>
                                            <h4>Skills</h4>
                                            <ul>
                                                {data?.skills.map(curElt => {
                                                    return (
                                                        <>
                                                            <li>{curElt}</li>
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </>
                                        :
                                        ""

                                    }
                                </div>
                            </div>
                        </div>

                        <div id="applicationForm">
                            <div className='row d-flex justify-content-center'>
                                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                    <div className='applyTitle'>
                                        <h2>Apply for this Job</h2>
                                    </div>
                                    <SweetAlert
                                        success
                                        show={showAlert}
                                        title="Congratulations"
                                        onConfirm={handleHideAlert}
                                    >
                                        <p>Your Resume successfully submitted  Our Team Will Contact with You soon </p>

                                    </SweetAlert>
                                    <SweetAlert
                                        danger
                                        show={showErrorAlert}
                                        title="Ohh!"
                                        onConfirm={handleHideAlert}
                                    >
                                        <p>You Already Use This Email </p>
                                    </SweetAlert>
                                    <div className="formContent">
                                        <Form>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Full Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Email Address</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Mobile Number</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            id="phone"
                                                            name="phone"
                                                            value={number}
                                                            onChange={(e) => setNumber(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Upload Resume</Form.Label>
                                                        <Form.Control
                                                            type="file"
                                                            name="file"
                                                            id="file"
                                                            onChange={(e) => uploadFileHandler(e)}
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className='text-center'>
                                                        <button type="button" onClick={handleSubmit}>
                                                            Apply Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default JobDetail