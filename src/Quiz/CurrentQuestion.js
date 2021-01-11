import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Reward from "react-rewards";

export class CurrentQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Question: [],
      answers: [],
      rightAnswer: false,
      wrongAnswer: false,
    };
  }
  componentDidMount() {
    // console.log("TEST", this.props.question);
    const question = this.props.question;
    const answers = question.answers;
    this.setState({
      Question: question,
      answers: answers,
    });
  }
  componentDidUpdate() {
    if (this.state.rightAnswer == true) {
      this.reward.rewardMe();
    }
  }
  rightOrWrong = (answer) => {
    this.setState({
      rightAnswer: true,
    });
  };

  render() {
    const rightAnswer = this.state.rightAnswer;
    const answers = this.props.question.answers;
    return (
      <div class="current-question">
        <p>{this.state.Question.questionName} </p>
        <Reward
          ref={(ref) => {
            this.reward = ref;
          }}
          type="confetti"
        >
          {answers.map((e, i) => (
            <Button
              key={i}
              onClick={() => {
                this.rightOrWrong();
                // handleTiming(rightAnswer);
              }}
            >
              {e.answerId}
            </Button>
          ))}
          {/* <Button
            onClick={() => {
              this.rightOrWrong();
              // handleTiming(rightAnswer);
            }}
            className={rightAnswer ? "right" : "wrong"}
          >
            Answer 1
          </Button>
          <Button> Answer 2 </Button>
          <Button> Answer 3 </Button>
          <Button> Answer 4 </Button> */}
        </Reward>
      </div>
    );
  }
}

export default CurrentQuestion;
