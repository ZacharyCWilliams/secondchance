import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const registerUser = async (username, email, password) => {
  try {
    const res = await axios.post("/api/users", {
      username,
      email,
      password
    });
    
    if (res.status === 200) {
      console.log(res);
      return { serverResponse: true };
    }
  } catch (error) {
    console.log(error.response);
    let errorMessage = error.response.data;
    return { error: errorMessage, serverResponse: false };
  }
};

const Modal = ({ onClick }) => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [userRegisterStatus, setUserRegisterStatus] = useState("");

  let history = useHistory();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { serverResponse, error } = await registerUser(formData.username, formData.email, formData.password);
    if (!serverResponse) {
      setUserRegisterStatus(error);
    } else {
      setUserRegisterStatus("User created successfully!");
      setTimeout(() => {
        history.push("/browse");
      }, 1000);
    }
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-header-section">
          <div className="modal-exit-button">
            <button style={{ background: "red" }} onClick={onClick}>
              X
            </button>
          </div>
          <h1 className="modal-title">Sign Up</h1>
        </div>
        <div className="modal-form-container">
          <form className="modal-form" onSubmit={onSubmit}>
            {userRegisterStatus && <p>{userRegisterStatus}</p>}
            <input
              type="email"
              name="email"
              className="modal-form-input"
              placeholder="Email address"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              className="modal-form-input"
              placeholder="Password"
              onChange={handleInputChange}
            />
            <button className="signup-button" type="submit">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
