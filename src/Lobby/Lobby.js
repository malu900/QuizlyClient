import React, { Component } from "react";
import wsApp from "../Websockets/wsApp";
import Guest from "../auth/Guest";
import { Form, Button } from "react-bootstrap";
import "../App/App.scss";
import { Link } from "react-router-dom";
import {leaveQuiz} from '../Ws/WsService';

export default class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quiz: [],
      Players: [],
      QuizMaster: [],
    };
  }

  componentDidMount() {
    console.log("bruh lobby component mounted!");
  }

  addPlayerToLobby = (playerIdOrCode = 5) => {
    this.setState({
      Players: [...this.state.Players, playerIdOrCode],
    });
  };

  
  //todo koppelen aan button ui
  leaveQuiz = (id) => {
    leaveQuiz(id, /*todo user toevoegen*/);
  }

  render() {
    return (
        <div id="playersListLobby">
          <ul>
            <li>Quiz master</li>{" "}
            <Button onClick={() => this.addPlayerToLobby()}>
              {" "}
              add player to lobby
            </Button>
          </ul>
          <ul>
            {this.state.Players.length
              ? this.state.Players.map((player) => (
                  <p key={player}> {player} </p>
                ))
              : ""}
          </ul>
          <Link to={"/quiz/lobby/currentQuiz"}> start </Link>
        </div>
    )
  }
}
