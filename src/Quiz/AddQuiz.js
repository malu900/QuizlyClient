import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import Question from "./Question";

export class AddQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      createQuestion: false,
      quizName: "",
      questions: [],
    };
  }

  componentDidMount() {
    console.log(this.props.QuizList);
  }

  newQuestion = (e) => {
    this.setState({
      questions: [...this.state.questions, <Question />],
    });
  };

  deleteQuestion = (id) => {
    // this.setState((prevState) => ({
    //   questions: prevState.data.filter((el) => el != id),
    // }));
    // this.setState({
    //   questions: [
    //     ...this.state.questions.filter((question) => question.id !== id),
    //   ],
    // });
  };

  onChange = (e) => {
    this.setState = {
      [e.target.name]: e.target.value,
    };
  };

  render() {
    // const { createQuestion: CreateQuestion } = this.state;
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Quiz name</Form.Label>
            <Form.Control
              type="QuizName"
              placeholder="quiz name"
              value={this.state.quizName}
              onChange={this.onChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button onClick={this.newQuestion}>Create Question</Button>
          <div> {this.state.questions} </div>
          <Button variant="primary" type="submit">
            Submit Quiz
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddQuiz;
