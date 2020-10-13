import React, { Component } from "react";
import "../App/App.scss";
import { Container, Form, Button } from "react-bootstrap";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import Register from "./Register";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
  }

  render() {
    const { showing } = this.state;
    return (
      <Container id="auth">
        <div className="auth">
          <i class="icons" onClick={() => this.setState({ showing: !showing })}>
            {showing ? (
              <div>
                <CancelRoundedIcon className="rounded-circle" /> <Register />
              </div>
            ) : (
              <AddCircleRoundedIcon className="rounded-circle" />
            )}
          </i>
          <h2> Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default Login;
