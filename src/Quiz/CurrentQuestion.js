import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Reward from "react-rewards";
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
      id: 39,
      round : 1,
      questions: [],
      startGame: false,
      score: 0
    };
  }
  findQuestion(){
    setTimeout(()=>{
      axios.get("http://localhost:8081/question/"+ this.state.id + "/" + this.state.round )
      .then(response => response.data)
      .then((data) => {
        console.log(data);
        this.setState({questions: data})
        this.setState({answers : data.answers})
      }).catch(console.log('failed'));
    }, 3000);
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

  checkForRightAnswer = (answer) => {
    if(answer.rightAnswer){
      this.reward.rewardMe();
      this.setState({
        score: this.state.score + 100
      })
    }
  }


  componentDidMount() {

    this.findQuestion()
  }
  componentDidUpdate() {
 
  }
  rightOrWrong = (answer) => {
    this.setState({
      rightAnswer: true,
    });

  };
  render (){
    this.state.round = this.props.round;

    return (
      <div class="current-question">
        <p>Score {this.state.score}</p>
        <p>Current question {this.state.questions.questionName}</p>
        <Reward
          ref={(ref) => {
            this.reward = ref;
          }}
          type="confetti"
        >
            {this.state.answers.map((answer) => (
                  <Button onClick={() => this.checkForRightAnswer(answer)}> {answer.answerContent} </Button>
            ))}
        </Reward>
      </div>
    );
  }

}

export default CurrentQuestion;
