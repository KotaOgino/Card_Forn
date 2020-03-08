import React from "react";
import Form from "./Form";
import Card from "./Card";

export default class Layout extends React.Component {
  // constructor() {
  //   super();
  //   this.name = "Tsutomu";
  // }
  render() {
    return (
      <div>
      <Card />
      <Form />
      </div>
    );
  }
}
