import React, { Component } from "react";
import Login from "./Login";
import "../App/App.scss";
import { Container } from "react-bootstrap";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import Register from "./Register";

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      login: {
        email: "",
        password: "",
      },
      register: {
        name: null,
        email: null,
        password: null,
      },
    };
  }

  render() {
    const { showing } = this.state;
    return (
      <Container id="auth">
        <div className="auth">
          <i
            className="icons"
            onClick={() => this.setState({ showing: !showing })}
          >
            {showing ? (
              <CancelRoundedIcon className="rounded-circle" />
            ) : (
              <AddCircleRoundedIcon className="rounded-circle" />
            )}
          </i>
          {showing ? <Register /> : <Login login={this.state.login} />}
          <div>
            {this.state.login.email !== "" ? (
              <p> this.state.email</p>
            ) : (
              <p> </p>
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default Auth;
