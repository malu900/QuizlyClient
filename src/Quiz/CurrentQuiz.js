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
      seconds: 15,
      round: 1,
      lengthquiz: "",
      score: 0
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
      this.setState({lengthquiz: this.state.questions.length + 1})
      console.group(this.state.lengthquiz);
    });
  };

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  nextRound= () =>{
    this.setState({round: this.state.round+ 1})
    this.setState({seconds: 15})
    console.log(this.state.score)
  }
  checkIfQuizIsFinished=() => {
    console.log("einde pagina")
    window.location.replace("/winners")
  }
  render() {
    const count = 0
    const { minutes, seconds } = this.state;
    return (
      <div className="current-quiz">
        <div>
          <div className="circle">{this.state.round}</div>
          <h1> {this.state.Quiz.id}</h1>
          {/* {this.state.questions.map((q) => (
            <p> {q}</p>
          ))} */}
          {this.state.round === this.state.lengthquiz ?(<div>{this.checkIfQuizIsFinished()}</div>) : (<div></div>)}
      {/*    <CurrentQuestion {...this.props} />*/}
          <div className="time-remaining">
            {minutes === 0 && seconds === 0 ? (

                <div> {this.nextRound()} {} <CurrentQuestion round ={this.state.round} />

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
