import React, { Component } from "react";

export class TestQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      answer: "",
    };
  }
  render() {
    return <div>HELLO</div>;
  }
}

export default TestQuestion;
