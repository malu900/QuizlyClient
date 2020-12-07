import React, { Component } from "react";
import Form from "react-bootstrap/Form";

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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    let answers = {
      goodanswer: this.state.goodanswer,
      answerOne: this.state.answerOne,
      answerTwo: this.state.answerTwo,
      answerThree: this.state.answerThree,
    };
    this.props.onChange(answers);
  };

  render() {
    return (
      <div>
        <Form.Group>
          <Form.Label>Right answer</Form.Label>
          <Form.Control
            required
            autoComplete={"off"}
            type="text"
            name="goodanswer"
            value={this.state.goodanswer}
            onChange={this.handleChange}
            className={"bg-dark text-white"}
            placeholder="Enter answer "
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Answer 1</Form.Label>
          <Form.Control
            required
            autoComplete={"off"}
            type="text"
            name="answerOne"
            value={this.state.answerOne}
            onChange={this.handleChange}
            className={"bg-dark text-white"}
            placeholder="Enter answer "
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Answer 2</Form.Label>
          <Form.Control
            required
            autoComplete={"off"}
            type="text"
            name="answerTwo"
            value={this.state.answerTwo}
            onChange={this.handleChange}
            className={"bg-dark text-white"}
            placeholder="Enter answer "
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Answer 3</Form.Label>
          <Form.Control
            required
            autoComplete={"off"}
            type="text"
            name="answerThree"
            value={this.state.answerThree}
            onChange={this.handleChange}
            className={"bg-dark text-white"}
            placeholder="Enter answer "
          />
        </Form.Group>
      </div>
    );
  }
}

export default NewAnswers;
