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
    // this.setState({
    //   newQuizClicked: !newQuizClicked,
    // });
    console.log(this.newQuizClicked);
  };

  render() {
    const { newQuizClicked } = this.state;
    return (
      <div>
        <Button
          onClick={() => this.setState({ newQuizClicked: !newQuizClicked })}
        >
          Create Quiz
        </Button>
        <div>
          {newQuizClicked ? (
            <AddQuiz QuizList={this.state.Quiz} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default AllQuiz;
