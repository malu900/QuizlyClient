import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Reward from "react-rewards";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import {MessageService} from "../Ws/MessageService";

export class CurrentQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Question: null,
      rightAnswer: false,
      wrongAnswer: false,
      answers : [],
      id: 42,
      round : 1,
      questions: [],
      startGame: false,
      GuestName: "",
      Score : 0
    };
  }
  increaseScore= () =>{
    this.setState({Score: this.state.Score+ 1})
    this.setState({seconds: 5})
  }

  findQuestion(){
    axios.get("http://localhost:8081/question/"+ this.state.id + "/" + this.state.round )
        .then(response => response.data)
        .then((data) => {
          this.setState({questions: data})
          this.setState({answers : data.answers})
        });
  }
  componentWillMount() {
    if (this.state.startGame === true) {
      this.subscription = MessageService.getMessage().subscribe(message => {
        this.setState({
          startGame: message.text,
        })
      });
    }
  }


  componentDidMount() {

    this.findQuestion()
  }
  componentDidUpdate() {
    if (this.state.rightAnswer == true) {
      this.reward.rewardMe();
    }
  }
  rightOrWrong = (answer) => {

    if (answer.rightAnswer === true) {
      this.increaseScore();
      this.reward.rewardMe();
    }

  };
  Test = (answer) => {
    console.log(answer)

  };
  render (){
    this.state.round = this.props.round;
    console.log(this.state.GuestName)
    console.log(this.state.questions)


    // var handleTiming = this.props.handleTiming;
    return (
      <div className="current-question">
        <p>Current question {this.state.questions.questionName}</p>
        <Reward
          ref={(ref) => {
            this.reward = ref;
          }}
          type="confetti"
        >
            {this.state.answers.map((answer) => (
                  <Button onClick={() => this.rightOrWrong(answer)}> {answer.answerContent} </Button>
            ))}
        </Reward>
      </div>
    );
  }

}

export default CurrentQuestion;
