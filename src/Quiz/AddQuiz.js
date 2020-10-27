import { Button } from "bootstrap";
import React, { Component } from "react";

export class AddQuiz extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Button>Create Quiz</Button>
      </div>
    );
  }
}

export default AddQuiz;
