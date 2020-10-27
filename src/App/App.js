import React from "react";
import AppHeader from "../common/AppHeader";
import logo from "../logo.svg";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Switch, BrowserRouter, Link, Route } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import Login from "../auth/Login";
import RoomList from "../Room/RoomList";

function App() {
  return (
    <div className="App">
      <AppHeader> </AppHeader>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/rooms">
          <RoomList/>
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
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
