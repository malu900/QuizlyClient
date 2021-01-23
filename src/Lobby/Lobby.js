import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import "../App/App.scss";
import {leaveQuiz, disconnect, joinQuiz, connectToQuiz, connectStartGame, startGame} from '../Ws/WsService'
import {Link, withRouter} from "react-router-dom";
import { MessageService } from '../Ws/MessageService';
import history from "../Utils/History";


class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quiz: [],
      HostName: "",
      isHost: false,
      Players: [],
      GuestName: "",
      Code: "",
      QuizMaster: [],
      startGame: false
    };
  }

  componentWillMount() {

    this.subscription = MessageService.getMessage().subscribe(message => {
      if(message.text == true){
        sessionStorage.setItem('Score', 0);
        this.redirectMePlease();
      }
      else{
        this.setState({
          Players : message.text,
        })
      }
    });
    if(this.props.location.state.IsHost === true){
      this.setupForHost();
    }
    else{
      this.setupForGuest();
    }
  }
  redirectMePlease = () => {
    window.location.href = "http://localhost:3000/quiz/lobby/currentQuiz/" + this.state.Code;
  };

  setupForGuest = () => {
    this.setState({ GuestName: this.props.location.state.guestName,
      Code: this.props.location.state.guestCode});
      setTimeout(() => {
        connectToQuiz(this.state.Code);
        setTimeout(() => {
        joinQuiz(this.state.GuestName, this.state.Code);
        }, 500);
      },2000);
  }

  setupForHost = () => {
    this.setState({ HostName: this.props.location.state.Host, Code: this.props.location.state.Code});
    setTimeout(() => {
      connectToQuiz(this.state.Code);
    }, 2000)
    
  }

  addPlayerToLobby = (playerIdOrCode = 5) => {
    this.setState({
      Players: [...this.state.Players, playerIdOrCode],
    });
  };

  
  leaveQuiz = () => {
    leaveQuiz(this.state.GuestName, this.state.Code);
    setTimeout(()=>{
      disconnect();
    },2000)
    this.subscription.unsubscribe();
    history.push({
      pathname: '/',
  });
  }

  onClickStartQuiz = () => {
    //connectStartGame(code)
    setTimeout(() => {
      startGame(this.state.Code);
    }, 2000);

    //this.redirectMePlease(id);
    /*setTimeout(()=>{
        disconnect();
      /!*  startgame = true*!/
    },2000);*/
  }
  render() {
    return (
      <div>
        <div id="playersListLobby">
          <p>
              Host is: {this.state.HostName}
            <Button onClick={()=>this.onClickStartQuiz()}>Start Quiz</Button>
          </p>
        </div>
        <div id="playersListLobby">
          <ul>
            <li>Quiz master</li>{" "}
            <Button onClick={() => this.addPlayerToLobby()}>
              {" "}
              add player to lobby
            </Button>
          </ul>
          <div>
            {this.state.Host}
          </div>
          <Table bordered hover striped variant>
            <thead>
              <tr>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.Players.length
                  ? this.state.Players.map((player) => (
                      <tr key={player.guestId}>
                      <td>{player.name}</td>
                      <td><Button onClick={() => this.leaveQuiz()}>Leave</Button></td>
                      </tr>
                    ))
                  : ""}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}
export default withRouter(Lobby);
