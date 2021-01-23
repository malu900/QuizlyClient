import React, { Component } from "react";

export class Winners extends Component {
  render() {
    return (
      <div>
          <h2>You finished the quiz</h2>
          <h2>Your score is: {localStorage.getItem('Score')}</h2>
      </div>
    );
  }
}

export default Winners;
