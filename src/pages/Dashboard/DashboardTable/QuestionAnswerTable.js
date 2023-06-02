
import React, { useState, useEffect } from "react"
import Axios from 'axios'
import { BASEURL } from '../../../Constant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';





const Table = () => {

    const [data, setData] = useState()
    const [selected, setSelected] = useState()
    const [render, setRender] = useState(false)
    const [editModalShow, setEditModalShow] = React.useState(false);


    const fetchCategory = async () => {
        try {
            await Axios.get(`${BASEURL}api/question-answers/getAllQnA`)
                .then(data => {
                    setData(data.data.data[0])
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleEdit = (e, f) => {
        setEditModalShow(true)
        setSelected(data._id)
    }

    console.log("data", data)


    useEffect(() => {
        if (render) setRender(false)
        fetchCategory()
    }, [render])




    return (
        <>
            <EditCategoryModal
                show={editModalShow}
                onHide={() => setEditModalShow(false)}
                selected={selected}
                setRender={setRender}
            />
            <ToastContainer />
            <div className='tableBtn mt-5 mb-5'>
                <button onClick={handleEdit}>Edit Question & Answer</button>
            </div>
            <div className="qnaBox">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><span>Question 1</span>{data?.question1?.question}</Accordion.Header>
                        <Accordion.Body>
                            {data?.question1?.suggestions?.map((curText, index) => {

                                return (
                                    <>
                                        <div className='suggestions'> <FontAwesomeIcon icon={faCircleInfo} /> {curText}</div>

                                    </>
                                )
                            })}
                            {data?.question1?.answer.map((curAns) => {
                                return (
                                    <>
                                        <div className='messageBox'>
                                            <p>{curAns}</p>
                                        </div>
                                    </>

                                )
                            })}

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><span>Question 2</span>{data?.question2?.question}</Accordion.Header>
                        <Accordion.Body>
                            {data?.question2?.suggestions?.map((curText, index) => {

                                return (
                                    <>
                                        <div className='suggestions'> <FontAwesomeIcon icon={faCircleInfo} /> {curText}</div>

                                    </>
                                )
                            })}
                            {data?.question2?.answer.map((curAns) => {
                                return (
                                    <>
                                        <div className='messageBox'>
                                            <p>{curAns}</p>
                                        </div>
                                    </>

                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><span>Question 3</span>{data?.question3?.question}</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><span>Question 4</span>{data?.question4?.question}</Accordion.Header>
                        <Accordion.Body>
                            {data?.question4?.suggestions?.map((curText, index) => {

                                return (
                                    <>
                                        <div className='suggestions'> <FontAwesomeIcon icon={faCircleInfo} /> {curText}</div>

                                    </>
                                )
                            })}
                            {data?.question4?.answer.map((curAns) => {
                                return (
                                    <>
                                        <div className='messageBox'>
                                            <p>{curAns}</p>
                                        </div>
                                    </>

                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header><span>Question 5</span>{data?.question5?.question}</Accordion.Header>
                        <Accordion.Body>
                            {data?.question5?.suggestions?.map((curText, index) => {

                                return (
                                    <>
                                        <div className='suggestions'> <FontAwesomeIcon icon={faCircleInfo} /> {curText}</div>

                                    </>
                                )
                            })}
                            {data?.question5?.answer.map((curAns) => {
                                return (
                                    <>
                                        <div className='messageBox'>
                                            <p>{curAns}</p>
                                        </div>
                                    </>

                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header><span>Question 6</span>{data?.question6?.question}</Accordion.Header>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header><span>Question 7</span>{data?.question7?.question}</Accordion.Header>
                        <Accordion.Body>
                            {data?.question7?.suggestions?.map((curText, index) => {

                                return (
                                    <>
                                        <div className='suggestions'> <FontAwesomeIcon icon={faCircleInfo} /> {curText}</div>

                                    </>
                                )
                            })}
                            {data?.question7?.answer.map((curAns) => {
                                return (
                                    <>
                                        <div className='messageBox'>
                                            <p>{curAns}</p>
                                        </div>
                                    </>

                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </>
    )
}


export default Table



function EditCategoryModal(props) {
    console.log("props", props)
    const [data, setData] = useState("")
    const [q1Question, setQ1Question] = useState("")
    const [q1Answer, setQ1Answer] = useState("")
    const [q1AnswerData, setQ1AnswerData] = useState("")
    const [q1Suggestions, setQ1Suggestions] = useState("")
    const [q1SuggestionsData, setQ1SuggestionsData] = useState("")
    const [q2Question, setQ2Question] = useState("")
    const [q2Answer, setQ2Answer] = useState("")
    const [q2AnswerData, setQ2AnswerData] = useState("")
    const [q2Suggestions, setQ2Suggestions] = useState("")
    const [q2SuggestionsData, setQ2SuggestionsData] = useState("")
    const [q3Question, setQ3Question] = useState("")
    const [q4Question, setQ4Question] = useState("")
    const [q4Answer, setQ4Answer] = useState("")
    const [q4AnswerData, setQ4AnswerData] = useState("")
    const [q4Suggestions, setQ4Suggestions] = useState("")
    const [q4SuggestionsData, setQ4SuggestionsData] = useState("")
    const [q5Question, setQ5Question] = useState("")
    const [q5Answer, setQ5Answer] = useState("")
    const [q5AnswerData, setQ5AnswerData] = useState("")
    const [q5Suggestions, setQ5Suggestions] = useState("")
    const [q5SuggestionsData, setQ5SuggestionsData] = useState("")
    const [q6Question, setQ6Question] = useState("")
    const [q7Question, setQ7Question] = useState("")
    const [q7Answer, setQ7Answer] = useState("")
    const [q7AnswerData, setQ7AnswerData] = useState("")
    const [q7Suggestions, setQ7Suggestions] = useState("")
    const [q7SuggestionsData, setQ7SuggestionsData] = useState("")

    const fetchCategory = async () => {
        try {
            await Axios.get(`${BASEURL}api/question-answers/getAllQnA`)
                .then(data => {
                    setData(data.data.data[0])
                    setQ1Question(data.data.data[0]?.question1?.question)
                    setQ1Answer(data.data.data[0]?.question1?.answer)
                    setQ1Suggestions(data.data.data[0]?.question1?.suggestions)

                    setQ2Question(data.data.data[0]?.question2?.question)
                    setQ2Answer(data.data.data[0]?.question2?.answer)
                    setQ2Suggestions(data.data.data[0]?.question2?.suggestions)

                    setQ3Question(data.data.data[0]?.question3?.question)

                    setQ4Question(data.data.data[0]?.question4?.question)
                    setQ4Answer(data.data.data[0]?.question4?.answer)
                    setQ4Suggestions(data.data.data[0]?.question4?.suggestions)

                    setQ5Question(data.data.data[0]?.question5?.question)
                    setQ5Answer(data.data.data[0]?.question5?.answer)
                    setQ5Suggestions(data.data.data[0]?.question5?.suggestions)

                    setQ6Question(data.data.data[0]?.question6?.question)

                    setQ7Question(data.data.data[0]?.question7?.question)
                    setQ7Answer(data.data.data[0]?.question7?.answer)
                    setQ7Suggestions(data.data.data[0]?.question7?.suggestions)
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    const handleEditQnASubmit = async (e) => {
        e.preventDefault()
        try {
            await Axios.put(`${BASEURL}api/question-answers/editQnA`, {
                _id: props.selected,
                q1Question: q1Question,
                q1Answer: q1Answer,
                q1Suggestions: q1Suggestions,
                q2Question: q2Question,
                q2Answer: q2Answer,
                q2Suggestions: q2Suggestions,
                q3Question: q3Question,
                q4Question: q4Question,
                q4Answer: q4Answer,
                q4Suggestions: q4Suggestions,
                q5Question: q5Question,
                q5Answer: q5Answer,
                q5Suggestions: q5Suggestions,
                q6Question: q6Question,
                q7Question: q7Question,
                q7Answer: q7Answer,
                q7Suggestions: q7Suggestions
            })
                .then(data => {
                    if (data.data.errorcode === 0) {
                        toast.success(`${data.data.message}`, {
                            position: "bottom-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        props.onHide()
                        props.setRender(true)
                    } else {
                        toast.error(`${data.data.message}`, {
                            position: "bottom-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                })
        } catch (error) {
            console.log(error.message)
        }
    }
    // --------question 1-------
    const handleAddQ1Ans = () => {
        setQ1Answer([...q1Answer, q1AnswerData]);
        setQ1AnswerData("");
    };

    const handleRemoveQ1Ans = (index) => {
        const newAns = [...q1Answer];
        newAns.splice(index, 1);
        setQ1Answer(newAns);
    }

    const handleAddQ1Sug = () => {
        setQ1Suggestions([...q1Suggestions, q1SuggestionsData]);
        setQ1SuggestionsData("");
    };

    const handleRemoveQ1Sug = (index) => {
        const newAns = [...q1Suggestions];
        newAns.splice(index, 1);
        setQ1Suggestions(newAns);
    }

    // ========question 2===============

    const handleAddQ2Ans = () => {
        setQ2Answer([...q2Answer, q2AnswerData]);
        setQ2AnswerData("");
    };

    const handleRemoveQ2Ans = (index) => {
        const newAns = [...q2Answer];
        newAns.splice(index, 1);
        setQ2Answer(newAns);
    }

    const handleAddQ2Sug = () => {
        setQ2Suggestions([...q2Suggestions, q2SuggestionsData]);
        setQ2SuggestionsData("");
    };

    const handleRemoveQ2Sug = (index) => {
        const newAns = [...q2Suggestions];
        newAns.splice(index, 1);
        setQ2Suggestions(newAns);
    }

    // ========question 4===============

    const handleAddQ4Ans = () => {
        setQ4Answer([...q4Answer, q4AnswerData]);
        setQ4AnswerData("");
    };

    const handleRemoveQ4Ans = (index) => {
        const newAns = [...q4Answer];
        newAns.splice(index, 1);
        setQ4Answer(newAns);
    }

    const handleAddQ4Sug = () => {
        setQ4Suggestions([...q4Suggestions, q4SuggestionsData]);
        setQ4SuggestionsData("");
    };

    const handleRemoveQ4Sug = (index) => {
        const newAns = [...q4Suggestions];
        newAns.splice(index, 1);
        setQ4Suggestions(newAns);
    }


    // ========question 5===============

    const handleAddQ5Ans = () => {
        setQ5Answer([...q5Answer, q5AnswerData]);
        setQ5AnswerData("");
    };

    const handleRemoveQ5Ans = (index) => {
        const newAns = [...q5Answer];
        newAns.splice(index, 1);
        setQ5Answer(newAns);
    }

    const handleAddQ5Sug = () => {
        setQ5Suggestions([...q5Suggestions, q5SuggestionsData]);
        setQ5SuggestionsData("");
    };

    const handleRemoveQ5Sug = (index) => {
        const newAns = [...q5Suggestions];
        newAns.splice(index, 1);
        setQ5Suggestions(newAns);
    }


    // ========question 7===============

    const handleAddQ7Ans = () => {
        setQ7Answer([...q7Answer, q7AnswerData]);
        setQ7AnswerData("");
    };

    const handleRemoveQ7Ans = (index) => {
        const newAns = [...q7Answer];
        newAns.splice(index, 1);
        setQ7Answer(newAns);
    }

    const handleAddQ7Sug = () => {
        setQ7Suggestions([...q7Suggestions, q7SuggestionsData]);
        setQ7SuggestionsData("");
    };

    const handleRemoveQ7Sug = (index) => {
        const newAns = [...q7Suggestions];
        newAns.splice(index, 1);
        setQ7Suggestions(newAns);
    }




    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='tableModal'
        >
            <Modal.Body>
                <div className="closeModalBtn" onClick={props.onHide}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h4>Edit Question & Answer</h4>
                <div className="formBox">
                    <Form onSubmit={handleEditQnASubmit}>
                        {/* ====question 1======== */}
                        <Form.Group className="mb-3">
                            <h4>Question 1</h4>
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Question"
                                className="mb-2"
                                value={q1Question}
                                onChange={(e) => setQ1Question(e.target.value)}
                            />
                            <Form.Label>Answer</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Answer"
                                    className="mb-2"
                                    value={q1AnswerData}
                                    onChange={(e) => setQ1AnswerData(e.target.value)}
                                />
                                <Button variant="primary" onClick={handleAddQ1Ans}>Add</Button>
                            </div>
                            <ul className="text-white">
                                {q1Answer &&
                                    q1Answer.map((curAns, index) => {
                                        return (
                                            <>
                                                <li>
                                                    {index + 1} = {curAns}
                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveQ1Ans(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </li>
                                            </>
                                        );
                                    })}
                            </ul>

                            <Form.Label>Suggestions</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="text"
                                    name="answer"
                                    id="answer"
                                    placeholder="Suggestions"
                                    className="mb-2"
                                    value={q1SuggestionsData}
                                    onChange={(e) => setQ1SuggestionsData(e.target.value)}
                                />
                                <Button variant="primary" onClick={handleAddQ1Sug}>Add</Button>
                            </div>
                            <ul className="text-white">
                                {q1Suggestions &&
                                    q1Suggestions.map((curAns, index) => {
                                        return (
                                            <>
                                                <li>
                                                    {index + 1} = {curAns}
                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveQ1Sug(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </li>
                                            </>
                                        );
                                    })}
                            </ul>
                        </Form.Group>


                        {/* ====question 2======== */}

                        <Form.Group className="mt-5">
                            <h4>Question 2</h4>
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Question"
                                className="mb-2"
                                value={q2Question}
                                onChange={(e) => setQ2Question(e.target.value)}
                            />
                            <Form.Label>Answer</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Answer"
                                    className="mb-2"
                                    value={q2AnswerData}
                                    onChange={(e) => setQ2AnswerData(e.target.value)}
                                />
                                <Button variant="primary" onClick={handleAddQ2Ans}>Add</Button>
                            </div>
                            <ul className="text-white">
                                {q2Answer &&
                                    q2Answer.map((curAns, index) => {
                                        return (
                                            <>
                                                <li>
                                                    {index + 1} = {curAns}
                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveQ2Ans(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </li>
                                            </>
                                        );
                                    })}
                            </ul>

                            <Form.Label>Suggestions</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="text"
                                    name="answer"
                                    id="answer"
                                    placeholder="Suggestions"
                                    className="mb-2"
                                    value={q2SuggestionsData}
                                    onChange={(e) => setQ2SuggestionsData(e.target.value)}
                                />
                                <Button variant="primary" onClick={handleAddQ2Sug}>Add</Button>
                            </div>
                            <ul className="text-white">
                                {q2Suggestions &&
                                    q2Suggestions.map((curAns, index) => {
                                        return (
                                            <>
                                                <li>
                                                    {index + 1} = {curAns}
                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveQ2Sug(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </li>
                                            </>
                                        );
                                    })}
                            </ul>
                        </Form.Group>

                        {/* ====question 3======== */}

                        <Form.Group className="mt-5">
                            <h4>Question 3</h4>
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Question"
                                className="mb-2"
                                value={q3Question}
                                onChange={(e) => setQ3Question(e.target.value)}
                            />
                        </Form.Group>

                        {/* ====question 4======== */}

                        <Form.Group className="mt-5">
                            <h4>Question 4</h4>
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Question"
                                className="mb-2"
                                value={q4Question}
                                onChange={(e) => setQ4Question(e.target.value)}
                            />
                            <Form.Label>Answer</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Answer"
                                    className="mb-2"
                                    value={q4AnswerData}
                                    onChange={(e) => setQ4AnswerData(e.target.value)}
                                />
                                <Button variant="primary" onClick={handleAddQ4Ans}>Add</Button>
                            </div>
                            <ul className="text-white">
                                {q4Answer &&
                                    q4Answer.map((curAns, index) => {
                                        return (
                                            <>
                                                <li>
                                                    {index + 1} = {curAns}
                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveQ4Ans(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </li>
                                            </>
                                        );
                                    })}
                            </ul>

                            <Form.Label>Suggestions</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="text"
                                    name="answer"
                                    id="answer"
                                    placeholder="Suggestions"
                                    className="mb-2"
                                    value={q4SuggestionsData}
                                    onChange={(e) => setQ4SuggestionsData(e.target.value)}
                                />
                                <Button variant="primary" onClick={handleAddQ4Sug}>Add</Button>
                            </div>
                            <ul className="text-white">
                                {q4Suggestions &&
                                    q4Suggestions.map((curAns, index) => {
                                        return (
                                            <>
                                                <li>
                                                    {index + 1} = {curAns}
                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveQ4Sug(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </li>
                                            </>
                                        );
                                    })}
                            </ul>
                        </Form.Group>

                        {/* ====question 5======== */}

                        <Form.Group className="mt-5">
                            <h4>Question 5</h4>
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Question"
                                className="mb-2"
                                value={q5Question}
                                onChange={(e) => setQ5Question(e.target.value)}
                            />
                            <Form.Label>Answer</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Answer"
                                    className="mb-2"
                                    value={q5AnswerData}
                                    onChange={(e) => setQ5AnswerData(e.target.value)}
                                />
                                <Button variant="primary" onClick={handleAddQ5Ans}>Add</Button>
                            </div>
                            <ul className="text-white">
                                {q5Answer &&
                                    q5Answer.map((curAns, index) => {
                                        return (
                                            <>
                                                <li>
                                                    {index + 1} = {curAns}
                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveQ5Ans(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </li>
                                            </>
                                        );
                                    })}
                            </ul>

                            <Form.Label>Suggestions</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="text"
                                    name="answer"
                                    id="answer"
                                    placeholder="Suggestions"
                                    className="mb-2"
                                    value={q5SuggestionsData}
                                    onChange={(e) => setQ5SuggestionsData(e.target.value)}
                                />
                                <Button variant="primary" onClick={handleAddQ5Sug}>Add</Button>
                            </div>
                            <ul className="text-white">
                                {q5Suggestions &&
                                    q5Suggestions.map((curAns, index) => {
                                        return (
                                            <>
                                                <li>
                                                    {index + 1} = {curAns}
                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveQ5Sug(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </li>
                                            </>
                                        );
                                    })}
                            </ul>
                        </Form.Group>

                        {/* ====question 6======== */}

                        <Form.Group className="mt-5">
                            <h4>Question 6</h4>
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Question"
                                className="mb-2"
                                value={q6Question}
                                onChange={(e) => setQ6Question(e.target.value)}
                            />
                        </Form.Group>

                        {/* ====question 7======== */}

                        <Form.Group className="mt-5">
                            <h4>Question 7</h4>
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Question"
                                className="mb-2"
                                value={q7Question}
                                onChange={(e) => setQ7Question(e.target.value)}
                            />
                            <Form.Label>Answer</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Answer"
                                    className="mb-2"
                                    value={q7AnswerData}
                                    onChange={(e) => setQ7AnswerData(e.target.value)}
                                />
                                <Button variant="primary" onClick={handleAddQ7Ans}>Add</Button>
                            </div>
                            <ul className="text-white">
                                {q7Answer &&
                                    q7Answer.map((curAns, index) => {
                                        return (
                                            <>
                                                <li>
                                                    {index + 1} = {curAns}
                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveQ7Ans(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </li>
                                            </>
                                        );
                                    })}
                            </ul>

                            <Form.Label>Suggestions</Form.Label>
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="text"
                                    name="answer"
                                    id="answer"
                                    placeholder="Suggestions"
                                    className="mb-2"
                                    value={q7SuggestionsData}
                                    onChange={(e) => setQ7SuggestionsData(e.target.value)}
                                />
                                <Button variant="primary" onClick={handleAddQ7Sug}>Add</Button>
                            </div>
                            <ul className="text-white">
                                {q7Suggestions &&
                                    q7Suggestions.map((curAns, index) => {
                                        return (
                                            <>
                                                <li>
                                                    {index + 1} = {curAns}
                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveQ7Sug(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </li>
                                            </>
                                        );
                                    })}
                            </ul>
                        </Form.Group>


                        <div className="formBtn">
                            <button type="submit">Edit Question & Answer</button>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );
}
