import React, { Component } from "react";
import AppHeader from "../common/AppHeader";
import logo from "../logo.svg";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Switch, BrowserRouter, Link, Route } from "react-router-dom";
import Quiz from "../Quiz";
import Login from "../auth/Login";
import Auth from "../auth/Auth";
import AddQuestion from "../Quiz/AddQuestion";

export class App extends Component {
  constructor(props) {
    super(props);
    this.setState({
      login: [],
    });
  }
  componentDidUpdate() {
    console.log(this.state.login);
  }
  render() {
    return (
      <div className="App">
        <AppHeader> </AppHeader>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/addquestion">
            <AddQuestion />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
function Topics() {
  return <h2>About</h2>;
}

export default App;
