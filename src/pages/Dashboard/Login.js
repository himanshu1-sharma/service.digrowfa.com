import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo/digrowfaWhiteLogo.png";
import Form from "react-bootstrap/Form";
import "./Dashboard.css";
import { BASEURL } from "../../Constant";
import { UserState } from "../../Context"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const { user, setUser } = UserState()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await Axios.post(`${BASEURL}api/admin/admin-login`, { email, password })
                .then(data => {
                    if (data.data.errorcode === 0) {
                        toast.success(`${data.data.message}`, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        setUser(data.data.data)
                        localStorage.setItem('userInfo', JSON.stringify(data.data.data))
                        navigate("/admin/dashboard")
                    }
                    else {
                        toast.error(`${data.data.message}`, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    console.log("user", user)

    return (
        <>
            <ToastContainer />
            <section className="container-fluid p-0">
                <div className="homeHeaderBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="homeLogo">
                                    <NavLink to="/">
                                        <img src={logo} alt="digrowfa_logo" className="img-fluid" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="homeHeaderContent form">
                                    <div className="formBox">
                                        <Form onSubmit={handleLogin}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Enter email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </Form.Group>
                                            <div className="formBtn">
                                                <button type="submit">Login</button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homeHeaderBgAnimation">
                        <ul className="confetti">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
