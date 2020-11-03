import React, { Component } from "react";
import "../App/App.scss";
import { Container, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state.show = false;
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }
  initialState = {
    email: "",
    password: ""
  }

  componentDidUpdate() {
    console.log(this.props.login.email);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    const login = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post("http://localhost:8081/auth/login", login)
        .then(response =>{
          if(response.data != null) {
            /*localStorage.setItem('token', response.data.token);*/
            localStorage.setItem('userId', response.data.userId);
            this.setState({"show": true});
            setTimeout(() => this.setState({"show": false}), 3000);
          }
        })
    this.setState(this.initialState);
    console.log(this.props.login);
  };
  resetLogin = () => {
    this.setState(() => this.initialState)
  }
  render() {
    return (
      <Container id="login">
        <h2> Login</h2>
        <Form onReset={this.resetLogin} onSubmit={this.onSubmit}>
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
          <Button variant="primary" value="submit" type="submit">
            Log in
          </Button>
          <Button variant="info" type={"reset"}>
            reset
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
