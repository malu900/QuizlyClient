import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "../App/App.scss";
import AddQuestion from "./AddQuestion";
import {AssignmentReturn} from "@material-ui/icons";

export class NewAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodanswer: "",
      answerOne: "",
      answerTwo: "",
      answerThree: "",
    };
  }

  giveAnswers = (answers) =>{
    this.props.parentCallback(answers);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, () =>{
      let answers = [
        this.state.goodanswer,
        this.state.answerOne,
        this.state.answerTwo,
        this.state.answerThree
      ];
      this.giveAnswers(answers);
    });
  };

  render() {
    return (
      <div id="answers">
        <Form.Group className="answers">
          <Form.Label>Right answer</Form.Label>
          <Form.Control
            required
            autoComplete={"off"}
            type="text"
            name="goodanswer"
            value={this.state.goodanswer}
            onChange={this.handleChange}
            className={""}
            placeholder="Enter answer "
          />
        </Form.Group>
        <Form.Group className="answers">
          <Form.Label>Answer 1</Form.Label>
          <Form.Control
            required
            autoComplete={"off"}
            type="text"
            name="answerOne"
            value={this.state.answerOne}
            onChange={this.handleChange}
            className={""}
            placeholder="Enter answer "
          />
        </Form.Group>
        <Form.Group className="answers">
          <Form.Label>Answer 2</Form.Label>
          <Form.Control
            required
            autoComplete={"off"}
            type="text"
            name="answerTwo"
            value={this.state.answerTwo}
            onChange={this.handleChange}
            className={""}
            placeholder="Enter answer "
          />
        </Form.Group>
        <Form.Group className="answers">
          <Form.Label>Answer 3</Form.Label>
          <Form.Control
            required
            autoComplete={"off"}
            type="text"
            name="answerThree"
            value={this.state.answerThree}
            onChange={this.handleChange}
            className={""}
            placeholder="Enter answer "
          />
        </Form.Group>
      </div>
    );
  }
}

export default NewAnswers;
