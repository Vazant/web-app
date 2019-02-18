import React, { Component } from "react";
import Navbar from "./Navbar";
import MyFooter from "./MyFooter";

export default class Home extends Component {
  render() {
    return (
      <body>
        <Navbar />
        <MyFooter />
      </body>
    );
  }
}
