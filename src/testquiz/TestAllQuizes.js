import React, { Component } from "react";
import TestQuiz from "./TestQuiz";

export class TestAllQuizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: [],
    };
  }
  render() {
    return (
      <div className="row">
        {this.state.directions.map((direction) => (
          <TestQuiz
            key={direction.id}
            direction={direction}
            currentUser={this.state.currentUser}
          />
        ))}
      </div>
    );
  }
}

export default TestAllQuizes;
