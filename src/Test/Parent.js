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
  

  handleChange(i, e) {
    this.setState({
      names: { ...this.state.names, [i]: e.target.value },
    });
  }
  submitChange = (event) => {
    event.preventDefault();
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
