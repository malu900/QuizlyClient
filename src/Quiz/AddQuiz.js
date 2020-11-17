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
      questions: [],
    };
  }
  componentDidUpdate() {
    console.log(this.props.Quiz);
    console.log(this.questions);
  }
  componentDidMount() {
    console.log(this.props.Quiz);
  }

  newQuestion = (e) => {
    this.setState({
      questions: [...this.state.questions, <AddQuestion />],
    });
    console.log(this.state.questions);
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

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Quiz name</Form.Label>
            <Form.Control
              type="quizName"
              name="quizName"
              placeholder="quiz name"
              value={this.state.quizName}
              onChange={this.onChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button onClick={this.newQuestion}>Create Question</Button>
          <div>
            {this.state.questions.map((question) => (
              <AddQuestion key={question.name} />
            ))}
          </div>
          {/* <Button variant="primary" type="submit">
            Submit Quiz
          </Button> */}
          <Button onClick={this.deleteQuestion}>remove Question</Button>
        </Form>
      </div>
    );
  }
}

export default AddQuiz;
