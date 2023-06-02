import React, { useState, useEffect, useRef } from 'react'
import './Service.css'
import { Link } from "react-scroll";
import ReactPlayer from 'react-player';
import { BASEURL } from "../../Constant"
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import ParticleBackground from 'react-particle-backgrounds'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const ServiceContent = () => {

    const [data, setData] = useState()
    const params = useParams()
    // const [path, setPath] = useState("");
    const inputRef = useRef(null);
    const [show, setShow] = useState(false)
    const [QnA, setQnA] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
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
    const renderQuestionnaire = async () => {
        setShow(true);
        await Axios.get(`http://localhost:5000/api/question-answers/getAllQnA/?categoryId=63fd9667e3b785cb9863b92c`)
            .then(data => {
                setQnA(data.data.data);
            }).catch(err => {
                console.log(err);
            });
    }

    const handleSelectedAnswer = (event) => {
        const selectedOption = event.target.value;
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = selectedOption;
        setAnswers(newAnswers);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };
    const handleInputChange = () => {
        inputRef.current.value = inputRef.current.value;
    };
    const handleTextAnswer = () => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = inputRef.current.value;
        setAnswers(newAnswers);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        inputRef.current.value = "";
    };


    const renderQuestion = (questionIndex) => {
        const currentQuestion = QnA[questionIndex];
        if (currentQuestion?.answers.length) {
            return (
                <>
                    <div className='question'>
                        <div className='messageBox'>{currentQuestion?.question}</div>
                    </div>



                    {currentQuestion?.answers.map((option) => (

                        <label>
                            <div className='answer'>
                                <div className=' messageBox' key={option}>
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestionIndex}`}
                                        value={option}
                                        onChange={handleSelectedAnswer}
                                        hidden
                                    />
                                    {option}
                                </div>
                            </div>
                        </label>



                    ))}
                </>
            );
        } else {
            return (
                <>
                    <div className='question'>
                        <div className='messageBox'>{currentQuestion?.question}</div>
                    </div>
                    <div className='answer'>
                        <div className='messageBox'>
                            <input type="text" ref={inputRef} placeholder="Business Name" onChange={handleInputChange} /><br></br>
                            <button onClick={handleTextAnswer}>
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </div>
                    </div>
                </>
            );
        }
    };


    return (
        <>
            <section className='container-fluid serviceExplore p-0'>

                {/* ========header====== */}
                <div className='serviceExploreBg'>

                    {/* <div className='serviceHeaderVideo'>
                                        <ReactPlayer
                                            url={headerVideo}
                                            playing={true}
                                            loop={true}
                                            muted={true}
                                        />
                                    </div> */}
                    <div className='servideHeaderOverlay' style={{ backgroundImage: `url(${data?.header?.video})` }}>
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
                <div className='serviceExploreSection2'>
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
                        <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='title'>
                                    <h2>{data?.company?.companyTitle}</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='section3Content'>
                                    <div className='section3ContentBox one'>
                                        <h4>{data?.company?.aboutTitle}</h4>
                                        <p>{data?.company?.aboutDescription}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
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
                            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12'>
                                {data?.workingprocess?.setps[0] &&
                                    <div className='section4ContentBox one mt-5'>
                                        <div className='number'>
                                            01
                                        </div>
                                        <div className='content'>
                                            <p>{data?.workingprocess?.setps[0]}</p>
                                        </div>
                                    </div>
                                }
                                {data?.workingprocess?.setps[1] &&
                                    <div className='section4ContentBox two'>
                                        <div className='content'>
                                            <p>{data?.workingprocess?.setps[1]}</p>
                                        </div>
                                        <div className='number'>
                                            02
                                        </div>
                                    </div>
                                }
                                {data?.workingprocess?.setps[2] &&
                                    <div className='section4ContentBox one'>
                                        <div className='number'>
                                            03
                                        </div>
                                        <div className='content'>
                                            <p>{data?.workingprocess?.setps[2]}</p>
                                        </div>
                                    </div>
                                }
                                {data?.workingprocess?.setps[2] &&
                                    <div className='section4ContentBox two'>
                                        <div className='content'>
                                            <p>{data?.workingprocess?.setps[3]}</p>
                                        </div>
                                        <div className='number'>
                                            04
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='section2ContentImg'>
                                    <img src={data?.workingprocess?.workingprocessImage} alt="building" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =======end======= */}

                {/* =======section 5======= */}
                <div className='serviceExploreSection5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='section3Content'>
                                    <div className='section3ContentBox one'>
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
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='startBtn'>
                                    <Link to="conversation" spy={true} smooth={true} offset={0} duration={500}>
                                        <button onClick={renderQuestionnaire}>LET’S START</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =======end======= */}
                {/* =====conversation======= */}

                <div id="conversation">
                    <section className='container-fluid p-0'>
                        <div className='conversationBg' style={{ height: show ? "100vh" : 0 }}>
                            <div className='container'>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-lg-6'>
                                        <div className='conversationBox'>
                                            {currentQuestionIndex > 0 &&
                                                (
                                                    <>
                                                        {Array.from({ length: currentQuestionIndex }).map((_, index) => (
                                                            <>
                                                                <div className='question'>
                                                                    <div className='messageBox'>{QnA[index].question}</div>
                                                                </div>
                                                                <div className='answer'>
                                                                    <div className='messageBox'>{answers[index]}</div>
                                                                </div>
                                                            </>
                                                        ))}
                                                    </>
                                                )}
                                            {renderQuestion(currentQuestionIndex)}
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