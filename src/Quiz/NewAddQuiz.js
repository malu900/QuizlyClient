import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export class NewAddQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizName: "",
      questions: [],
      answers: [],
      questionName: "",
      createQuestion: false,
      nrOfQuestions: [],
      questionNames: [],
    };
  }
  addNew = (e) => {
    e.preventDefault();
    this.setState({
      nrOfQuestions: [...this.state.nrOfQuestions, 1],
    });
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  displayFormField = () => {
    return (
      <div>
        {this.state.nrOfQuestions.map((i) => {
          return (
            <div>
              <Form.Group key={i}>
                <Form.Label>Question</Form.Label>
                <Form.Control
                  required
                  autoComplete={"off"}
                  type="text"
                  name="questionName"
                  value={this.state.questionName}
                  onChange={this.onChange}
                  className={"bg-dark text-white"}
                  placeholder="Enter Question"
                />
              </Form.Group>
              <Form.Group className="answers">
                {Array.from({ length: 4 }, (_, d) => (
                  <Form.Group key={d}>
                    <Form.Label>Answer {d}</Form.Label>
                    <Form.Control
                      required
                      autoComplete={"off"}
                      type="text"
                      name="name"
                      value={this.state.questionName[d]}
                      onChange={this.onChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter answer "
                    />
                  </Form.Group>
                ))}
              </Form.Group>
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <div className="another-quiz">
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
          <Button onClick={this.addNew}>add a new question</Button>
          <div>{this.displayFormField()}</div>
          <Button variant="primary" type="submit">
            Submit Quiz
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewAddQuiz;
