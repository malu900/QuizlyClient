import React, { Component } from "react";
import Answer from "./Answer";
import { Form, Button } from "react-bootstrap";

export class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Answers: [],
      name: [],
    };
  }
  // onSubmit = (e) => {
  //   e.preventDefault();
  // };
  onSubmit = (name) => {
    console.log(name.target.value);
  };
  callBackFunction = (childData) => {
    console.log(childData);
  };
  // returnAnswer = (answer) => {};
  render() {
    const { name } = this.state;
    return (
      <div>
        <Form.Group>
          {Array(4)
            .fill(1)
            .map((el, i) => (
              <Form.Group>
                {/* <Answer key={i} getAnswer={this.returnAnswer(answer)} /> */}
                <Answer
                  key={i}
                  name={name}
                  parentCallBack={this.callBackFunction}
                  onChange={this.onSubmit}
                />
              </Form.Group>
            ))}
          <Button onClick={(this.onSubmit, this.callBackFunction)} />
        </Form.Group>
      </div>
    );
  }
}

export default Answers;
