import React, { useState } from 'react';
import axios from 'axios';

import { useHistory, Redirect } from "react-router-dom";


const registerUser = async (username, email, password) => {
  try {
    const res = await axios.post('/api/users', { username: username, email: email, password: password });
    if (res.status === 200) {
      console.log(res);
      return { serverResponse: true };
    };
  } catch (error) {
    console.log(error.response);
    let errorMessage = error.response.data;
    return { error: errorMessage, serverResponse: false };
  }
}


const Modal = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRegisterStatus, setUserRegisterStatus] = useState('');

  let history = useHistory();

  const redirectToBrowsePage = () => {
    history.push('/browse');
  }

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const { serverResponse, error } = await registerUser(username, email, password);
    if (!serverResponse) {
      setUserRegisterStatus(error);
    } else if (serverResponse) {
      setTimeout(() => {
        redirectToBrowsePage();
      }, 1000);
      setUserRegisterStatus("User created successfully!");
    }
  }

  return (
    <div className="modal">
      <div className="modal-header-section">
        <div className="modal-exit-button">
          <button style={{ background: 'red' }} onClick={props.onClick}>X</button>
        </div>
        <h1 className="modal-title">Sign Up</h1>
      </div>
      <div className="modal-form-container">
        <form className="modal-form" onSubmit={onSubmit}>
          {userRegisterStatus ? <span><p>{userRegisterStatus}</p></span> : <> </>}
          <input type="text" name="username" username="username" value={username} className="modal-form-input" placeholder="username" onChange={handleUsername} />
          <input type="text" name="email" email="email" className="modal-form-input" placeholder="email address" onChange={handleEmail} />
          <input type="text" name="password" password="password" className="modal-form-input" placeholder="password" onChange={handlePassword} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
export default Modal;
