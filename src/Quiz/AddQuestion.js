import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MyToast from "./MyToast";
import axios from "axios";
import NewAnswers from "./NewAnswers";

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
    answers: [],
    // answers: {
    //   goodanswer,
    //   answerOne
    //   answerTwo
    //   answerThree
    // },
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
    // console.log(this.state.que);
  };
  onSubmit = (e) => {
    e.preventDefault();
    let question = {
      questionName: this.state.questionName,
    };
    this.props.addQuestionToQuiz(question);
    this.setState({
      questionName: question.questionName,
    });
    console.log(this.state.answers);
  };

  questionChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // componentDidUpdate() {
  //   console.log(this.state.answers);
  // }

  resetDish = () => {
    this.setState(() => this.initialState);
  };

  submitAnswers = (answers) => {
    console.log(" test", answers);
    this.setState({
      answers: [...this.state.answers, answers],
    });
  };

  render() {
    const { questionName } = this.state;
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

        <Form
          onReset={this.resetQuestion}
          onSubmit={this.onSubmit}
          id={"questionId"}
        >
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
          <NewAnswers submittAnswers={this.submitAnswers} />
          <Button onClick={this.submittAnswers} variant="primary" type="submit">
            Add question
          </Button>
          {/* <NewAnswers addAnswersToQuiz={this.addAnswersToQuiz} /> */}
          <Button variant="info" type={"reset"}>
            reset
          </Button>
        </Form>
      </div>
    );
  }
}
