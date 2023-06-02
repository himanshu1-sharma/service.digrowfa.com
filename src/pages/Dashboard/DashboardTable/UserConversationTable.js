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
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import SweetAlert from "react-bootstrap-sweetalert";

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
    const [render, setRender] = useState(false);
    const [selected, setSelected] = useState();
    const [chatModal, setChatModal] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    const fetchCategory = async () => {
        try {
            await Axios.get(`${BASEURL}api/conversation/get-user-conversation`).then(
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
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Number", field: "number" },
        { title: "Whatsapp", field: "whatsapp" },
        { title: "Category", field: "categoryName" },
        {
            title: "Date",
            field: "date",
            render: (rowData) => moment(rowData.created_ts).format("LLLL"),
        },
        {
            title: "Status",
            field: "statusTag",
            render: (rowData) => {
                return (
                    <>
                        <div className="statusTag">
                            {rowData.status === "Not Interested" ?

                                <button className="notInterested">Not Interested</button>

                                :
                                rowData.status === "Converted" ?

                                    <button className="converted">Converted</button>

                                    :

                                    rowData.status === "Ongoing" ?
                                        <button className="ongoing">Ongoing</button>
                                        :

                                        <button className="pending">Pending</button>


                            }




                        </div>
                    </>
                )
            },
        },
        { title: "Status Message", field: "statusMessage" },
        {
            title: "Action",
            field: "date",
            render: (rowData) => {
                // console.log("rowData", rowData)
                return (
                    <>
                        <div className="dashboardAction">
                            <button
                                className="view"
                                onClick={() => {
                                    setSelected(rowData._id);
                                    setChatModal(true);
                                }}
                            >
                                View Chat
                            </button>
                            <button
                                className="action"
                                onClick={() => {
                                    setSelected(rowData._id);
                                    setModalShow(true);
                                }}
                            >
                                Action
                            </button>
                        </div>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <UserChatModal
                show={chatModal}
                onHide={() => setChatModal(false)}
                selected={selected}
                data={data}
            />
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                selected={selected}
                data={data}
                setRender={setRender}
            />
            <MaterialTable
                title="User Coversation"
                icons={tableIcons}
                data={data}
                columns={columns}
                options={{
                    actionsColumnIndex: -1,
                    addRowPosition: "first",
                    pageSize: 10,
                }}
            />
        </>
    );
};

export default Table;

function UserChatModal(props) {
    // console.log(props)
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="userChatModal"
        >
            <Modal.Body>
                {props.data?.map((curElt) => {
                    if (curElt._id === props.selected) {
                        return (
                            <>
                                <div className="conversationBox">
                                    <div className="question">
                                        <div className="messageBox">
                                            <p>{curElt.question1?.question}</p>
                                        </div>
                                    </div>
                                    <div className="answer">
                                        <div className="messageBox">
                                            <p>{curElt.question1?.answer}</p>
                                        </div>
                                    </div>
                                    <div className="question">
                                        <div className="messageBox">
                                            <p>{curElt.question2?.question}</p>
                                        </div>
                                    </div>
                                    <div className="answer">
                                        <div className="messageBox">
                                            <p>{curElt.question2?.answer}</p>
                                        </div>
                                    </div>
                                    <div className="question">
                                        <div className="messageBox">
                                            <p>{curElt.question3?.question}</p>
                                        </div>
                                    </div>
                                    <div className="answer">
                                        <div className="messageBox">
                                            <p>{curElt.question3?.answer?.businessName}</p>
                                        </div>
                                    </div>
                                    <div className="question">
                                        <div className="messageBox">
                                            <p>{curElt.question4?.question}</p>
                                        </div>
                                    </div>
                                    <div className="answer">
                                        <div className="messageBox">
                                            <p>{curElt.question4?.answer}</p>
                                        </div>
                                    </div>
                                    <div className="question">
                                        <div className="messageBox">
                                            <p>{curElt.question5?.question}</p>
                                        </div>
                                    </div>
                                    <div className="answer">
                                        <div className="messageBox">
                                            <p>{curElt.question5?.answer}</p>
                                        </div>
                                    </div>
                                    <div className="question">
                                        <div className="messageBox">
                                            <p>{curElt.question6?.question}</p>
                                        </div>
                                    </div>
                                    <div className="answer">
                                        <div className="messageBox">
                                            <p>{curElt.question6?.answer?.aboutBusiness}</p>
                                        </div>
                                    </div>
                                    <div className="question">
                                        <div className="messageBox">
                                            <p>{curElt.question7?.question}</p>
                                        </div>
                                    </div>
                                    <div className="answer">
                                        <div className="messageBox">
                                            <p>{curElt.question7?.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    }
                })}
            </Modal.Body>
        </Modal>
    );
}

function MyVerticallyCenteredModal(props) {
    const [status, setStatus] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const handleChangeStatus = async (e) => {
        e.preventDefault();
        console.log("status", status);
        console.log("statusMessage", statusMessage);
        await Axios.post(`${BASEURL}api/conversation/update-user-conversation`, {
            _id: props.selected,
            status: status,
            statusMessage: statusMessage,
        }).then((data) => {
            if (data.data.errorcode === 0) {
                props.onHide();
                setShowAlert(true);
                props.setRender(true);
                setStatus("");
                setStatusMessage("");
            } else {
                setShowErrorAlert(true);
            }
        });
    };

    const handleHideAlert = () => {
        setShowAlert(false);
        setShowErrorAlert(false);
    };

    return (
        <>
            <SweetAlert
                success
                show={showAlert}
                title="Well Done"
                onConfirm={handleHideAlert}
            >
                <p>Conversation Status Changed Successfully</p>
            </SweetAlert>
            <SweetAlert
                danger
                show={showErrorAlert}
                title="Ohh!"
                onConfirm={handleHideAlert}
            >
                <p>Something Went Worng</p>
            </SweetAlert>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="statusModal"
            >
                <Modal.Body>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {props.data?.map((curElt) => {
                                if (curElt._id === props.selected) {
                                    return <>Take Action On {curElt?.name}</>;
                                }
                            })}
                        </Modal.Title>
                    </Modal.Header>
                    <div className="formContent mt-5">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Select
                                    aria-label="Default select example"
                                    id="status"
                                    name="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option>Choose Category</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Converted">Converted</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="Not Interested">Not Interested</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    cols={10}
                                    placeholder="Message"
                                    name="message"
                                    id="message"
                                    value={statusMessage}
                                    onChange={(e) => setStatusMessage(e.target.value)}
                                />
                            </Form.Group>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button type="button" onClick={handleChangeStatus}>
                                        Take Action
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
