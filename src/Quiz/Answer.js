import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      RightAnswer: false,
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  sendData = () => {
    this.props.parentCallBack("test");
  };
  render() {
    return (
      <div>
        <Form.Label>Answer 1</Form.Label>
        <Form.Control
          required
          autoComplete={"off"}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
          className={"bg-dark text-white"}
          placeholder="Enter answer "
        />
      </div>
    );
  }
}

export default Answer;
