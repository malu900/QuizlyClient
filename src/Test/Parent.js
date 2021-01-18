import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Child from "./Child";

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      names: [],
      childs: [],
    };
  }
  // handleSelect = (selectedValue) => {
  //   this.setState({
  //     name: selectedValue,
  //   });
  //   let namess = {
  //     names: [...this.state.childs, selectedValue],
  //   };
  //   console.log(namess);
  // };
  // componentDidUpdate() {
  //   console.log("Parent: " + this.state.names);
  // }

  // submitChange = (e) => {
  //   e.preventDefault();

  //   // childs: [...this.state.childs, selectedValue],
  // };

  handleChange(i, e) {
    console.log(i, e);
    this.setState({
      names: { ...this.state.names, [i]: e.target.value },
    });
    console.log(this.state.names);
  }
  submitChange = (event) => {
    event.preventDefault();
    console.log(this.state.names);
  };

  render() {
    return (
      <Form>
        <Child />
        <Button onClick={this.submitChange} type="submit">
          test
        </Button>
      </Form>
    );
  }
}

export default Parent;
