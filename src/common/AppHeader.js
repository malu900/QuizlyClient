import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Quiz/AllQuiz";
import "../App/App.scss";
import { Container, Row } from "react-bootstrap";

export class AppHeader extends Component {
  render() {
    return (
      <Container id="AppHeader">
        <Row>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/quiz">Quiz</Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link to="/parent">Quiz</Link>
=======
                <Link to="/lobby">Lobby</Link>
>>>>>>> 62115990f07f0455acbe6b0cb82cd8e1dc62bf4a
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
       {/*       <li>
                <Link to="/guest">Guest</Link>
              </li>*/}
            </ul>
          </div>
        </Row>
      </Container>
    );
  }
}

export default AppHeader;
