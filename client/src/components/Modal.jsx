import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { useAuth } from "../utils/useAuth";

const registerUser = async (username, email, password) => {
    try {
        const res = await axios.post("/api/users", {
            username: username,
            email: email,
            password: password
        });
        if (res.status === 200) {
            console.log("registerUserServerRes", res.headers["x-auth-token"]);
            const token = res.headers["x-auth-token"];
            localStorage.setItem("token", token);
            return { serverResponse: true };
        }
    } catch (error) {
        console.log("registerUserServerErrorRes", error.response);
        let errorMessage = error.response.data;
        return { error: errorMessage, serverResponse: false };
    }
};

const loginUser = async (email, password) => {
    try {
        const res = await axios.post("/api/auth", {
            email: email,
            password: password
        });
        if (res.status === 200) {
            console.log("registerUserServerRes", res.headers["x-auth-token"]);
            const token = res.headers["x-auth-token"];
            localStorage.setItem("token", token);
            return { serverResponse: true };
        }
    } catch (error) {
        console.log("registerUserServerErrorRes", error.response);
        let errorMessage = error.response.data;
        return { error: errorMessage, serverResponse: false };
    }
};
const Modal = props => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userRegisterStatus, setUserRegisterStatus] = useState("");
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if (redirectToReferrer === true) {
            history.push("/home");
        }
    }, [redirectToReferrer]);

    const handleChange = e => {
        if (e.target.name === "username") setUsername(e.target.value);
        if (e.target.name === "email") setEmail(e.target.value);
        if (e.target.name === "password") setPassword(e.target.value);
    };

    const submitNewUser = async () => {
        const { serverResponse, error } = await registerUser(
            username,
            email,
            password
        );

        if (!serverResponse) {
            setUserRegisterStatus(error);
        } else if (serverResponse) {
            // auth.authenticate();
            setRedirectToReferrer(true);
        }
    };

    const routeSubmit = e => {
        e.preventDefault();

        if (props.title === "Log In") {
            loginExistingUser();
        }

        if (props.title === "Sign Up") {
            submitNewUser();
        }
    };

    const loginExistingUser = async e => {
        const { serverResponse, error } = await loginUser(email, password);
        if (!serverResponse) {
            setUserRegisterStatus(error);
        } else if (serverResponse) {
            // auth.authenticate();
            setRedirectToReferrer(true);
        }
    };

    const createInput = (stateField, fields) =>
        [fields].map(field => (
            <input
                type="text"
                name={field}
                field={field}
                value={stateField}
                className="modal-form-input"
                placeholder={field}
                onChange={handleChange}
            />
        ));

    const renderInputs = () => {
        return (
            <>
                {props.fields.includes("username") &&
                    createInput(username, ["username"])}
                {props.fields.includes("email") &&
                    createInput(email, ["email"])}
                {props.fields.includes("password") &&
                    createInput(password, ["password"])}
            </>
        );
    };

    return (
        <div>
            {/* <ModalOverlay /> */}
            <div className="modal">
                <div className="modal-header-section">
                    <div className="modal-exit-button">
                        <button
                            name={props.title}
                            style={{ background: "red" }}
                            onClick={props.onClick}
                        >
                            X
                        </button>
                    </div>
                    <h1 className="modal-title">{props.title}</h1>
                </div>
                <div className="modal-form-container">
                    <form className="modal-form" onSubmit={routeSubmit}>
                        {userRegisterStatus ? (
                            <span>
                                <p>{userRegisterStatus}</p>
                            </span>
                        ) : (
                            <> </>
                        )}
                        <>
                            {props.fields
                                ? renderInputs()
                                : console.log("no fields prop provided")}
                        </>

                        <button className="signup-button" type="submit">
                            {props.title
                                ? props.title.toUpperCase()
                                : console.log("no title prop provided")}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Modal;
