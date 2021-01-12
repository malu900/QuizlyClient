import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import AddQuestion from "./AddQuestion";
import axios from "axios";
import {showAllQuizzes, getQuizzes} from '../Ws/WsService'


export class AddQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      createQuestion: false,
      quizName: "",
      createdQuestions: [],
      // questions: {
      //   answers: {
      //     name: "",
      //   },
      // },
      // =======
      quizzes: [],
      questions: [],
      questionsData: [],
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
      questions: this.state.questions,
    };
    console.log("onSubmit sessionStorage-check: " + sessionStorage.getItem("userId"))
    axios.post("http://localhost:8081/quiz/" + sessionStorage.getItem('userId'), quiz)
        .then(response =>{
          if(response.data != null){
            showAllQuizzes();
            alert("Quiz has been added.")
          }
          else{
          }
        })
    this.setState(this.initialState);
    // this.setState({
    //   Quiz: [...this.state.Quiz, quiz],
    // });
  };

  addQuestionToQuiz = (question) => {
    console.log(question);
    this.setState({
      questions: [...this.state.questions, question],
    });
  };

  componentDidUpdate() {
    // console.log(this.state.questions);
  }

  render() {
    console.log("The userId beeyatch: " + sessionStorage.getItem("userId"))
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
            <Form.Text className="text-muted"/>
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
        {/* <Button onClick={this.deleteQuestion}>remove Question</Button> */}
      </div>
    );
  }
}

export default AddQuiz;
