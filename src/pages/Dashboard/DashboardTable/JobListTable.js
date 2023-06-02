import { forwardRef } from 'react';
import React, { useState, useEffect } from "react"
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from "material-table";
import Axios from 'axios'
import { BASEURL } from '../../../Constant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};



const Table = () => {

    const [data, setData] = useState()
    const [selected, setSelected] = useState()
    const [render, setRender] = useState(false)
    const [categoryModalShow, setCategoryModalShow] = React.useState(false);
    const [deleteModalShow, setDeleteModalShow] = React.useState(false);
    const navigate = useNavigate()

    const fetchCategory = async () => {
        try {
            await Axios.get(`${BASEURL}api/job-detail/get-all-job`)
                .then(data => {
                    setData(data.data.data)
                })
        } catch (error) {
            console.log(error.message)
        }
    }



    const handleDelete = (e, f) => {
        setDeleteModalShow(true)
        setSelected(f)
    }




    useEffect(() => {
        if (render) setRender(false)
        fetchCategory()
    }, [render])

    const columns = [
        { title: "Id", field: "_id" },
        { title: "Category", field: "category.name" },
        { title: "Title", field: "title" },
        // { title: "Description", field: "description" },

        {
            title: "Experience", field: "experience", render: (rowData => <>
                {rowData.minExperience} - {rowData.maxExperience}
            </>)
        },
        { title: "Location", field: "location" },
        { title: "Job Type", field: "jobType" },
        { title: "Work Type", field: "workType" },
        { title: "Urgent", field: "isUrgent", render: (rowData => rowData.isUrgent ? "Yes" : "No") },
    ]



    return (
        <>
            <CategoryModal
                show={categoryModalShow}
                onHide={() => setCategoryModalShow(false)}
                setRender={setRender}
            />

            <DeleteCategoryModal
                show={deleteModalShow}
                onHide={() => setDeleteModalShow(false)}
                selected={selected}
                setRender={setRender}
            />
            <ToastContainer />
            <MaterialTable
                title={
                    <div className='tableBtn'>
                        <button onClick={() => setCategoryModalShow(true)}>Add Category</button>
                    </div>
                }
                icons={tableIcons}
                data={data}
                columns={columns}
                options={
                    {
                        actionsColumnIndex: -1,
                        addRowPosition: "first",
                        pageSize: 10,
                    }

                }
                actions={
                    [
                        {
                            icon: Edit,
                            tooltip: 'Edit Category',
                            onClick: (e, rowData) => {
                                navigate(`/admin/edit-job-detail/${rowData._id}`)
                            }
                        },
                        {
                            icon: DeleteOutline,
                            tooltip: 'Delete Category',
                            onClick: (e, rowData) => {
                                handleDelete(e, rowData)
                            }
                        },
                    ]}
            />
        </>
    )
}


export default Table

function CategoryModal(props) {

    const [category, setCategory] = useState()
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


    const fetchCategory = async () => {
        await Axios.get(`${BASEURL}api/job/get-all-category`)
            .then(data => {
                setCategory(data.data.data)
            })
    }


    const handleCategorySubmit = async (e) => {
        e.preventDefault()
        try {

            // console.log("category", selectCategory)
            // console.log("title", title)
            // console.log("responsibilities", responsibilities)
            // console.log("qualification", qualification)
            // console.log("skills", skills)
            // console.log("description", description)
            // console.log("minExperience", minExperience)
            // console.log("maxExperience", maxExperience)
            // console.log("location", location)
            // console.log("jobType", jobType)
            // console.log("workType", workType)
            // console.log("isUrgent", isUrgent)

            await Axios.post(`${BASEURL}api/job-detail/create-job-detail`, {
                category: selectCategory,
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
                        setSelectCategory("")
                        setResponsibilities("")
                        setQualification("")
                        setSkills("")
                        setTitle("")
                        setDescription("")
                        setMinExperience("")
                        setMaxExperience("")
                        setLocation("")
                        setJobType("")
                        setWorkType("")
                        setIsUrgent("")
                        props.onHide()
                        props.setRender(true)
                    }
                    else {
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
        fetchCategory()
    }, [])

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='tableModal'
        >
            <Modal.Body>
                <div className="closeModalBtn" onClick={props.onHide}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h4>Add Jobs</h4>
                <div className="formBox">
                    <Form onSubmit={handleCategorySubmit}>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select
                                        className="mb-3"
                                        name="category"
                                        id="category"
                                        value={selectCategory}
                                        onChange={(e) => setSelectCategory(e.target.value)}
                                    >
                                        <option selected>Select Category</option>
                                        {category?.map(curElt => {
                                            return (
                                                <>
                                                    <option value={curElt._id}>{curElt?.name}</option>
                                                </>
                                            )
                                        })}
                                    </Form.Select>
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
                                            />
                                            <Form.Check
                                                inline
                                                label="Part Time"
                                                name="jobType"
                                                type={type}
                                                id={`inline-${type}-2`}
                                                value="Part Time"
                                                onChange={(e) => setJobType(e.target.value)}
                                            />
                                            <Form.Check
                                                inline
                                                label="Internship"
                                                name="jobType"
                                                type={type}
                                                id={`inline-${type}-3`}
                                                value="Internship"
                                                onChange={(e) => setJobType(e.target.value)}
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
                                            />
                                            <Form.Check
                                                inline
                                                label="Onsite"
                                                name="workType"
                                                type={type}
                                                id={`workType-${type}-2`}
                                                value="Onsite"
                                                onChange={(e) => setWorkType(e.target.value)}
                                            />
                                            <Form.Check
                                                inline
                                                label="Remote"
                                                name="workType"
                                                type={type}
                                                id={`workType-${type}-3`}
                                                value="Remote"
                                                onChange={(e) => setWorkType(e.target.value)}
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
                                            />
                                            <Form.Check
                                                inline
                                                label="No"
                                                name="urgent"
                                                type={type}
                                                id={`urgent-${type}-2`}
                                                value="No"
                                                onChange={(e) => setIsUrgent(e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className="formBtn">
                            <button type="submit">Add Category</button>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );
}


function DeleteCategoryModal(props) {

    const handleCategoryDelete = async () => {
        try {
            await Axios.delete(`${BASEURL}api/job-detail/delete-job-list/${props.selected?._id}`)
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
                    }
                    else {
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

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='tableModal'
        >
            <Modal.Body>
                <div className="closeModalBtn" onClick={props.onHide}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <div className='deleteConfirm'>
                    <h5>Are You Sure<br /> You  Want To Delete</h5>
                    <button onClick={props.onHide}>No</button>
                    <button onClick={handleCategoryDelete} type="button">Yes</button>
                </div>
            </Modal.Body>
        </Modal>
    );
}