import React, { Component } from "react";
import wsApp from "../Websockets/wsApp";
import Guest from "../auth/Guest";
import { Form, Button } from "react-bootstrap";
import "../App/App.scss";

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

  render() {
    return (
      <div>
        <form>
          {/*<script src="..Websockets/wsApp.js"/>*/}
          {/*<script src="/webjars/sockjs-client/sockjs.min.js"></script>*/}
          {/*<script src="/webjars/stomp-websocket/stomp.min.js"></script>*/}
          <div>
            <label>WebSocket connection:</label>
            <button id="connect" type="submit">
              Connect
            </button>
            <button id="disconnect" type="submit" disabled="disabled">
              Disconnect
            </button>

            <div>
              <label>What is your name?</label>
              <input type="text" id="name" placeholder="Your name here..." />
            </div>
            <button id="send" type="submit">
              Send
            </button>
          </div>

          <table id="conversation" className="table table-striped">
            <thead>
              <tr>
                <th>Messages?</th>
              </tr>
            </thead>
            <tbody id="greetings"></tbody>
          </table>
        </form>
        <div id="playersListLobby">
          <ul>
            <li>Quiz master</li> <Button> Start Quiz</Button>
          </ul>
          <ul>
            {Array(4)
              .fill(1)
              .map((el, i) => (
                <li> Player name </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
