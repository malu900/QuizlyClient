import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Reward from "react-rewards";

export class CurrentQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Question: null,
      rightAnswer: false,
      wrongAnswer: false,
    };
  }
  componentDidMount() {
    console.log(this.state.rightAnswer);
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

    // if (this.state.rightAnswer == true) {
    //   this.reward.rewardMe();
    // }
    // if (answer == goodanswer) {
    //   // something to add to score with axios
    // }
  };
  render() {
    const rightAnswer = this.state.rightAnswer;
    // var handleTiming = this.props.handleTiming;
    return (
      <div class="current-question">
        <p>Current question </p>
        <Reward
          ref={(ref) => {
            this.reward = ref;
          }}
          type="confetti"
        >
          <Button
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
          <Button> Answer 4 </Button>
        </Reward>
      </div>
    );
  }
}

export default CurrentQuestion;
