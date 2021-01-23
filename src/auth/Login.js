import React, {Component} from "react";
import "../App/App.scss";
import {Container, Form, Button} from "react-bootstrap";
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
        password: "",
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (sessionStorage.getItem("userId") !== null) {
            sessionStorage.removeItem("userId");
            window.location.replace("/")
        } else {
            const login = {
                email: this.state.email,
                password: this.state.password,
            };
            axios.post("http://localhost:8081/auth/login", login).then((response) => {
                if (response.data != null) {
                    console.log(response.data.userId);
                    sessionStorage.setItem('userId', response.data.userId);
                    window.location.replace("/PersonalQuizzes")
                    this.setState({show: true});
                    setTimeout(() => this.setState({show: false}), 3000);
                }
            });
            this.setState(this.initialState);
        }
    }

    resetLogin = () => {
        this.setState(() => this.initialState);
    };

    render() {
        const {email, password} = this.state;
        return (
            <Container id="login">
                {sessionStorage.getItem("userId") !== null ?
                    <div>
                        <h2>Logout</h2>
                        <Form onReset={this.resetLogin} onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    name="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={this.onChange}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Button variant="primary" value="submit" type="submit">Log out</Button>
                        </Form>
                    </div>
                    :
                    <div>
                        <h2>Login</h2>
                        <Form onReset={this.resetLogin} onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={this.onChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Button variant="primary" value="submit" type="submit">
                                Log in
                            </Button>
                            <Button variant="info" type={"reset"}>
                                reset
                            </Button>
                        </Form>
                    </div>
                }
            </Container>
        );
    }
}

// Login.PropTypes = {
//   loginfields: PropTypes.string.isRequired,
// };

export default Login;
