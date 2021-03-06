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
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Orders from "views/examples/Orders.js";
import Order from "views/examples/Order.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Products from "views/examples/Products.js";
import Icons from "views/examples/Icons.js";
import Chatbot from "views/examples/Chatbot.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    showOnSideBar: true
  },
  {
    path: "/icons",
    name: "Chatbot",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
    showOnSideBar: false
  },
  {
    path: "/chatbot",
    name: "Chatbot",
    icon: "ni ni-planet text-blue",
    component: Chatbot,
    layout: "/admin",
    showOnSideBar: true
  },
  {
    path: "/user-profile",
    name: "Clients",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
    showOnSideBar: true
  },
  {
    path: "/products",
    name: "Products",
    icon: "ni ni-bullet-list-67 text-red",
    component: Products,
    layout: "/admin",
    showOnSideBar: true
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "ni ni-shop text-orange",
    component: Orders,
    layout: "/admin",
    showOnSideBar: true
  },
  {
    path: "/order",
    name: "Order",
    icon: "ni ni-shop text-orange",
    component: Order,
    layout: "/admin",
    showOnSideBar: true
  },
  {
    path: "/login",
    name: "Safety",
    icon: "ni ni-credit-card text-pink",
    component: Login,
    layout: "/auth",
    showOnSideBar: false
  },
  {
    path: "/register",
    name: "Sign out",
    icon: "ni ni-button-power text-info",
    component: Register,
    layout: "/auth",
    showOnSideBar: true
  }
];
export default routes;
