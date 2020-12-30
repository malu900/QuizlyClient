import React, { Component } from "react";

export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizName: "",
      questions: [],
    };
  }

  componentDidMount() {
    this.setState({
      quizName: this.props.quiz,
      questions: this.props.questions,
    });
  }
  render() {
    return <div>{/* <p>{this.props.q.quizName} </p> */}</div>;
  }
}

export default Quiz;
