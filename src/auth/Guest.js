import React, { Component } from "react";
import "../App/App.scss";
import { Container, Form, Button } from "react-bootstrap";
import history from "../Utils/History";
import {joinQuiz, getGuests} from '../Ws/WsService';

export class Guest extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    initialState = {
        name: "",
        code: "",
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/lobby',
            state: {guestName: this.state.name  , guestCode: this.state.code},
        });
    };

    render() {
        const { name, code } = this.state;
        return (
            <Container id="register">
                <h2> Quizly </h2>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control
                            type="name"
                            name={"name"}
                            value={name}
                            onChange={this.onChange}
                            placeholder="Enter nickname"
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Game PIN</Form.Label>
                        <Form.Control
                            type="code"
                            name={"code"}
                            value={code}
                            onChange={this.onChange}
                            placeholder="Enter game PIN to join a quiz"
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Join
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Guest;
