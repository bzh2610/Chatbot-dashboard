import React from "react";


const hottestProducts = [
    {
      "id": "1",
      "name": "iPad Pro 2020 128Gb Silver",
      "active": true,
      "illustration": "./theme/bootstrap.jpg",
      "price": 118900,
      "currency": "eur",
      "inventory": {
        "type": "finite",
        "quantity": 23
      },
      "sales": 4658,
      "bounceRate": 4653
    },
    {
      "id": "22",
      "name": "IKEA lamp LIDARE",
      "active": true,
      "illustration": "./theme/bootstrap.jpg",
      "price": 1890,
      "currency": "eur",
      "inventory": {
        "type": "finite",
        "quantity": 213
      },
      "sales": 5658,
      "bounceRate": 4623
    },
    {
      "id": "363",
      "name": "iPhone SE 2020, 64Gb RED",
      "active": true,
      "illustration": "./theme/bootstrap.jpg",
      "price": 78900,
      "currency": "eur",
      "inventory": {
        "type": "finite",
        "quantity": 12
      },
      "sales": 1208,
      "bounceRate": 6653
    },
    {
      "id": "71",
      "name": "MacBook Air 2020 256Gb, gold",
      "active": true,
      "illustration": "./theme/bootstrap.jpg",
      "price": 123900,
      "currency": "eur",
      "inventory": {
        "type": "finite",
        "quantity": 23
      },
      "sales": 568,
      "bounceRate": 7553
    },
    {
      "id": "41",
      "name": "Airpods",
      "active": true,
      "illustration": "./theme/bootstrap.jpg",
      "price": 17900,
      "currency": "eur",
      "inventory": {
        "type": "finite",
        "quantity": 460
      },
      "sales": 7658,
      "bounceRate": 3650,
    }
  ]
  
  function getHottestProducts(){
    return hottestProducts;
  }
  function HottestProductsRows() {
    const array = getHottestProducts();
    const showTeam = true;
    const listItems = [];
  
    array.forEach(element => {
      let status = "Enabled";
      if (element.active === false) {
        status = "Disabled";
      }
  
      let stockLevel = 100;
      var bounceRateStatus = "text-success";
  
        const bounceRate = element.bounceRate/100.0;
        if (bounceRate > 70) {
          bounceRateStatus = "text-danger";
        } else if (bounceRate > 50) {
          bounceRateStatus = "text-warning";
        }
    
  
      listItems.push(
        <tr>
        <th scope="row">{element.name}</th>
        <td>{element.sales}</td>
        <td>{element.inventory.quantity}</td>
        <td>
          <i className={"fas fa-arrow-" + (bounceRate > 50 ? "up" : "down")+" "+bounceRateStatus+" mr-3"}
          ></i>
           {" "}
          {(element.bounceRate/100.00).toFixed(2)}
        </td>
      </tr>
  
      );
    });
  
    return ( listItems );
  }

  export default HottestProductsRows;