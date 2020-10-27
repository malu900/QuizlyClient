import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MyToast from "./MyToast";
import axios from "axios";

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state.show = false;
    this.questionChange = this.questionChange.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
  }

  initialState = {
    questionName: "",
    answers: "",
  };

  submitQuestion = (event) => {
    event.preventDefault();

    const question = {
      questionName: this.state.questionName,
      answers: this.state.answers,
    };
    axios.post("http://localhost:8081/", question).then((response) => {
      if (response.data != null) {
        this.setState({ show: true });
        setTimeout(() => this.setState({ show: false }), 3000);
      } else {
        this.setState({ show: false });
      }
    });
    this.setState(this.initialState);
  };

  questionChange = (event) => {
    this.setState({
      [event.target.questionName]: event.target.value,
    });
  };

  resetDish = () => {
    this.setState(() => this.initialState);
  };

  render() {
    const { questionName, answers } = this.state;
    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            children={{
              show: this.state.show,
              message: "Question saved Succesfully.",
            }}
          />
        </div>
        <Card className={""}>
          <Card.Header>Add Question</Card.Header>
          <Form
            onReset={this.resetQuestion}
            onSubmit={this.submitQuestion}
            id={"questionId"}
          >
            <Card.Body>
              <Form.Group>
                <Form.Label>Question</Form.Label>
                <Form.Control
                  required
                  autoComplete={"off"}
                  type="text"
                  name={"questionName"}
                  value={questionName}
                  onChange={this.questionChange}
                  className={"bg-dark text-white"}
                  placeholder="Enter Question"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Answer</Form.Label>
                <Form.Control
                  required
                  autoComplete={"off"}
                  type="text"
                  name={"answers"}
                  value={answers}
                  onChange={this.questionChange}
                  className={"bg-dark text-white"}
                  placeholder="Enter answer "
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit">
                Add question
              </Button>{" "}
              <Button variant="info" type={"reset"}>
                reset
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    );
  }
}
