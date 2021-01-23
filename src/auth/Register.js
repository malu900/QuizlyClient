import React, { Component } from "react";
import "../App/App.scss";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state.show = false;
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  initialState = {
    name: "",
    email: "",
    password: "",
    secondPassword: "",
  };
  

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      secondPassword: this.state.secondPassword,
    };
    axios.post("http://localhost:8081/auth/register", user).then((response) => {
      if (response.data != null) {
        window.location.replace("/PersonalQuizzes")
        this.setState({ show: true });
        setTimeout(() => this.setState({ show: false }), 3000);
      } else {
        this.setState({ show: false });
      }
    });
    this.setState(this.initialState);
  };
  render() {
    const { name, email, password, secondPassword } = this.state;
    return (
      <Container id="register">
        <h2> Register </h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name={"name"}
              value={name}
              onChange={this.onChange}
              placeholder="Enter name"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name={"email"}
              value={email}
              onChange={this.onChange}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name={"password"}
              value={password}
              onChange={this.onChange}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name={"secondPassword"}
              value={secondPassword}
              onChange={this.onChange}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Register;
