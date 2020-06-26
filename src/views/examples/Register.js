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
import React, { useState, useEffect } from "react";

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
import { PushSpinner } from "react-spinners-kit";
import { Redirect } from "react-router-dom";

import fetchApiKey from "components/Auth/apiKey.js";
import generateId from "../../components/Auth/signup.js";

import { useAuth } from "../../context/auth";

function Register(){


  const [error, setError] = useState(null);
  const [apiKey, setApiKey] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [signInProgress, setsignInProgress] = useState(false);
 
  //Authentication router
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [fullname, setFullname] = useState("John Doe");
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("••••••••••");
  const { setAuthTokens } = useAuth();

  const onLoad = false;

  //On page load, we need to fetch the API key
  //in order to make requests to the API.
  //The onLoad constant is used only to make sure
  //that this call only takes place once (on page load).
  useEffect(() => {
    fetchApiKey(apiKeyResponse);
  }, [onLoad]);

  //Set API key if retrieved, otherwise, print out an error.
  function apiKeyResponse(apiKey = null, error = null, message = null) {
    if (error == null) {
      setIsLoaded(true);
      setApiKey(apiKey);
    } else {
      setIsLoaded(true);
      setErrorMessage("Failed to retrieve API Key. Please refresh this page.")
    }
  }

  //These functions update the content of email
  //and password varaibles when the change.
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePwdChange(event) {
    setPassword(event.target.value);
  }
  function handleNameChange(event) {
    setFullname(event.target.value);
  }
  

  function handleSubmit(event) {
    setsignInProgress(true);
    event.preventDefault();
  
    fetch("http://localhost:3000/v1/signup/basic", prepareSignupRequest())
      .then(res => {
        //Status code can be retrieved here
        // 200 :OK
        // 400, 500 : ERROR
        //console.log(res); 
        return res.json();
      })
      .then(
        (result) => {
          //Sign in OKAY
          if (result.statusCode === "10000") {
            setAuthTokens(result.data.tokens.accessToken);
            setRedirect(true);
          }
          // Sign in failure
          else {
            setErrorMessage("Error, you email or password is incorrect");
            setsignInProgress(false);
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
          setsignInProgress(false);
        }
      )
  }


  //Create the request body and headers.
  function prepareSignupRequest(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", apiKey);

    var raw = JSON.stringify({
      "name": fullname,
      "email": email,
      "password": password,
      "profilePicUrl": "https://avatar.lisk.ws/" + generateId(32)
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return requestOptions;
  }









  //Rendering.
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (redirect) {
    return <Redirect to="/admin/index" />
  } else {


    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
             <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign up</small>
                <br></br>
                <small>{errorMessage}</small>
              </div>
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={handleNameChange}
                      value={fullname}
                      placeholder="Name" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={handleEmailChange}
                      value={email}
                      placeholder="Email" type="email" autoComplete="new-email"/>
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
                       placeholder="Password" type="password" autoComplete="new-password"/>
                  </InputGroup>
                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button onClick={handleSubmit}
                    className="mt-4" color="primary" type="button">
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
