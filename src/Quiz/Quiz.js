import React, { Component } from "react";

export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizName: "",
    };
  }
  render() {
    return (
      <div>
        <h1> QUIZ </h1>
      </div>
    );
  }
}

export default Quiz;
