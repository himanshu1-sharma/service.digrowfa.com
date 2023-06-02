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
import { faClose } from "@fortawesome/free-solid-svg-icons";

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
    const [editModalShow, setEditModalShow] = React.useState(false);
    const [deleteModalShow, setDeleteModalShow] = React.useState(false);

    const fetchCategory = async () => {
        try {
            await Axios.get(`${BASEURL}api/job/get-all-category`)
                .then(data => {
                    setData(data.data.data)
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleEdit = (e, f) => {
        setEditModalShow(true)
        setSelected(f)
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
        { title: "ID", field: "_id" },
        { title: "Icon", field: "image", render: (rowData) => (<img src={rowData.image} alt={rowData.name} className="img-fluid categoryTableIcon" />) },
        { title: "Name", field: "name" },
    ]



    return (
        <>
            <CategoryModal
                show={categoryModalShow}
                onHide={() => setCategoryModalShow(false)}
                setRender={setRender}
            />
            <EditCategoryModal
                show={editModalShow}
                onHide={() => setEditModalShow(false)}
                selected={selected}
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
                                handleEdit(e, rowData)
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

    const [categoryIcon, setCategoryIcon] = useState("")
    const [categoryName, setCategoryName] = useState("")

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        setCategoryIcon(file)
    }


    const handleCategorySubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append("image", categoryIcon)
            formData.append("name", categoryName)
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            console.log("formdata", formData)
            await Axios.post(`${BASEURL}api/job/create-category`, formData, config)
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
                        setCategoryIcon("")
                        setCategoryName("")
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
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='tableModal'
        >
            <Modal.Body>
                <div className="closeModalBtn" onClick={props.onHide}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h4>Add Category</h4>
                <div className="formBox">
                    <Form onSubmit={handleCategorySubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Icon</Form.Label>
                            <Form.Control
                                type="file"
                                name="file"
                                id="file"
                                onChange={(e) => uploadFileHandler(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Category Name"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                            />
                        </Form.Group>
                        <div className="formBtn">
                            <button type="submit">Add Category</button>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

function EditCategoryModal(props) {

    const [categoryIcon, setCategoryIcon] = useState("")
    const [categoryName, setCategoryName] = useState("")

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        setCategoryIcon(file)
    }


    const handleCategorySubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append("categoryId", props.selected?._id)
            formData.append("image", categoryIcon)
            formData.append("name", categoryName)
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            await Axios.patch(`${BASEURL}api/job/edit-category`, formData, config)
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
                        setCategoryIcon("")
                        setCategoryName("")
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
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='tableModal'
        >
            <Modal.Body>
                <div className="closeModalBtn" onClick={props.onHide}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <h4>Add Category</h4>
                <div className="formBox">
                    <Form onSubmit={handleCategorySubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Icon</Form.Label>
                            <Form.Control
                                type="file"
                                name="file"
                                id="file"
                                onChange={(e) => uploadFileHandler(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Category Name"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                            />
                        </Form.Group>
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
            await Axios.delete(`${BASEURL}api/job/delete-category/${props.selected?._id}`)
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