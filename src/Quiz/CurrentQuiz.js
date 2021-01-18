// import { Button } from "bootstrap";
import React, {Component, useEffect} from "react";
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
      minutes: 0,
      seconds: 10,
      round: 1
    };
  }
  componentDidMount() {
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

          this.setState({});
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);

    this.getQuizById(this.props.match.params.Code);

    this.setState({
      questions: this.state.Quiz.questions,
    });
  }

  getQuizById = (Code) => {
    // axios.get("http://localhost:8081/quiz/" + id).then((response) =>
    //   const Quiz = response.data;
    //     this.setState({ persons });
    //   this.setState({
    //     Quiz: response.data,
    //     // questions: response.data.Quiz.questions,
    //   })
    // );

    axios.get("http://localhost:8081/quiz/" + Code).then((res) => {
      const quiz = res.data;
      const q = quiz.questions;
      this.setState({ Quiz: quiz, questions: q });

      console.group(this.state.questions);
    });
  };

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  nextRound= () =>{
    this.setState({round: this.state.round+ 1})
    this.setState({seconds: 10})
  }
  render() {
    const count = 0
    const { minutes, seconds } = this.state;
    return (
      <div className="current-quiz">
        <div>
          <div className="circle">0</div>
          <h1> {this.state.Quiz.id}</h1>
          {/* {this.state.questions.map((q) => (
            <p> {q}</p>
          ))} */}

          <CurrentQuestion {...this.props} />
          <div className="time-remaining">
            {minutes === 0 && seconds === 0 ? (

                <div> {this.nextRound()} <CurrentQuestion round ={this.state.round} />

              <h1>Next question!</h1></div>

            ) : (
                <div> <CurrentQuestion round ={this.state.round} />
              <h1>
                Time Remaining: {minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </h1></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentQuiz;
