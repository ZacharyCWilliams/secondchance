import ModalOverlay from "./ModalOverlay";
import React, { useState } from "react";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import { auth } from "../../src/App";
import { useEffect } from "react";

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

    const onSubmit = async e => {
        e.preventDefault();
        const { serverResponse, error } = await registerUser(
            username,
            email,
            password
        );

        if (!serverResponse) {
            setUserRegisterStatus(error);
        } else if (serverResponse) {
            auth.authenticate();
            setRedirectToReferrer(true);
        }
    };

    return (
        <div>
            <ModalOverlay />
            <div className="modal">
                <div className="modal-header-section">
                    <div className="modal-exit-button">
                        <button
                            style={{ background: "red" }}
                            onClick={props.onClick}
                        >
                            X
                        </button>
                    </div>
                    <h1 className="modal-title">Sign Up</h1>
                </div>

                {/* SIGN UP FORM MODAL*/}
                <div className="modal-form-container">
                    <form className="modal-form" onSubmit={onSubmit}>
                        {userRegisterStatus ? (
                            <span>
                                <p>{userRegisterStatus}</p>
                            </span>
                        ) : (
                            <> </>
                        )}
                        <input
                            type="text"
                            name="username"
                            username="username"
                            value={username}
                            className="modal-form-input"
                            placeholder="username"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="email"
                            email="email"
                            className="modal-form-input"
                            placeholder="email address"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="password"
                            password="password"
                            className="modal-form-input"
                            placeholder="password"
                            onChange={handleChange}
                        />
                        <button className="signup-button" type="submit">
                            SIGN UP
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Modal;
