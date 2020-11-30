import React, { Component } from "react";
import AppHeader from "../common/AppHeader";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Quiz from "../Quiz/AllQuiz";
import Auth from "../auth/Auth";
import AddQuestion from "../Quiz/AddQuestion";
import Home from "../Home";
import Lobby from "../Lobby/Lobby";
import Guest from "../auth/Guest";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: [],
    };
  }
  // componentDidMount() {
  //   console.log("Did mount!");
  // }
  render() {
    return (
      <Container className="App">
        <AppHeader> </AppHeader>
        <Switch>
          <Route path="/lobby">
            <Lobby/>
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          {/*<Route path="/guest">
            <Guest />
          </Route>*/}
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/addquestion">
            <AddQuestion />
          </Route>
          <Route path="/">
            <Guest />
          </Route>
        </Switch>
      </Container>
    );
  }
}
export default App;
