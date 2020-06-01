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
import React, { useEffect, useState } from "react";
import DragNDrop from '../../components/Product/DragNDrop.js';
import Subcategories from '../../components/Product/Subcategories.js';
import getCategories from '../../components/Product/categories.js'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";


const categories = getCategories()

function SelectCategory() {
  let options = [];

  for (const [key, value] of Object.entries(categories)) {
    options.push(<option value={key}>{key}</option>)
  }
  return (options);

}




class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { sub: 'tablets' };
    this.changeCategory = this.changeCategory.bind(this);
    this.subcategoryElement = React.createRef();
  }

  changeCategory(event) {
    // parent class change handler is always called with field name and value
    this.subcategoryElement.current.resetState()
    this.setState({ sub: event.target.value });
    console.log("set : " + event.target.value);

  }


  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1 offset-xl-1" xl="10">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Product</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Save
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Product information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Product name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Premium plan, sunglasses, ..."
                              type="text"
                            />
                          </FormGroup>


                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Description
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="Glasses with a wood branch"
                              type="text"
                            />
                          </FormGroup>




                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Product image
                            </label>
                            <DragNDrop />
                          </FormGroup>
                        </Col>
                      </Row>


                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Features
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="category"
                            >
                              Category
                            </label>
                            <select className="custom-select form-control-alternative"
                              id="category"
                              type="text"
                              onChange={this.changeCategory}
                              value={this.state.sub}
                            >
                              <SelectCategory></SelectCategory>
                            </select>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Subcategories ref={this.subcategoryElement} category={this.state.sub}></Subcategories>

                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source."
                          type="textarea"
                        />
                      </FormGroup>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
