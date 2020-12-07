import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  onselected = (e) => {
    this.setState({
      name: [e.target.value],
    });
  };

  render() {
    return (
      <div>
        <Form.Group>
          {/* <input onChange={this.onselected}></input> */}
          <Form.Label>Answer 1</Form.Label>
          <Form.Control
            ref="myInput"
            required
            autoComplete={"off"}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onselected}
            // className={"bg-dark text-white"}
            placeholder="Enter answer"
          />
        </Form.Group>
        <Form.Group>
          {/* <input onChange={this.onselected}></input> */}
          <Form.Label>Answer 2</Form.Label>
          <Form.Control
            ref="myInput"
            required
            autoComplete={"off"}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onselected}
            // className={"bg-dark text-white"}
            placeholder="Enter answer"
          />
        </Form.Group>
        <Form.Group>
          {/* <input onChange={this.onselected}></input> */}
          <Form.Label>Answer 3</Form.Label>
          <Form.Control
            ref="myInput"
            required
            autoComplete={"off"}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onselected}
            // className={"bg-dark text-white"}
            placeholder="Enter answer"
          />
        </Form.Group>
        <Form.Group>
          {/* <input onChange={this.onselected}></input> */}
          <Form.Label>Answer 4</Form.Label>
          <Form.Control
            ref="myInput"
            required
            autoComplete={"off"}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onselected}
            // className={"bg-dark text-white"}
            placeholder="Enter answer"
          />
        </Form.Group>
      </div>
    );
  }
}

export default Child;
