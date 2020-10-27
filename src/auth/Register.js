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
    ;
  }
  initialState = {
    email: "",
    password: "",
    confirmation_password: ""
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
    const user ={
      name: this.state.firstName,
      email: this.state.email,
      password: this.state.password,
      secondPassword: this.state.confirmation_password
    };
    axios.post("http://localhost:8080/auth/register", user)
        .then(response =>{
          if(response.data !=null) {
            this.setState({"show": true});
            setTimeout(() => this.setState({"show": false}), 3000);
          }
          else{
            this.setState({"show": false})
          }
        })
    this.setState(this.initialState);
  };
  render() {
    return (
      <Container id="register">
        <h2> Register </h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
