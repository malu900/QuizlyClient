import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import AddQuestion from "./AddQuestion";
<<<<<<< HEAD
import axios from 'axios';
=======
import axios from "axios";
import {showAllQuizzes} from '../Ws/WsService'
>>>>>>> devRens

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
      Quiz: [],
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
    axios.post("http://localhost:8081/quiz/" + localStorage.getItem('userId'), quiz)
        .then(response =>{
          if(response.data != null){

          }
          else{
          }
        })
    this.setState(this.initialState);
    this.componentDidMount();
    // this.setState({
    //   Quiz: [...this.state.Quiz, quiz],
    // });
    this.addQuiz(quiz);
  };
  // componentDidUpdate() {
  //   console.log("testtttt " + quiz);
  // }

  //TODO userid toevoegen
  addQuiz = (quiz) => {
    axios.post("http://localhost:8081/quiz/1", quiz).then((response) => {
      showAllQuizzes();
    });
  }

  addQuestionToQuiz = (question) => {
    console.log(question);
    this.setState({
      questions: [...this.state.questions, question],
    });
  };
  componentDidUpdate() {
    console.log(this.state.questions);
  }

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
        {/* <Button onClick={this.deleteQuestion}>remove Question</Button> */}
      </div>
    );
  }
}

export default AddQuiz;
