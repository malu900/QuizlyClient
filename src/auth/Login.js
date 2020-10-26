import React, { Component } from "react";
import "../App/App.scss";
import { Container, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidUpdate() {
    console.log(this.props.login.email);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = () => {
    this.props.login.email = this.state.email;
    this.props.login.password = this.state.password;
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <Container id="login">
        <h2> Login</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onSubmit={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

// Login.PropTypes = {
//   loginfields: PropTypes.string.isRequired,
// };

export default Login;
