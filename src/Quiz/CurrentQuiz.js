// import { Button } from "bootstrap";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../App/App.scss";
import CurrentQuestion from "./CurrentQuestion";
import axios from "axios";
import { data } from "jquery";

export class CurrentQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quiz: [],
      questions: [],
      Players: [],
      CurrentPlayer: null,
      minutes: 1,
      seconds: 5,
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
          // go to next question
          this.setState({});
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);

    this.getQuizById(this.props.match.params.id);
  }

  getQuizById = (id) => {
    axios.get("http://localhost:8081/quiz/" + id).then((res) => {
      const quiz = res.data;
      const q = quiz.questions;
      this.setState({ Quiz: quiz, questions: q });

      console.log(this.state.questions);
    });
  };

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds, Quiz } = this.state;
    // const { questions } = this.state.Quiz.questions;
    return (
      <div className="current-quiz">
        <h3> {this.state.Quiz.quizName}</h3>
        <div>
          {/* {console.log(this.state.Quiz.quizName)} */}
          {/* {this.state.questions.map((e) => (
            <p> {e}</p>
          ))} */}
          {this.state.questions.map((e, i) => (
            // <p>{e.questionId}</p>
            <div>
              <div key={i} className="circle">
                {i}
              </div>
              <CurrentQuestion key={i} {...this.props} question={e} />
            </div>
          ))}

          {/* <h1> {this.state.Quiz.id}</h1> */}
          {/* {this.state.Quiz.questions.map((q) => (
            <p> {q}</p>
          ))} */}
          <div className="time-remaining">
            {minutes === 0 && seconds === 0 ? (
              <h1>Next question!</h1>
            ) : (
              <h1>
                Time Remaining: {minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentQuiz;
