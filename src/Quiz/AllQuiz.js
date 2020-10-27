import { Button } from "react-bootstrap";
import React, { Component } from "react";

export class AllQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quiz: [],
    };
  }
  onClickCreateQuiz = (e) => {
    console.log("Clicked!");
  };

  render() {
    return (
      <div>
        <p> Helll world!</p>
        <Button onClick={this.onClickCreateQuiz}>Create Quiz</Button>
      </div>
    );
  }
}

export default AllQuiz;
