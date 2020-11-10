import { Button } from "react-bootstrap";
import React, { Component } from "react";
import AddQuiz from "./AddQuiz";

export class AllQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuizClicked: false,
      Quiz: [],
    };
  }
  onClickCreateQuiz = (e) => {
    console.log(this.newQuizClicked);
  };

  render() {
    const { newQuizClicked } = this.state;
    return (
      <div>
        <Button
          onClick={() => this.setState({ newQuizClicked: !newQuizClicked })}
        >
          {newQuizClicked ? "Remove quiz" : "Add quiz"}
        </Button>
        <div>
          {newQuizClicked ? <AddQuiz Quiz={this.state.Quiz} /> : <div></div>}
        </div>
        {newQuizClicked ? (
          <Button variant="primary" type="submit">
            Submit Quiz
          </Button>
        ) : null}
      </div>
    );
  }
}

export default AllQuiz;
