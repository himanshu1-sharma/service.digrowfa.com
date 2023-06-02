import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./CommonForm.css";
import { BASEURL } from "../../../Constant";
import Axios from "axios";
import SweetAlert from 'react-bootstrap-sweetalert';

const CommonForm = () => {
    const [categoryData, setCategoryData] = useState();
    const [input, setInput] = useState({});
    const [category, setCategory] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const fetchCategoryData = async () => {
        await Axios.get(`${BASEURL}api/category/get-all-category`).then((data) => {
            setCategoryData(data.data.data);
        });
    };

    // console.log("categoryData", categoryData)

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput({ ...input, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("name", input.name);
        // console.log("email", input.email);
        // console.log("phone", input.phone);
        // console.log("category", category);
        // console.log("message", input.message);
        await Axios.post(`${BASEURL}api/contact/add-contact`, {
            name: input.name,
            email: input.email,
            phone: input.phone,
            category: category,
            message: input.message
        })
            .then(data => {
                if (data.data.errorcode === 0) {
                    setInput({})
                    setCategory("")
                    setShowAlert(true);
                }
                else if (data.data.errorcode === 2) {
                    setShowErrorAlert(true)
                }
            })
    };

    const handleHideAlert = () => {
        setShowAlert(false);
        setShowErrorAlert(false)
    };


    useEffect(() => {
        fetchCategoryData();
    }, []);

    return (
        <>
            <SweetAlert
                success
                show={showAlert}
                title="Thank You"
                onConfirm={handleHideAlert}
            >
                <p>For Contacting Us  shortly Our Team Member Will connect with you  </p>
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
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    id="name"
                                    name="name"
                                    value={input.name}
                                    onChange={handleInput}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={input.email}
                                    onChange={handleInput}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="number"
                                    placeholder="Phone"
                                    id="phone"
                                    name="phone"
                                    value={input.phone}
                                    onChange={handleInput}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form.Group className="mb-3">
                                <Form.Select
                                    aria-label="Default select example"
                                    id="category"
                                    name="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option>Choose Category</option>
                                    {categoryData?.map((curCategory) => {
                                        return (
                                            <>
                                                <option value={curCategory?.name}>
                                                    {curCategory?.name}
                                                </option>
                                            </>
                                        );
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    cols={10}
                                    placeholder="Message"
                                    id="message"
                                    name="message"
                                    value={input.message}
                                    onChange={handleInput}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <button type="button" onClick={handleSubmit}>
                                Send Message
                            </button>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default CommonForm;
