import { Button } from "react-bootstrap";
import React, { Component } from "react";
import AddQuiz from "./AddQuiz";
import Quiz from "./Quiz";
import { propTypes } from "react-bootstrap/esm/Image";

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

  addQuiz = (quiz) => {
    this.setState({
      Quiz: [...this.state.Quiz, quiz],
    });
  };

  componentDidUpdate() {
    console.log(this.state.Quiz);
  }

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
          {newQuizClicked ? <AddQuiz addQuiz={this.addQuiz} /> : <div></div>}
        </div>
        {newQuizClicked ? (
          <Button variant="primary" type="submit">
            Submit Quiz and question
          </Button>
        ) : null}

        <div>
          {this.state.Quiz.map((q) => (
            <Quiz quiz={q} key={q} />
          ))}
        </div>
      </div>
    );
  }
}

export default AllQuiz;
