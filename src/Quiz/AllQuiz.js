import { Button } from "react-bootstrap";
import React, { Component } from "react";
import AddQuiz from "./AddQuiz";
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
  // onSubmit = (e) => {
  //   e.preventDefault();
  //   let quiz = {
  //     quizName: this.state.quizName,
  //   };
  //   console.log(quiz);
  //   this.props.AddQuiz(quiz);

  //   this.setState({
  //     quizName: "",
  //   });
  // };
  // <Todos
  //                   todos={this.state.todos}
  //                   markComplete={this.markComplete}
  //                   delTodo={this.delTodo}
  //                 />

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
            Submit Quiz
          </Button>
        ) : null}
      </div>
    );
  }
}

export default AllQuiz;
