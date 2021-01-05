// import { Button } from "bootstrap";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../App/App.scss";
import CurrentQuestion from "./CurrentQuestion";

export class CurrentQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quiz: null,
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
  }
  componentDidUpdate() {}
  //   handleTiming = (someArg) => {
  //     setTimeout(200);
  //     alert("We pass argument from Child to Parent: " + someArg);
  //   };
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div className="current-quiz">
        <div>
          <div class="circle">0</div>
          <CurrentQuestion />
          <div class="time-remaining">
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
