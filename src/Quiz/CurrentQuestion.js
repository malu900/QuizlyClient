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
      id: 63,
      round : 1,
      questions: [],
      startGame: false,
      score: JSON.parse(sessionStorage.getItem('Score')),
      value: true
    };
  }
  findQuestion(){
   /* setTimeout(()=>{*/
      axios.get("http://localhost:8081/question/"+ this.state.id + "/" + this.state.round )
      .then(response => response.data)
      .then((data) => {
        console.log(data);
        this.setState({questions: data})
        this.setState({answers : data.answers})

      }).catch(console.log('failed'));
/*    }, 3000);*/
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
    this.setState({value:false})
    if(answer.rightAnswer){


      this.reward.rewardMe();
      this.setState({
        score: this.state.score + 100,
      },
          ()=> sessionStorage.setItem('Score',JSON.parse(this.state.score))
      )

    }

  }


  componentDidMount() {
    this.findQuestion()
    this.setState({value: true})
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
                  <Button  disabled={!this.state.value} onClick={() => this.checkForRightAnswer(answer)}> {answer.answerContent} </Button>
            ))}
        </Reward>
      </div>
    );
  }

}

export default CurrentQuestion;
