import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BASEURL } from "../../../Constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const EditCategoryDetail = () => {
    const params = useParams()
    const [data, setData] = useState();
    const [theme, setTheme] = useState("");
    const [headerVideo, setHeaderVideo] = useState("");
    const [headerTitle, setHeaderTitle] = useState("");
    const [headerSubTitle, setHeaderSubTitle] = useState("");
    const [headerDescription, setHeaderDescription] = useState("");
    const [overviewTitleOne, setOverviewTitleOne] = useState("");
    const [overviewTitleTwo, setOverviewTitleTwo] = useState("");
    const [overviewDescriptionOne, setOverviewDescriptionOne] = useState("");
    const [overviewDescriptionTwo, setOverviewDescriptionTwo] = useState("");
    const [overviewImage, setOverviewImage] = useState("");
    const [companyTitle, setCompanyTitle] = useState("");
    const [aboutTitle, setAboutTitle] = useState("");
    const [aboutDescription, setAboutDescription] = useState("");
    const [serviceTitle, setServiceTitle] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [companyImage, setCompanyImage] = useState("");
    const [stepsTitle, setStepsTitle] = useState("");
    const [steps, setSteps] = useState([]);
    const [stepsData, setStepsData] = useState("");
    const [workingprocessImage, setWorkingprocessImage] = useState("");
    const [resultTitle, setResultTitle] = useState("");
    const [resultDescription, setResultDescription] = useState("");
    const [resultTagline, setResultTagline] = useState("");
    const [resultImage, setResultImage] = useState("");
    const navigate = useNavigate()



    const fetchCategoryDetail = async () => {
        try {
            await Axios.get(`${BASEURL}api/category-detail/${params.id}`)
                .then(data => {
                    setData(data.data.data[0])
                    setTheme(data.data.data[0]?.theme)
                    setHeaderVideo(data.data.data[0]?.header?.video)
                    setHeaderTitle(data.data.data[0]?.categoryId?.name)
                    setHeaderSubTitle(data.data.data[0]?.header?.subtitle)
                    setHeaderDescription(data.data.data[0]?.header?.description)
                    setOverviewTitleOne(data.data.data[0]?.overview?.titleOne)
                    setOverviewTitleTwo(data.data.data[0]?.overview?.titleTwo)
                    setOverviewDescriptionOne(data.data.data[0]?.overview?.descriptionOne)
                    setOverviewDescriptionTwo(data.data.data[0]?.overview?.descriptionTwo)
                    setOverviewImage(data.data.data[0]?.overview?.overviewImage)
                    setCompanyTitle(data.data.data[0]?.company?.companyTitle)
                    setAboutTitle(data.data.data[0]?.company?.aboutTitle)
                    setAboutDescription(data.data.data[0]?.company?.aboutDescription)
                    setServiceTitle(data.data.data[0]?.company?.serviceTitle)
                    setServiceDescription(data.data.data[0]?.company?.serviceDescription)
                    setCompanyImage(data.data.data[0]?.company?.companyImage)
                    setStepsTitle(data.data.data[0]?.workingprocess?.title)
                    setSteps(data.data.data[0]?.workingprocess?.setps)
                    setWorkingprocessImage(data.data.data[0]?.workingprocess?.workingprocessImage)
                    setResultTitle(data.data.data[0]?.result?.title)
                    setResultDescription(data.data.data[0]?.result?.description)
                    setResultTagline(data.data.data[0]?.result?.tagLine)
                    setResultImage(data.data.data[0]?.result?.resultImage)
                })

        } catch (error) {
            console.log(error.message);
        }
    };


    console.log("data", data)

    const handleAddSteps = () => {
        setSteps([...steps, stepsData]);
        setStepsData("");
    };
    // console.log("stpes", steps);
    const handleRemoveSteps = (index) => {
        const newSteps = [...steps];
        newSteps.splice(index, 1);
        setSteps(newSteps);
    }

    const uploadVideo = (e) => {
        const video = e.target.files[0];
        setHeaderVideo(video);
    };
    const uploadOverviewFile = (e) => {
        const overviewFile = e.target.files[0];
        setOverviewImage(overviewFile);
    }
    const uploadCompanyFile = (e) => {
        const companyFile = e.target.files[0];
        setCompanyImage(companyFile);
    }

    const uploadWorkingprocessFile = (e) => {
        const workingprocessFile = e.target.files[0];
        setWorkingprocessImage(workingprocessFile);
    }

    const uploadResultFile = (e) => {
        const resultFile = e.target.files[0];
        setResultImage(resultFile);
    }

    useEffect(() => {
        fetchCategoryDetail();
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        // console.log("theme:", theme);
        // console.log("video:", headerVideo);
        // console.log("title:", headerTitle);
        // console.log("subtitle:", headerSubTitle);
        // console.log("description:", headerDescription);
        // console.log("titleOne:", overviewTitleOne);
        // console.log("descriptionOne:", overviewDescriptionOne);
        // console.log("titleTwo:", overviewTitleTwo);
        // console.log("descriptionTwo:", overviewDescriptionTwo);
        // console.log("overviewImage:", overviewImage);
        // console.log("companyTitle:", companyTitle);
        // console.log("aboutTitle:", aboutTitle);
        // console.log("aboutDescription:", aboutDescription);
        // console.log("serviceTitle:", serviceTitle);
        // console.log("serviceDescription:", serviceDescription);
        // console.log("companyImage:", companyImage);
        // console.log("setps:", steps);
        // console.log("workingprocessImage:", workingprocessImage);
        // console.log("title:", resultTitle);
        // console.log("description:", resultDescription);
        // console.log("tagLine:", resultTagline);
        // console.log("resultImage:", resultImage);
        try {
            const formData = new FormData();
            formData.append("categoryId", params.id);
            formData.append("theme", theme);
            formData.append("video", headerVideo);
            formData.append("headerTitle", headerTitle);
            formData.append("headerSubtitle", headerSubTitle);
            formData.append("headerDescription", headerDescription);
            formData.append("overviewTitleOne", overviewTitleOne);
            formData.append("overviewDescriptionOne", overviewDescriptionOne);
            formData.append("overviewTitleTwo", overviewTitleTwo);
            formData.append("overviewDescriptionTwo", overviewDescriptionTwo);
            formData.append("overviewImage", overviewImage);
            formData.append("companyTitle", companyTitle);
            formData.append("aboutTitle", aboutTitle);
            formData.append("aboutDescription", aboutDescription);
            formData.append("serviceTitle", serviceTitle);
            formData.append("serviceDescription", serviceDescription);
            formData.append("companyImage", companyImage);
            formData.append("setps", JSON.stringify(steps));
            formData.append("stepsTitle", stepsTitle);
            formData.append("workingprocessImage", workingprocessImage);
            formData.append("resultTitle", resultTitle);
            formData.append("resultDescription", resultDescription);
            formData.append("resultTagLine", resultTagline);
            formData.append("resultImage", resultImage);


            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            Axios.patch(`${BASEURL}api/category-detail/edit-category-detail`, formData, config)
                .then((data) => {
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
                        navigate("/admin/category-detail")
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
                });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='editCategoryBg'>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-lg-10'>
                            <div className="formBox">
                                <h2>Edit Category Detail</h2>
                                <Form onSubmit={handleUpdate}>

                                    {/* =====Header======== */}

                                    <div className="formTitle">
                                        <h5>Set Theme</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Theme</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="theme"
                                                    id="theme"
                                                    placeholder="example: theme1"
                                                    value={theme}
                                                    onChange={(e) => setTheme(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    {/* =====Header======== */}

                                    <div className="formTitle">
                                        <h5>Header</h5>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Background Video</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    name="video"
                                                    id="video"
                                                    onChange={(e) => uploadVideo(e)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Header Title</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    placeholder="Title"
                                                    readOnly
                                                    value={headerTitle}
                                                    onChange={(e) => setHeaderTitle(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Header Sub Title</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="subtitle"
                                                    id="subtitle"
                                                    placeholder="Sub Title"
                                                    value={headerSubTitle}
                                                    onChange={(e) => setHeaderSubTitle(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Header Description</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder="Description"
                                                    name="description"
                                                    id="description"
                                                    value={headerDescription}
                                                    onChange={(e) => setHeaderDescription(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    {/* ======Overview====== */}

                                    <div className="formTitle">
                                        <h5>Overview</h5>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> Title One</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="overviewTitleOne"
                                                    id="overviewTitleOne"
                                                    placeholder="Overview Title One"
                                                    value={overviewTitleOne}
                                                    onChange={(e) => setOverviewTitleOne(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> Title Two</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="overviewTitleTwo"
                                                    id="overviewTitleTwo"
                                                    placeholder="Overview Title Two"
                                                    value={overviewTitleTwo}
                                                    onChange={(e) => setOverviewTitleTwo(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> Description One </Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder="Description"
                                                    name="overviewDescriptionOne"
                                                    id="overviewDescriptionOne"
                                                    value={overviewDescriptionOne}
                                                    onChange={(e) => setOverviewDescriptionOne(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Description Two</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder="Description"
                                                    name="overviewDescriptionTwo"
                                                    id="overviewDescriptionTwo"
                                                    value={overviewDescriptionTwo}
                                                    onChange={(e) => setOverviewDescriptionTwo(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Overview Image</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    name="overviewFile"
                                                    id="overviewFile"
                                                    onChange={(e) => uploadOverviewFile(e)}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    {/* ======Company====== */}

                                    <div className="formTitle">
                                        <h5>Company</h5>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> Company Title</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="companyTitle"
                                                    id="companyTitle"
                                                    placeholder="Company Title"
                                                    value={companyTitle}
                                                    onChange={(e) => setCompanyTitle(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> About Title</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="aboutTitle"
                                                    id="aboutTitle"
                                                    placeholder="About Title"
                                                    value={aboutTitle}
                                                    onChange={(e) => setAboutTitle(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> Service Title</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="serviceTitle"
                                                    id="serviceTitle"
                                                    placeholder="Service Title"
                                                    value={serviceTitle}
                                                    onChange={(e) => setServiceTitle(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> About Description </Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder="Description"
                                                    name="aboutDescription"
                                                    id="aboutDescription"
                                                    value={aboutDescription}
                                                    onChange={(e) => setAboutDescription(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Service Description </Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder="Description"
                                                    name="serviceDescription"
                                                    id="serviceDescription"
                                                    value={serviceDescription}
                                                    onChange={(e) => setServiceDescription(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Company Image</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    name="companyFile"
                                                    id="companyFile"
                                                    onChange={(e) => uploadCompanyFile(e)}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    {/* ======workingprocess====== */}

                                    <div className="formTitle">
                                        <h5>Working Process</h5>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> Title</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="stepsTitle"
                                                    id="stepsTitle"
                                                    placeholder="Title"
                                                    value={stepsTitle}
                                                    onChange={(e) => setStepsTitle(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-8 col-lg-8 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> Steps</Form.Label>
                                                <div className=" addSteps">
                                                    <Form.Control
                                                        type="text"
                                                        name="steps"
                                                        id="steps"
                                                        placeholder="Steps"
                                                        value={stepsData}
                                                        onChange={(e) => setStepsData(e.target.value)}
                                                    />
                                                    <button onClick={handleAddSteps} type="button">
                                                        Add Steps
                                                    </button>
                                                </div>
                                            </Form.Group>
                                            <ul className="text-white">
                                                {steps &&
                                                    steps.map((curStep, index) => {
                                                        return (
                                                            <>
                                                                <li>
                                                                    {index + 1} = {curStep}
                                                                    <button type="button" className="deleteStep" onClick={(index) => handleRemoveSteps(index)}>
                                                                        <FontAwesomeIcon icon={faTrash} />
                                                                    </button>
                                                                </li>
                                                            </>
                                                        );
                                                    })}
                                            </ul>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Working Process Image</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    name="workingprocessFile"
                                                    id="workingprocessFile"
                                                    onChange={(e) => uploadWorkingprocessFile(e)}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    {/* ======Result====== */}

                                    <div className="formTitle">
                                        <h5>Result</h5>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> Title</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="resultTitle"
                                                    id="resultTitle"
                                                    placeholder="Title"
                                                    value={resultTitle}
                                                    onChange={(e) => setResultTitle(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> Description </Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    placeholder="Description"
                                                    name="resultDescription"
                                                    id="resultDescription"
                                                    value={resultDescription}
                                                    onChange={(e) => setResultDescription(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label> Tag Line</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="tagLine"
                                                    id="tagLine"
                                                    placeholder="Tag Line"
                                                    value={resultTagline}
                                                    onChange={(e) => setResultTagline(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Result Image</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    name="resultFile"
                                                    id="resultFile"
                                                    onChange={(e) => uploadResultFile(e)}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="formBtn">
                                        <button type="submit">Add Category</button>
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

export default EditCategoryDetail