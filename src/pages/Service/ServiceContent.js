import React, { useState, useEffect, useRef } from 'react'
import './Service.css'
import { Link } from "react-scroll";
import ReactPlayer from 'react-player';
import { BASEURL } from "../../Constant"
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import ParticleBackground from 'react-particle-backgrounds'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Comment } from 'react-loader-spinner'
import Form from 'react-bootstrap/Form';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Navigation from '../Includes/Navigation/Navigation'


const ServiceContent = () => {

    const [data, setData] = useState()
    const params = useParams()
    const [getAllQnA, setGetAllQnA] = useState()
    const [loading, setLoading] = useState(false)
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [loading3, setLoading3] = useState(false)
    const [loading4, setLoading4] = useState(false)
    const [loading5, setLoading5] = useState(false)
    const [loading6, setLoading6] = useState(false)
    const [loading7, setLoading7] = useState(false)
    const [isReady, setIsReady] = useState()
    const [isStage, setIsStage] = useState()
    const [businessName, setBusinessName] = useState()
    const [isBusinessName, setIsBusinessName] = useState()
    const [isRole, setIsRole] = useState()
    const [isOnlinePresence, setIsOnlinePresence] = useState()
    const [aboutBusniess, setAboutBusniess] = useState()
    const [isAboutBusniess, setIsAboutBusniess] = useState()
    const [isFormShow, setIsFormShow] = useState(false)
    const [answer1, setAnswer1] = useState()
    const [answer2, setAnswer2] = useState()
    const [answer4, setAnswer4] = useState()
    const [answer5, setAnswer5] = useState()
    const [answer7, setAnswer7] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [activeBusinessName, setActiveBusinessName] = useState(false)
    const [activeBusinessDesc, setActiveBusinessDesc] = useState(false)

    const myDivRef = useRef(null);
    // const [path, setPath] = useState("");
    // const inputRef = useRef(null);
    const [show, setShow] = useState(false)
    // const [QnA, setQnA] = useState([]);
    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const [answers, setAnswers] = useState([]);
    // const pathRefs = useRef([]);

    const fetchData = async () => {
        await Axios.get(`${BASEURL}api/category-detail/${params.id}`)
            .then(data => {
                setData(data.data.data[0])
            })
    }

    useEffect(() => {
        fetchData()
        // const scroll1 = window.addEventListener("scroll", handleScroll);
        // return () => window.removeEventListener(scroll1);
    }, []);

    // const handleScroll = () => {
    //     const scrollPosition = window.scrollY;
    //     updateDrawing(scrollPosition);
    // };

    // const updateDrawing = (scrollPosition) => {
    //     pathRefs.current.forEach((pathRef, i) => {
    //         const pathLength = pathRef.getTotalLength();
    //         const pathOffset = scrollPosition * pathLength / window.innerHeight;
    //         pathRef.setAttribute("stroke-dasharray", pathLength);
    //         pathRef.setAttribute("stroke-dashoffset", pathLength - pathOffset);
    //     });
    // };

    console.log("data", data)
    const conversationAnimation = {
        particle: {
            particleCount: 150,
            color: "#fff",
            minSize: 1,
            maxSize: 4
        },
        velocity: {
            minSpeed: 0.2,
            maxSpeed: 0.4
        },
        opacity: {
            minOpacity: 0,
            maxOpacity: 0.6,
            opacityTransitionTime: 10000
        }
    }

    const startConversation = async () => {
        setShow(true)
        try {
            setLoading(true);
            setTimeout(async () => {
                await Axios.get(`${BASEURL}api/question-answers/getAllQnA`)
                    .then(data => {
                        setGetAllQnA(data.data.data[0])
                        setLoading(false);
                    })

            }, 2000);


        } catch (error) {
            console.log(error.message)
        }
    }

    const ready = async (e) => {
        try {
            myDivRef.current.scrollTop = myDivRef.current.scrollHeight
            setLoading1(true);
            setTimeout(async () => {
                setIsReady(getAllQnA)
                setLoading1(false)

            }, 2000);
            setAnswer1(e.target.innerText)
            setActive(true)

        } catch (error) {
            console.log(error.message)
        }
    }

    const stage = async (e) => {
        try {
            myDivRef.current.scrollTop = myDivRef.current.scrollHeight
            setLoading2(true);
            setTimeout(async () => {
                setIsStage(getAllQnA)
                setLoading2(false)

            }, 2000);
            setAnswer2(e.target.innerText)
            setActive1(true)

        } catch (error) {
            console.log(error.message)
        }
    }

    const handleBusinessName = (e) => {
        e.preventDefault()
        try {
            myDivRef.current.scrollTop = myDivRef.current.scrollHeight
            console.log("businessName", businessName)
            if (businessName !== undefined) {
                setLoading3(true);
                setActiveBusinessName(true)
                setTimeout(async () => {
                    setIsBusinessName(getAllQnA)
                    setLoading3(false)

                }, 2000);
            }


        } catch (error) {
            console.log(error.message)
        }

    }

    const role = async (e) => {
        try {
            myDivRef.current.scrollTop = myDivRef.current.scrollHeight
            setLoading4(true);
            setTimeout(async () => {
                setIsRole(getAllQnA)
                setLoading4(false)

            }, 2000);
            setAnswer4(e.target.innerText)
            setActive2(true)


        } catch (error) {
            console.log(error.message)
        }
    }

    const onlinePresence = async (e) => {
        try {
            myDivRef.current.scrollTop = myDivRef.current.scrollHeight
            setLoading5(true);
            setTimeout(async () => {
                setIsOnlinePresence(getAllQnA)
                setLoading5(false)

            }, 2000);
            setAnswer5(e.target.innerText)
            setActive3(true)

        } catch (error) {
            console.log(error.message)
        }
    }

    const handleAboutBusniess = (e) => {
        e.preventDefault()
        try {
            if (aboutBusniess !== undefined) {
                myDivRef.current.scrollTop = myDivRef.current.scrollHeight
                setLoading6(true);
                setActiveBusinessDesc(true)
                setTimeout(() => {
                    setIsAboutBusniess(getAllQnA)
                    setLoading6(false)

                }, 2000);
            }



        } catch (error) {
            console.log(error.message)
        }

    }

    const showForm = (e) => {
        myDivRef.current.scrollTop = myDivRef.current.scrollHeight
        setLoading7(true)
        setTimeout(() => {
            setIsFormShow(true)
            setLoading7(false)


        }, 2000);
        setAnswer7(e.target.innerText)
        setActive4(true)
    }



    const handleChatData = async (e) => {
        e.preventDefault()
        // console.log("categoryId", params?.id)
        // console.log("categoryName", params?.name)
        // console.log("question1", getAllQnA?.question1?.question)
        // console.log("answer1", answer1)
        // console.log("question2", getAllQnA?.question2?.question)
        // console.log("answer2", answer2)
        // console.log("question3", getAllQnA?.question3?.question)
        // console.log("answer3", businessName)
        // console.log("question4", getAllQnA?.question4?.question)
        // console.log("answer4", answer4)
        // console.log("question5", getAllQnA?.question5?.question)
        // console.log("answer5", answer5)
        // console.log("question6", getAllQnA?.question6?.question)
        // console.log("answer6", aboutBusniess)
        // console.log("question7", getAllQnA?.question7?.question)
        // console.log("answer7", answer7)
        // console.log("name", name)
        // console.log("email", email)
        // console.log("number", number)
        // console.log("whatsapp", whatsapp)

        await Axios.post(`${BASEURL}api/conversation/add-user-conversation`, {
            categoryId: params?.id,
            categoryName: params?.name,
            q1Question: getAllQnA?.question1?.question,
            q1Answer: answer1,
            q2Question: getAllQnA?.question2?.question,
            q2Answer: answer2,
            q3Question: getAllQnA?.question3?.question,
            q3Answer: businessName,
            q4Question: getAllQnA?.question4?.question,
            q4Answer: answer4,
            q5Question: getAllQnA?.question5?.question,
            q5Answer: answer5,
            q6Question: getAllQnA?.question6?.question,
            q6Answer: aboutBusniess,
            q7Question: getAllQnA?.question7?.question,
            q7Answer: answer7,
            name: name,
            email: email,
            number: number,
            whatsapp: whatsapp

        })
            .then(
                window.open("https://wa.me/+919555271705?text=Hello Digrowfa Service", "_blank")
                // navigate("/")
            )

    }


    return (
        <>
            <section className='container-fluid serviceExplore p-0'>
                <Navigation />

                {/* ========header====== */}
                <div className='serviceExploreBg' style={{ backgroundImage: `url(${data?.header?.video})` }}>

                    {/* <div className='serviceHeaderVideo'>
                                        <ReactPlayer
                                            url={headerVideo}
                                            playing={true}
                                            loop={true}
                                            muted={true}
                                        />
                                    </div> */}
                    <div className='servideHeaderOverlay'>
                        <div className='container'>
                            <div className='categorySvg svgOne'>
                                {/* <svg width="1329" height="743" viewBox="0 0 1329 743" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        ref={(ref) => (pathRefs.current[0] = ref)}
                                        d="M1027 10H1219C1274.23 10 1319 54.7715 1319 110V495C1319 550.228 1274.23 595 1219 595H110C54.7715 595 10 639.772 10 695V743"
                                        stroke="white"
                                        stroke-width="20"
                                    />
                                </svg> */}

                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='serviceHeaderContent'>
                                        <h1>{data?.categoryId?.name}</h1>
                                        <h3>{data?.header?.subtitle}</h3>
                                        <p>{data?.header?.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ======en=========== */}

                {/* =======section 2======= */}
                <div className='serviceExploreSection2' style={{ backgroundColor: `${data?.theme}` }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='section2Content'>
                                    <div className='section2ContentBox one'>
                                        <h4>{data?.overview?.titleOne}</h4>
                                        <p>{data?.overview?.descriptionOne}</p>
                                    </div>
                                    <div className='section2ContentBox two'>
                                        <h4>{data?.overview?.titleTwo}</h4>
                                        <p>{data?.overview?.descriptionTwo}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='section2ContentImg'>
                                    <img src={data?.overview?.overviewImage} alt="girl" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =======end======= */}
                {/* =======section 3======= */}
                <div className='serviceExploreSection3' style={{ backgroundImage: `url(${data?.company?.companyImage})` }}>
                    <div className='container'>
                        {/* <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='title'>
                                    <h2>{data?.company?.companyTitle}</h2>
                                </div>
                            </div>
                        </div> */}
                        <div className='row d-flex justify-content-between'>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='section3Content'>
                                    <div className='section3ContentBox one'>
                                        <h4>{data?.company?.aboutTitle}</h4>
                                        <p>{data?.company?.aboutDescription}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='section3ContentBox two'>
                                    <h4>{data?.company?.serviceTitle}</h4>
                                    <p>{data?.company?.serviceDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =======end======= */}
                {/* =======section 4======= */}
                <div className='serviceExploreSection4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='workingprocessTitle'>
                                    <h2>{data?.workingprocess?.title}</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-8'>
                                <div className='workingProcessSteps'>
                                    <VerticalTimeline>
                                        {data?.workingprocess?.setps.map((curStep, index) => {
                                            return (
                                                <>
                                                    <VerticalTimelineElement
                                                        className="vertical-timeline-element--work"
                                                    >
                                                        <div className='stepsNumber'>0{index + 1}</div>
                                                        <div className='stepName'>{curStep}</div>
                                                    </VerticalTimelineElement>
                                                </>
                                            )
                                        })}

                                    </VerticalTimeline>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =======end======= */}

                {/* =======section 5======= */}
                <div className='serviceExploreSection5' style={{ backgroundColor: `${data?.theme}` }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='section3Content'>
                                    <div className='section3ContentBox section5ContentBox one'>
                                        <h4>{data?.result?.title}</h4>
                                        <p>{data?.result?.description}</p>

                                    </div>

                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='section2ContentImg'>
                                    <img src={data?.result?.resultImage} alt="boy" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =======end======= */}

                {/* =========lets start===== */}

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='startContent'>
                                <h2>Let's Start Your Online Growth Journey Together </h2>
                                <div className='startBtn'>
                                    <Link to="conversation" spy={true} smooth={true} offset={0} duration={500}>
                                        <button onClick={startConversation}>START NOW</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =======end======== */}

                {/* =====conversation======= */}


                <div id="conversation">
                    <section className='container-fluid p-0'>
                        <div className='conversationBg' style={{ height: show ? "100vh" : 0 }}>
                            <div className='container'>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                        <div ref={myDivRef} className='conversationBox'>
                                            <form>
                                                {loading ?
                                                    <Comment
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        ariaLabel="comment-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass="comment-wrapper"
                                                        color="#fff"
                                                        backgroundColor="#1074E2"
                                                    />
                                                    :
                                                    <>
                                                        {getAllQnA?.question1?.question ?
                                                            <div className='question'>
                                                                <div className='messageBox'>
                                                                    <p>{getAllQnA?.question1?.question}</p>
                                                                </div>
                                                            </div>
                                                            :
                                                            ""
                                                        }
                                                        {getAllQnA?.question1?.suggestions.map(curTxt => {
                                                            return (
                                                                <>
                                                                    <div className='suggestions' style={{ border: `1px solid ${data?.theme}`, color: `${data?.theme}` }}> <FontAwesomeIcon icon={faCircleInfo} /> {curTxt}</div>
                                                                </>
                                                            )
                                                        })}
                                                        {!active ?
                                                            <>
                                                                {getAllQnA?.question1?.answer.map((curTxt, e) => {
                                                                    return (
                                                                        <>
                                                                            <div className='answer'>
                                                                                <div className='messageBox' onClick={ready}>
                                                                                    <p>{curTxt}</p>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })}
                                                            </>
                                                            :

                                                            <div className='answer'>
                                                                <div className='messageBox'>
                                                                    <p>{answer1}</p>
                                                                </div>
                                                            </div>
                                                        }


                                                    </>

                                                }

                                                {loading1 ?
                                                    <Comment
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        ariaLabel="comment-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass="comment-wrapper"
                                                        color="#fff"
                                                        backgroundColor="#1074E2"
                                                    />
                                                    :
                                                    <>
                                                        {isReady?.question2?.question ?

                                                            <div className='question'>
                                                                <div className='messageBox'>
                                                                    <p>{isReady?.question2?.question}</p>
                                                                </div>
                                                            </div>
                                                            :
                                                            ""}
                                                        {isReady?.question2?.suggestions.map(curTxt => {
                                                            return (
                                                                <>
                                                                    <div className='suggestions' style={{ border: `1px solid ${data?.theme}`, color: `${data?.theme}` }}> <FontAwesomeIcon icon={faCircleInfo} /> {curTxt}</div>
                                                                </>
                                                            )
                                                        })}
                                                        {!active1 ?
                                                            <>
                                                                {isReady?.question2?.answer.map((curTxt, e) => {
                                                                    return (
                                                                        <>
                                                                            <div className='answer'>
                                                                                <div className='messageBox' onClick={stage}>
                                                                                    <p>{curTxt}</p>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })}
                                                            </>
                                                            :

                                                            <div className='answer'>
                                                                <div className='messageBox'>
                                                                    <p>{answer2}</p>
                                                                </div>
                                                            </div>

                                                        }


                                                    </>

                                                }


                                                {loading2 ?
                                                    <Comment
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        ariaLabel="comment-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass="comment-wrapper"
                                                        color="#fff"
                                                        backgroundColor="#1074E2"
                                                    />
                                                    :
                                                    <>
                                                        {isStage?.question3?.question ?

                                                            <div className='question'>
                                                                <div className='messageBox'>
                                                                    <p>{isStage?.question3?.question}</p>
                                                                </div>
                                                            </div>
                                                            :
                                                            ""}
                                                        {!activeBusinessName ?
                                                            <>
                                                                {isStage ?
                                                                    <div className='answer'>
                                                                        <div className='messageBox'>
                                                                            <input
                                                                                type="text"
                                                                                placeholder="Business Name"
                                                                                id="businessName"
                                                                                name="businessName"
                                                                                value={businessName}
                                                                                onChange={(e) => setBusinessName(e.target.value)}
                                                                            />
                                                                            <button onClick={handleBusinessName} style={{ backgroundColor: `${data?.theme}` }}>
                                                                                <FontAwesomeIcon icon={faCheck} />
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                    :

                                                                    ""

                                                                }
                                                            </>
                                                            :
                                                            <div className='answer'>
                                                                <div className='messageBox'>
                                                                    <p>{businessName}</p>
                                                                </div>
                                                            </div>
                                                        }


                                                    </>

                                                }

                                                {loading3 ?
                                                    <Comment
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        ariaLabel="comment-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass="comment-wrapper"
                                                        color="#fff"
                                                        backgroundColor="#1074E2"
                                                    />
                                                    :
                                                    <>
                                                        {isBusinessName?.question4?.question ?

                                                            <div className='question'>
                                                                <div className='messageBox'>
                                                                    <p>{isBusinessName?.question4?.question}</p>
                                                                </div>
                                                            </div>
                                                            :
                                                            ""}
                                                        {isBusinessName?.question4?.suggestions.map(curTxt => {
                                                            return (
                                                                <>
                                                                    <div className='suggestions' style={{ border: `1px solid ${data?.theme}`, color: `${data?.theme}` }}><FontAwesomeIcon icon={faCircleInfo} /> {curTxt}</div>
                                                                </>
                                                            )
                                                        })}
                                                        {!active2 ?

                                                            <>
                                                                {isBusinessName?.question4?.answer.map((curTxt, e) => {
                                                                    return (
                                                                        <>
                                                                            <div className='answer'>
                                                                                <div className='messageBox' onClick={role}>
                                                                                    <p>{curTxt}</p>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })}
                                                            </>

                                                            :

                                                            <div className='answer'>
                                                                <div className='messageBox'>
                                                                    <p>{answer4}</p>
                                                                </div>
                                                            </div>
                                                        }


                                                    </>

                                                }

                                                {loading4 ?
                                                    <Comment
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        ariaLabel="comment-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass="comment-wrapper"
                                                        color="#fff"
                                                        backgroundColor="#1074E2"
                                                    />
                                                    :
                                                    <>
                                                        {isRole?.question5?.question ?

                                                            <div className='question'>
                                                                <div className='messageBox'>
                                                                    <p>{isRole?.question5?.question}</p>
                                                                </div>
                                                            </div>
                                                            :
                                                            ""}
                                                        {isRole?.question5?.suggestions.map(curTxt => {
                                                            return (
                                                                <>
                                                                    <div className='suggestions' style={{ border: `1px solid ${data?.theme}`, color: `${data?.theme}` }}><FontAwesomeIcon icon={faCircleInfo} /> {curTxt}</div>
                                                                </>
                                                            )
                                                        })}
                                                        {!active3 ?
                                                            <>
                                                                {isRole?.question5?.answer.map((curTxt, e) => {
                                                                    return (
                                                                        <>
                                                                            <div className='answer'>
                                                                                <div className='messageBox' onClick={onlinePresence}>
                                                                                    <p>{curTxt}</p>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })}
                                                            </>
                                                            :
                                                            <div className='answer'>
                                                                <div className='messageBox'>
                                                                    <p>{answer5}</p>
                                                                </div>
                                                            </div>
                                                        }


                                                    </>

                                                }

                                                {loading5 ?
                                                    <Comment
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        ariaLabel="comment-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass="comment-wrapper"
                                                        color="#fff"
                                                        backgroundColor="#1074E2"
                                                    />
                                                    :
                                                    <>
                                                        {isOnlinePresence?.question6?.question ?

                                                            <div className='question'>
                                                                <div className='messageBox'>
                                                                    <p>{isOnlinePresence?.question6?.question}</p>
                                                                </div>
                                                            </div>
                                                            :
                                                            ""}
                                                        {!activeBusinessDesc ?
                                                            <>
                                                                {isOnlinePresence ?
                                                                    <div className='answer'>
                                                                        <div className='messageBox'>
                                                                            <textarea
                                                                                name="aboutBusniess"
                                                                                id="aboutBusniess"
                                                                                rows="4"
                                                                                cols="3"
                                                                                placeholder='Type here...'
                                                                                value={aboutBusniess}
                                                                                onChange={(e) => setAboutBusniess(e.target.value)}
                                                                            >
                                                                            </textarea>
                                                                            <button onClick={handleAboutBusniess}>
                                                                                <FontAwesomeIcon icon={faCheck} />
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                    :

                                                                    ""

                                                                }
                                                            </>
                                                            :
                                                            <div className='answer'>
                                                                <div className='messageBox'>
                                                                    <p>{aboutBusniess}</p>
                                                                </div>
                                                            </div>
                                                        }


                                                    </>

                                                }

                                                {loading6 ?
                                                    <Comment
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        ariaLabel="comment-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass="comment-wrapper"
                                                        color="#fff"
                                                        backgroundColor="#1074E2"
                                                    />
                                                    :
                                                    <>
                                                        {isAboutBusniess?.question7?.question ?

                                                            <div className='question'>
                                                                <div className='messageBox'>
                                                                    <p>{isAboutBusniess?.question7?.question}</p>
                                                                </div>
                                                            </div>
                                                            :
                                                            ""}
                                                        {isAboutBusniess?.question7?.suggestions.map(curTxt => {
                                                            return (
                                                                <>
                                                                    <div className='suggestions' style={{ border: `1px solid ${data?.theme}`, color: `${data?.theme}` }}><FontAwesomeIcon icon={faCircleInfo} /> {curTxt}</div>
                                                                </>
                                                            )
                                                        })}
                                                        {!active4 ?
                                                            <>
                                                                {isAboutBusniess?.question7?.answer.map((curTxt, e) => {
                                                                    return (
                                                                        <>
                                                                            <div className='answer'>
                                                                                <div className='messageBox' onClick={showForm}>
                                                                                    <p>{curTxt}</p>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })}
                                                            </>

                                                            :

                                                            <div className='answer'>
                                                                <div className='messageBox'>
                                                                    <p>{answer7}</p>
                                                                </div>
                                                            </div>
                                                        }


                                                    </>

                                                }

                                                {loading7 ?
                                                    <Comment
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        ariaLabel="comment-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass="comment-wrapper"
                                                        color="#fff"
                                                        backgroundColor="#1074E2"
                                                    />


                                                    :
                                                    <>
                                                        {isFormShow ?
                                                            <div className='question'>
                                                                <div className='formContent'>
                                                                    <Form.Group className="mb-3">
                                                                        <Form.Control
                                                                            type="text"
                                                                            placeholder="Name"
                                                                            id="name"
                                                                            name="name"
                                                                            value={name}
                                                                            onChange={(e) => setName(e.target.value)}
                                                                        />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-3">
                                                                        <Form.Control
                                                                            type="email"
                                                                            placeholder="Email"
                                                                            id="email"
                                                                            name="email"
                                                                            value={email}
                                                                            onChange={(e) => setEmail(e.target.value)}
                                                                        />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-3">
                                                                        <Form.Control
                                                                            type="number"
                                                                            placeholder="Contact Number"
                                                                            id="number"
                                                                            name="number"
                                                                            value={number}
                                                                            onChange={(e) => setNumber(e.target.value)}
                                                                        />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-3">
                                                                        <Form.Control
                                                                            type="number"
                                                                            placeholder="Whatsapp Number"
                                                                            id="whatsapp"
                                                                            name="whatsapp"
                                                                            value={whatsapp}
                                                                            onChange={(e) => setWhatsapp(e.target.value)}
                                                                        />
                                                                    </Form.Group>
                                                                    <div className='mb-5'>
                                                                        <button type="button" onClick={handleChatData}>Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            ""}
                                                    </>

                                                }
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='snowBg'>
                                <ParticleBackground settings={conversationAnimation} />
                            </div>
                        </div>
                    </section>
                </div>

                {/* =====end======= */}
            </section>

        </>
    )
}

export default ServiceContent