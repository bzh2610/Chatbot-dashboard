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
import React, {useState, setState} from "react";
import ReactDOM from "react-dom";
import { PushSpinner } from "react-spinners-kit";
import { Redirect } from "react-router-dom";

import fetchApiKey from "components/Auth/apiKey.js";
import generateId from "../../components/Auth/signup.js";

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


class Login extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      email: "test@example.com",
      password: "•••••••••",
      apiKey: null,
      signInProgress: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setApiKey = this.setApiKey.bind(this);
  }

  componentDidMount(){
    fetchApiKey(this.setApiKey);
  }

  setApiKey(apiKey = null, error = null, message = null){
    if(error == null){
      this.setState({
        isLoaded: true,
        apiKey: apiKey
      });
    }else{
      this.setState({
        isLoaded: true,
        error: error
      });
    }
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(value)
  }



  handleSubmit(event){
    this.setState({
      signInProgress: true
    })
    event.preventDefault();
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", this.state.apiKey);

var raw = JSON.stringify({
  "name": "Sample user",
  "email": this.state.email,
  "password": this.state.password,
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
    this.setState({
      signInProgress: false
    });

    if(result.statusCode === "10000"){ //Sign in OKAY

    }else{ // Sign in failure

    }
    this.props.history.push('/admin/');
  },
  // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.
  (error) => {

    this.setState({
      error,
      signInProgress: false
    });
  }
)

  }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

    return (
      <>
      
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in</small>
              </div>
              <Form role="form" onSubmit={this.handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input  onChange={this.handleInputChange}
                      value={this.state.email}
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
                    <Input onChange={this.handleInputChange}
                     value={this.state.password}
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
                  onClick={this.handleSubmit} >
                    Sign in
                  </Button>
                  <PushSpinner loading={this.state.signInProgress} size={30} color="#686769"></PushSpinner>

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
}

export default Login;
