import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertBox from './AlertBox';
import { useHistory } from "react-router-dom";
import axios from 'axios';
// import './signupLoginBtns.css';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  
  let handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setMessage("Neither username nor password may be blank.");
}
else {
  let user = {
          username: username,
          password: password
      }
      axios.post(`/api/login`, user).then((data) => {
        if (!data.data.homeAddress.address) {
          window.location.replace("/addressform");
          //history.push("/addressform");
        } else {
          console.log("going home");
          window.location.replace("/");
          // history.push("/");
        }
      }).catch((err) => {
        if (err.message === "Request failed with status code 401") {
          setMessage("That username cannot be found.");
        } else {
          console.log(err);
        }
      })
    }
  }

  let goToSignup = (event) => {
    event.preventDefault();
    window.location.replace("/signup");
  }
  useEffect(() => {
    if (message !== "") {
      setMessage("");
    }
  }, [username, password])

  const devLogin = () => {
    axios
      .post(`/api/login`, { username: "test", password: "test" })
      .then(() => window.location.replace("/"));
  };


  return (
    <>
    {/* <BackgroundVideo /> */}

    <div className='container'>
    <div className='row'>

      <Form className='col-md-12'>

        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name='username'
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder=""
            id="username"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="password"
            name='password'
            id="password"
          />
        </Form.Group>

        <Button className='signupLoginBtns' onClick={handleSubmit} variant="primary" type="submit">
          Log In
        </Button>
        <Button className='signupLoginBtns' onClick={goToSignup} variant="danger" type="submit">
          Go to Sign Up Form
        </Button>
        {/* <Button onClick={devLogin}>DEV LOGIN</Button> */}
        <AlertBox
          message={message}
        />
      </Form>
    </div>
    </div>
    </>
  )
}

export default Login;