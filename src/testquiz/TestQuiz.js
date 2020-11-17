import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import TestQuestion from "./TestQuestion";

export class TestQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      questions: [],
    };
  }

  addQuestion = (question) => {
    this.setState({
      questions: [...this.state.questions, question],
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Direction name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="col-md-6">
          <TestQuestion addQuestion={this.addQuestion} />
        </div>
      </div>
    );
  }
}

export default TestQuiz;
