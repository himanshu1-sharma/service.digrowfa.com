import { forwardRef } from "react";
import React, { useState, useEffect } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable from "material-table";
import Axios from "axios";
import { BASEURL } from "../../../Constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const Table = () => {
    const [data, setData] = useState();
    const [categoryDetail, setCategoryDetail] = useState();
    const [render, setRender] = useState(false);
    const [categoryModalShow, setCategoryModalShow] = React.useState(false);
    const [editModal, setEditModal] = React.useState(false);
    const navigate = useNavigate()

    const fetchCategory = async () => {
        try {
            await Axios.get(`${BASEURL}api/category/get-all-category`).then(
                (data) => {
                    setData(data.data.data);
                }
            );
        } catch (error) {
            console.log(error.message);
        }
    };



    useEffect(() => {
        if (render) setRender(false);
        fetchCategory();
    }, [render]);

    const columns = [
        { title: "ID", field: "_id" },
        {
            title: "Icon",
            field: "image",
            render: (rowData) => (
                <img
                    src={rowData.image}
                    alt={rowData.name}
                    className="img-fluid categoryTableIcon"
                />
            ),
        },
        { title: "Name", field: "name" },
    ];

    const handleEdit = async (e, rowData) => {
        navigate(`/admin/edit-category-detail/${rowData._id}`)
        // setEditModal(true)
        // await Axios.get(`${BASEURL}api/category-detail/${rowData._id}`)
        //     .then(data => {
        //         setCategoryDetail(data.data.data[0])
        //     })
    }


    return (
        <>
            <CategoryModal
                show={categoryModalShow}
                onHide={() => setCategoryModalShow(false)}
                setRender={setRender}
            />
            <EditCategoryDetailModal
                show={editModal}
                onHide={() => setEditModal(false)}
                categoryDetail={categoryDetail}
            />
            <ToastContainer />
            <MaterialTable
                title={
                    <div className="tableBtn">
                        <button onClick={() => setCategoryModalShow(true)}>
                            Add Category Detail
                        </button>
                    </div>
                }
                icons={tableIcons}
                data={data}
                columns={columns}
                options={{
                    actionsColumnIndex: -1,
                    addRowPosition: "first",
                    pageSize: 10,
                }}
                actions={
                    [
                        {
                            icon: Edit,
                            tooltip: 'Edit Category Detail',
                            onClick: (e, rowData) => {
                                handleEdit(e, rowData)
                            }
                        }
                    ]}
            />
        </>
    );
};

export default Table;

// ====create category detail=====
function CategoryModal(props) {
    const [category, setCategory] = useState();
    const [selectCategory, setSelectCategory] = useState("");
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

    const fetchCategory = async () => {
        try {
            await Axios.get(`${BASEURL}api/category/get-all-category`).then(
                (data) => {
                    setCategory(data.data.data);
                }
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleAddSteps = () => {
        setSteps([...steps, stepsData]);
        setStepsData("");
    };

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
        fetchCategory();
    }, []);

    const handleCategoryDetailSubmit = (e) => {
        e.preventDefault();
        // console.log("categoryId:", selectCategory);
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
            formData.append("categoryId", selectCategory);
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
            formData.append("stepsTitle", stepsTitle);
            formData.append("setps", JSON.stringify(steps));
            formData.append("workingprocessImage", workingprocessImage);
            formData.append("resultTitle", resultTitle);
            formData.append("resultDescription", resultDescription);
            formData.append("resultTagLine", resultTagline);
            formData.append("resultImage", resultImage);

            // console.log("formData", formData)

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            Axios.post(`${BASEURL}api/category-detail/create-category-detail`, formData, config)
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
                        props.onHide();
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
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="tableModal"
        >
            <Modal.Body>
                <div className="closeModalBtn" onClick={props.onHide}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h4>Add Category Detail</h4>
                <div className="formBox">
                    <Form onSubmit={handleCategoryDetailSubmit}>
                        <Form.Select
                            className="mb-3"
                            value={selectCategory}
                            onChange={(e) => setSelectCategory(e.target.value)}
                        >
                            <option selected>Select Service Category</option>
                            {category &&
                                category.map((curCat) => {
                                    return (
                                        <>
                                            <option value={curCat._id}>{curCat.name}</option>
                                        </>
                                    );
                                })}
                        </Form.Select>

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
                                        name="servicetitle"
                                        id="servicetitle"
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
                                    <div className="addSteps">
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
                                                        <button type="button" onClick={(index) => handleRemoveSteps(index)}>
                                                            x
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
            </Modal.Body>
        </Modal>
    );
}

// =====edit category detail======
function EditCategoryDetailModal(props) {
    console.log("props.categoryDetail", props.categoryDetail)
    const [category, setCategory] = useState();
    const [selectCategory, setSelectCategory] = useState("");
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



    const fetchCategory = async () => {
        try {
            await Axios.get(`${BASEURL}api/category/get-all-category`)
                .then(data => {
                    setCategory(data.data.data);
                })
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleAddSteps = () => {
        setSteps([...steps, stepsData]);
        setStepsData("");
    };
    // console.log("stpes", steps);

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
        fetchCategory();
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("categoryId:", selectCategory);
        console.log("theme:", theme);
        console.log("video:", headerVideo);
        console.log("title:", headerTitle);
        console.log("subtitle:", headerSubTitle);
        console.log("description:", headerDescription);
        console.log("titleOne:", overviewTitleOne);
        console.log("descriptionOne:", overviewDescriptionOne);
        console.log("titleTwo:", overviewTitleTwo);
        console.log("descriptionTwo:", overviewDescriptionTwo);
        console.log("overviewImage:", overviewImage);
        console.log("companyTitle:", companyTitle);
        console.log("aboutTitle:", aboutTitle);
        console.log("aboutDescription:", aboutDescription);
        console.log("serviceTitle:", serviceTitle);
        console.log("serviceDescription:", serviceDescription);
        console.log("companyImage:", companyImage);
        console.log("setps:", steps);
        console.log("workingprocessImage:", workingprocessImage);
        console.log("title:", resultTitle);
        console.log("description:", resultDescription);
        console.log("tagLine:", resultTagline);
        console.log("resultImage:", resultImage);
        try {
            const formData = new FormData();
            formData.append("categoryId", props.categoryDetail?.categoryId?._id);
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
                        props.onHide();
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
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="tableModal"
        >
            <Modal.Body>
                <div className="closeModalBtn" onClick={props.onHide}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h4>Add Category Detail</h4>
                <div className="formBox">
                    <Form onSubmit={handleUpdate}>
                        <Form.Select
                            className="mb-3"
                            value={selectCategory}
                            onChange={(e) => setSelectCategory(e.target.value)}
                        >
                            <option selected>{props.categoryDetail?.categoryId?.name}</option>

                        </Form.Select>

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
            </Modal.Body>
        </Modal>
    );
}
