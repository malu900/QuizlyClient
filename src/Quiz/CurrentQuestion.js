import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Reward from "react-rewards";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

export class CurrentQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Question: null,
      rightAnswer: false,
      wrongAnswer: false,
      answers : [],
      id : 1,
      round : 1,
      questions: []
    };
  }
  nextRound(){
    this.setState({round: this.state.round+ 1})
    console.log(this.state.round)
  }
  findQuestion(){
    axios.get("http://localhost:8081/question/"+ this.state.id + "/" + this.state.round )
        .then(response => response.data)
        .then((data) => {
          this.setState({questions: data})
          console.log(data)
          this.setState({answers : data.answers})
          console.log(this.state.answers)
        });
  }
  componentDidMount() {

    this.findQuestion()
  /*  console.log(this.state.rightAnswer);*/
  }
  componentDidUpdate() {
    console.log(this.state.rightAnswer);
    if (this.state.rightAnswer == true) {
      this.reward.rewardMe();
    }
  }
  rightOrWrong = (answer) => {
    this.setState({
      rightAnswer: true,
    });

  };
  render (){
    const rightAnswer = this.state.rightAnswer;
    this.state.round = this.props.round;
    console.log(this.state.round)
    // var handleTiming = this.props.handleTiming;
    return (
      <div class="current-question">
        <p>Current question {this.state.questions.questionName}</p>
        <Reward
          ref={(ref) => {
            this.reward = ref;
          }}
          type="confetti"
        >
            {this.state.answers.map((answer) => (
                  <Button onClick={() => this.Test(answer.answerId)}> {answer.answerContent} </Button>
            ))}
        </Reward>
      </div>
    );
  }

}

export default CurrentQuestion;
