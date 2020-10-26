import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Quiz";
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
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    );
  }
}

export default AppHeader;
