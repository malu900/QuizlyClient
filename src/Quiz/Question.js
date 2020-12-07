import React, { Component } from "react";

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      answers: [],
    };
  }

  render() {
    return (
      <div>
        <p>NEW QUESTION</p>
      </div>
    );
  }
}

export default Question;
