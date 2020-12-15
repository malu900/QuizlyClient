import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import AddQuestion from "./AddQuestion";
import axios from 'axios';

export class AddQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      createQuestion: false,
      quizName: "",
      // <<<<<<< HEAD
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
      // >>>>>>> cfc7003299b6031e574f355e599a8527f9d8cc1c
    };
    this.submitQuiz = this.submitQuiz.bind(this);
  }
  componentDidMount() {
    localStorage.setItem('userId', '13');
  }

  submitQuiz = event => {
    event.preventDefault();

    const quiz ={
      quizName: this.state.quizName,
      questions: this.state.questions,

    };
    axios.post("http://localhost:8081/quiz/" + localStorage.getItem('userId'), quiz)
        .then(response =>{
          if(response.data != null){
            //als er een response is betekent dat dat de methode gelukt is en kan er dus iets weergegeven worden
            console.log(response.data);
          }
          else{
            //als de response null is moet de pagina niets doen
          }
        })
    this.setState(this.initialState);
  };
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
    // this.setState({
    //   Quiz: [...this.state.Quiz, quiz],
    // });
    this.props.addQuiz(quiz);
  };
  // componentDidUpdate() {
  //   console.log("testtttt " + quiz);
  // }

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
          {/*<Button variant="primary" type="submit">
            Submit Quiz
          </Button>*/}
          <Button onClick={this.submitQuiz}>submit quiz</Button>
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
