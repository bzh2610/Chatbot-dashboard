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
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

function getProducts() {
  const products = [
    {
      "id": "1",
      "name": "Argon Design System",
      "active": true,
      "illustration": "./theme/bootstrap.jpg",
      "price": 2500,
      "currency": "usd",
      "inventory": {
        "type": "finite",
        "quantity": 23
      },
    },
    {
      "id": "2",
      "name": "Angular",
      "active": false,
      "illustration": "./theme/angular.jpg",
      "price": 2000,
      "currency": "usd",
      "inventory": {
        "type": "finite",
        "quantity": 90
      },
    },
    {
      "id": "3",
      "name": "Sketch",
      "active": true,
      "illustration": "./theme/sketch.jpg",
      "price": 1950,
      "currency": "usd",
      "inventory": {
        "type": "finite",
        "quantity": 19
      },
    },
    {
      "id": "4",
      "name": "React",
      "active": true,
      "illustration": "./theme/react.jpg",
      "price": 1950,
      "currency": "usd",
      "inventory": {
        "type": "infinite"
      },
    },
    {
      "id": "5",
      "name": "Vue",
      "active": true,
      "illustration": "./theme/vue.jpg",
      "price": 1550,
      "currency": "usd",
      "inventory": {
        "type": "finite",
        "quantity": 56
      },
    }
  ];
  return products;
}
function ProductList() {
  const array = getProducts();
  const showTeam = true;
  // Require context image folder
  const imagess = require.context('../../assets/img', true);
  const listItems = [];

  array.forEach(element => {
    let imgsrc = imagess(`${element.illustration}`);
    let status = "Enabled";
    if (element.active === false) {
      status = "Disabled";
    }

    let stockLevel = 100;
    var stockLevelStatus = "bg-success";

    if (element.inventory.type === 'finite') {
      const qt = element.inventory.quantity;
      if (qt < 20) {
        stockLevel = 10;
        stockLevelStatus = "bg-danger";
      } else if (qt < 50) {
        stockLevel = 40;
        stockLevelStatus = "bg-warning";
      }
      else {
        stockLevel = 100;
        stockLevelStatus = "bg-success";
      }
    }

    listItems.push(

      <tr>
         <td>26-10-2020</td>
        <th scope="row">
          <Media className="align-items-center">
            {
              /*<a
              className="avatar rounded-circle mr-3"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <img
                alt="..."
                src={imgsrc}
              />
            </a>
            */}
            <Media>
              <span className="mb-0 text-sm">
                {element.name}
              </span>
            </Media>
          </Media>
        </th>
        <td>{(element.price / 100.00).toFixed(2)} USD</td>
        <td>
          <Badge color="" className="badge-dot mr-4">
            <i className={element.active ? 'bg-success' : 'bg-warning' /*bg-info, bg-danger*/} />
            {element.active ? 'Enabled' : 'Disabled'}
          </Badge>
        </td>
        {
          showTeam ? <td>
            <div className="avatar-group">
              <a
                className="avatar avatar-sm"
                href="#pablo"
                id="tooltip742438047"
                onClick={e => e.preventDefault()}
              >
                <img
                  alt="..."
                  className="rounded-circle"
                  src={require("assets/img/theme/vue.jpg")}
                />
              </a>
              <UncontrolledTooltip
                delay={0}
                target="tooltip742438047"
              >
                Ryan Tompson
                          </UncontrolledTooltip>
              <a
                className="avatar avatar-sm"
                href="#pablo"
                id="tooltip941738690"
                onClick={e => e.preventDefault()}
              >
                <img
                  alt="..."
                  className="rounded-circle"
                  src={require("assets/img/theme/angular.jpg")}
                />
              </a>
              <UncontrolledTooltip
                delay={0}
                target="tooltip941738690"
              >
                Romina Hadid
                          </UncontrolledTooltip>
              <a
                className="avatar avatar-sm"
                href="#pablo"
                id="tooltip804044742"
                onClick={e => e.preventDefault()}
              >
                <img
                  alt="..."
                  className="rounded-circle"
                  src={require("assets/img/theme/sketch.jpg")}
                />
              </a>
              <UncontrolledTooltip
                delay={0}
                target="tooltip804044742"
              >
                Alexander Smith
                          </UncontrolledTooltip>

            </div>

          </td>
            : ''
        }
      
        <td className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              href="#pablo"
              role="button"
              size="sm"
              color=""
              onClick={e => e.preventDefault()}
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Action
        </DropdownItem>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Another action
        </DropdownItem>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Something else here
        </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    );
  });
  return (
    listItems
  )
}

const darkMode = false;

class Order extends React.Component {
  render() {
    return (
      <>
        <Header/>
        {/* Page content */}
        <Container className="mt-7" fluid>
          {/* Table */}
          <Row>
            
            <div className="col">
              <Card className={!darkMode ? "shadow" : "bg-default shadow"}>
                <CardHeader className={!darkMode ? "border-0" : "bg-transparent border-0"}>
                  <h3 className={!darkMode ? "mb-0" : "text-white mb-0"}>Order n°8912</h3>
                  <div style={{display: 'inline-block', width: '50%', verticalAlign: 'top'}}>
                  <p className="pt-4">
                    <b>Sender :</b><br/>
                    GAC,<br/>
                    Mathildelaan 8<br/>
                    5812KR TILBURG<br/>
                    NETHERLANDS
                  </p>
                  </div>

                  <div style={{display: 'inline-block', width: '50%'}}>
                  <p className="pt-7">
                    <b>Customer :</b><br/>
                    John Doe,<br/>
                    Kastanjelaan 1-12<br/>
                    5616LH Eindhoven<br/>
                    NETHERLANDS
                  </p>
                  </div>
                </CardHeader>
                <Table className={!darkMode ? "align-items-center table-flush" : "align-items-center table-dark table-flush"}
                  responsive>
                  <thead className={!darkMode ? "thead-light" : "thead-dark"}>
                    <tr>
                     <th scope="col">Date</th>
                      <th scope="col">Order</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Products</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <ProductList></ProductList>

                  </tbody>
                </Table>
                <CardFooter className={!darkMode ? "py-4" : "py-4 bg-default "}>
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Order;
