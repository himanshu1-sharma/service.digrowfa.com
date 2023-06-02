import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BASEURL } from "../../../Constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const EditJobDetail = () => {

    const [data, setData] = useState()
    const [selectCategory, setSelectCategory] = useState()
    const [responsibilities, setResponsibilities] = useState("")
    const [responsibilitiesData, setResponsibilitiesData] = useState("")
    const [qualification, setQualification] = useState("")
    const [qualificationData, setQualificationData] = useState("")
    const [skills, setSkills] = useState("")
    const [skillsData, setSkillsData] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [minExperience, setMinExperience] = useState("")
    const [maxExperience, setMaxExperience] = useState("")
    const [location, setLocation] = useState("")
    const [jobType, setJobType] = useState("")
    const [workType, setWorkType] = useState("")
    const [isUrgent, setIsUrgent] = useState("")
    const params = useParams()
    const navigate = useNavigate()

    const fetchJobDetail = async () => {
        await Axios.get(`${BASEURL}api/job-detail/job-detail/${params.id}`)
            .then(data => {
                console.log(data.data.data[0])
                setSelectCategory(data.data.data[0].category?.name)
                setTitle(data.data.data[0].title)
                setDescription(data.data.data[0].description)
                setResponsibilities(data.data.data[0].responsibilities)
                setQualification(data.data.data[0].qualification)
                setSkills(data.data.data[0].skills)
                setMinExperience(data.data.data[0].minExperience)
                setMaxExperience(data.data.data[0].maxExperience)
                setLocation(data.data.data[0].location)
                setJobType(data.data.data[0].jobType)
                setWorkType(data.data.data[0].workType)
                setIsUrgent(data.data.data[0].isUrgent)
            })
    }



    const handleCategorySubmit = async (e) => {
        e.preventDefault()
        await Axios.put(`${BASEURL}api/job-detail/edit-job`, {
            id: params.id,
            title: title,
            description: description,
            responsibilities: responsibilities,
            qualification: qualification,
            skills: skills,
            minExperience: minExperience,
            maxExperience: maxExperience,
            location: location,
            jobType: jobType,
            workType: workType,
            isUrgent: isUrgent === "Yes" ? true : false

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
                    navigate("/admin/job-list")
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
    }

    const handleAddResponsibilities = () => {
        setResponsibilities([...responsibilities, responsibilitiesData])
        setResponsibilitiesData("")
    }


    const handleRemoveResponsibilites = (index) => {
        const newResponsibilities = [...responsibilities];
        newResponsibilities.splice(index, 1);
        setResponsibilities(newResponsibilities);
    }

    const handleAddQualification = () => {
        setQualification([...qualification, qualificationData])
        setQualificationData("")
    }


    const handleRemoveQualification = (index) => {
        const newQualification = [...qualification];
        newQualification.splice(index, 1);
        setQualification(newQualification);
    }

    const handleAddSkills = () => {
        setSkills([...skills, skillsData])
        setSkillsData("")
    }


    const handleRemoveSkills = (index) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
    }

    useEffect(() => {
        fetchJobDetail()
    }, [])

    return (
        <>
            <ToastContainer />
            <div className='editCategoryBg'>
                <div className="container">
                    <div className='row d-flex justify-content-center'>
                        <div className='col-lg-10'>
                            <div className="formBox">
                                <h2>Edit Job Detail</h2>
                                <Form onSubmit={handleCategorySubmit}>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Category</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Title"
                                                    value={selectCategory}
                                                    readOnly
                                                />
                                            </Form.Group>


                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Title"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder="Description"
                                                    name="description"
                                                    id="description"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Responsibilities</Form.Label>
                                                <div className="addSteps">
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        placeholder="Title"
                                                        value={responsibilitiesData}
                                                        onChange={(e) => setResponsibilitiesData(e.target.value)}
                                                    />
                                                    <button onClick={handleAddResponsibilities} type="button">
                                                        Add
                                                    </button>
                                                </div>
                                            </Form.Group>
                                            <ul className="text-white">
                                                {responsibilities &&
                                                    responsibilities.map((curStep, index) => {
                                                        return (
                                                            <>
                                                                <li>
                                                                    {index + 1} = {curStep}
                                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveResponsibilites(index)}>
                                                                        <FontAwesomeIcon icon={faTrash} />
                                                                    </button>
                                                                </li>
                                                            </>
                                                        );
                                                    })}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Qualification</Form.Label>
                                                <div className="addSteps">
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        placeholder="Add Points"
                                                        value={qualificationData}
                                                        onChange={(e) => setQualificationData(e.target.value)}
                                                    />
                                                    <button onClick={handleAddQualification} type="button">
                                                        Add
                                                    </button>
                                                </div>
                                            </Form.Group>
                                            <ul className="text-white">
                                                {qualification &&
                                                    qualification.map((curStep, index) => {
                                                        return (
                                                            <>
                                                                <li>
                                                                    {index + 1} = {curStep}
                                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveQualification(index)}>
                                                                        <FontAwesomeIcon icon={faTrash} />
                                                                    </button>
                                                                </li>
                                                            </>
                                                        );
                                                    })}
                                            </ul>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Skills</Form.Label>
                                                <div className="addSteps">
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        placeholder="Add Points"
                                                        value={skillsData}
                                                        onChange={(e) => setSkillsData(e.target.value)}
                                                    />
                                                    <button onClick={handleAddSkills} type="button">
                                                        Add
                                                    </button>
                                                </div>
                                            </Form.Group>
                                            <ul className="text-white">
                                                {skills &&
                                                    skills.map((curStep, index) => {
                                                        return (
                                                            <>
                                                                <li>
                                                                    {index + 1} = {curStep}
                                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveSkills(index)}>
                                                                        <FontAwesomeIcon icon={faTrash} />
                                                                    </button>
                                                                </li>
                                                            </>
                                                        );
                                                    })}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Experience</Form.Label>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                                        <Form.Control
                                                            type="number"
                                                            name="name"
                                                            id="name"
                                                            placeholder="Min"
                                                            value={minExperience}
                                                            onChange={(e) => setMinExperience(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                                        <Form.Control
                                                            type="number"
                                                            name="name"
                                                            id="name"
                                                            placeholder="Max"
                                                            value={maxExperience}
                                                            onChange={(e) => setMaxExperience(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </Form.Group>


                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Location</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="location"
                                                    id="location"
                                                    placeholder="Location"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Form.Label>Job Type</Form.Label>
                                            <div className='customRadio'>
                                                {['radio'].map((type) => (
                                                    <div key={`inline-${type}`} className="mb-3">
                                                        <Form.Check
                                                            inline
                                                            label="Full Time"
                                                            name="jobType"
                                                            type={type}
                                                            id={`inline-${type}-1`}
                                                            value="Full Time"
                                                            onChange={(e) => setJobType(e.target.value)}
                                                            checked={jobType === "Full Time"}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Part Time"
                                                            name="jobType"
                                                            type={type}
                                                            id={`inline-${type}-2`}
                                                            value="Part Time"
                                                            onChange={(e) => setJobType(e.target.value)}
                                                            checked={jobType === "Part Time"}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Internship"
                                                            name="jobType"
                                                            type={type}
                                                            id={`inline-${type}-3`}
                                                            value="Internship"
                                                            onChange={(e) => setJobType(e.target.value)}
                                                            checked={jobType === "Internship"}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Form.Label>Work Type</Form.Label>
                                            <div className='customRadio'>
                                                {['radio'].map((type) => (
                                                    <div key={`workType-${type}`} className="mb-3">
                                                        <Form.Check
                                                            inline
                                                            label="Hybrid"
                                                            name="workType"
                                                            type={type}
                                                            id={`workType-${type}-1`}
                                                            value="Hybrid"
                                                            onChange={(e) => setWorkType(e.target.value)}
                                                            checked={workType === "Hybrid"}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Onsite"
                                                            name="workType"
                                                            type={type}
                                                            id={`workType-${type}-2`}
                                                            value="Onsite"
                                                            onChange={(e) => setWorkType(e.target.value)}
                                                            checked={workType === "Onsite"}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Remote"
                                                            name="workType"
                                                            type={type}
                                                            id={`workType-${type}-3`}
                                                            value="Remote"
                                                            onChange={(e) => setWorkType(e.target.value)}
                                                            checked={workType === "Remote"}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                            <Form.Label>Urgent</Form.Label>
                                            <div className='customRadio'>
                                                {['radio'].map((type) => (
                                                    <div key={`urgent-${type}`} className="mb-3">
                                                        <Form.Check
                                                            inline
                                                            label="Yes"
                                                            name="urgent"
                                                            type={type}
                                                            id={`urgent-${type}-1`}
                                                            value="Yes"
                                                            onChange={(e) => setIsUrgent(e.target.value)}
                                                        // checked={isUrgent === true}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="No"
                                                            name="urgent"
                                                            type={type}
                                                            id={`urgent-${type}-2`}
                                                            value="No"
                                                            onChange={(e) => setIsUrgent(e.target.value)}
                                                        // checked={isUrgent === false}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="formBtn">
                                        <button type="submit">Edit Job Detail</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EditJobDetail