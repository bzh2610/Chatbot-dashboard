/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState, setState, useEffect} from "react";
import ReactDOM from "react-dom";
import { PushSpinner } from "react-spinners-kit";
import { Redirect } from "react-router-dom";

import fetchApiKey from "components/Auth/apiKey.js";
import generateId from "../../components/Auth/signup.js";

//import { useHistory } from "react-router-dom";
import { Router, browserHistory } from 'react-router'
import { useAuth } from "../../context/auth";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";


function Login(props){

  const {error} = useState(null);
  const [ apiKey, setApiKey ] = useState(null);

  const [ isLoaded, setIsLoaded] = useState(false);
  const [ signInProgress, setsignInProgress] = useState(false);
  //Authentication router
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [redirect, setRedirect ] = useState(false);
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("••••••••••");
  const { setAuthTokens } = useAuth();

  const onLoad = false;
/*

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setApiKey = this.setApiKey.bind(this);  
    //this.setAuthTokens = useAuth.bind(this);
*/
    useEffect(() => {
      fetchApiKey(apiKeyResponse);
    }, [onLoad]);

 function apiKeyResponse(apiKey = null, error = null, message = null){
    if(error == null){
 
        setIsLoaded(true);
        setApiKey(apiKey);
    
    }else{
      setIsLoaded(true);
//      this.setState({
 //       isLoaded: true,
 //       error: error
  //    });
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePwdChange(event) {
    setPassword(event.target.value);
  }


  function handleSubmit(event){
    setsignInProgress(true);
    //this.setState({
    //  signInProgress: true
    //})
    event.preventDefault();
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", apiKey);

var raw = JSON.stringify({
  "name": "Sample user",
  "email": email,
  "password": password,
  "profilePicUrl": "https://avatar.lisk.ws/"+ generateId(32)
});

console.log(raw);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


fetch("http://localhost:3000/v1/signup/basic", requestOptions)
.then(res => {
  console.log(res); //Status code can be retrieved here
  return res.json();
})
.then(
  (result) => {


   
    if(result.statusCode === "10000"){ //Sign in OKAY
      setAuthTokens("test");
      setLoggedIn("true");
      setRedirect(true);
      
     console.log(result.data);
    }else{ // Sign in failure
      setsignInProgress(false);
    }
    
 
  },
  // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.
  (error) => {
/*
    this.setState({
      error,
      signInProgress: false
    });*/
  }
)

  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if(redirect){
    return  <Redirect to="/admin/index"/> 
  }else {
  return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in</small>
              </div>
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input  onChange={handleEmailChange}
                      value={email}
                      name="email" placeholder="Email" type="email" autoComplete="new-email"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={handlePwdChange}
                     value={password}
                     name="password" placeholder="Password" type="password" autoComplete="new-password"/>
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button"
                  onClick={handleSubmit} >
                    Sign in
                  </Button>
                  <PushSpinner loading={signInProgress} size={30} color="#686769"></PushSpinner>

                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="/auth/register"
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
    }
  }

export default Login;
