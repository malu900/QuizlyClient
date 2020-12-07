import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import AddQuestion from "./AddQuestion";

export class AddQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      createQuestion: false,
      quizName: "",
      // <<<<<<< HEAD
      createdQuestions: [],
      questions: {
        answers: {
          name: "",
        },
      },
      // =======
      //       questions: [],
      //       questionsData: []
      // >>>>>>> cfc7003299b6031e574f355e599a8527f9d8cc1c
    };
  }

  newQuestion = (e) => {
    this.setState({
      createdQuestions: [...this.state.createdQuestions, <AddQuestion />],
    });
  };

  deleteQuestion = (e) => {
    this.setState({
      questions: this.state.questions.filter(function (id) {
        return id !== id;
      }),
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let quiz = {
      quizName: this.state.quizName,
    };
    this.props.addQuiz(quiz);

    this.setState({
      quizName: "",
    });
  };

  // componentDidUpdate() {
  //   console.log(this.state.questions);
  // }

  addQuestionToQuiz = (question) => {
    // <<<<<<< HEAD
    console.log(question);
    // this.setState({
    //   questions: [...this.state.questions, question],
    // });
    // =======
    //     this.setState({
    //       questionsData: [...this.state.questionsData, question],
    //     });
    //     this.state.questionsData.forEach(item => console.log(item));
    //     console.log(this.state.questionsData.length);
    //     // console.log(this.state.questionsData)
    // >>>>>>> cfc7003299b6031e574f355e599a8527f9d8cc1c
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Quiz name</Form.Label>
            <Form.Control
              type="quizName"
              name="quizName"
              placeholder="quiz name"
              value={this.state.quizName}
              onChange={this.onChange}
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Quiz
          </Button>
        </Form>
        <Button onClick={this.newQuestion}>Create Question</Button>
        <div>
          {this.state.createdQuestions.map((question) => (
            <AddQuestion
              key={question.name}
              addQuestionToQuiz={this.addQuestionToQuiz}
            />
          ))}
        </div>
        <Button onClick={this.deleteQuestion}>remove Question</Button>
      </div>
    );
  }
}

export default AddQuiz;
