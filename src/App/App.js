import React, { Component } from "react";
import AppHeader from "../common/AppHeader";
import "./App.scss";
import "./AppJquery.js";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Quiz from "../Quiz/AllQuiz";
import Auth from "../auth/Auth";
import AddQuestion from "../Quiz/AddQuestion";
import Home from "../Home";
import CurrentQuiz from "../Quiz/CurrentQuiz";
// <<<<<<< HEAD
// import Parent from "../Test/Parent";
// =======
import Lobby from "../Lobby/Lobby";
import Guest from "../auth/Guest";
import Winners from "../Quiz/Winners";
import PersonalQuizzes from "../Quiz/PersonalQuizzes";
import {Tutorial} from "./Tutorial";

// >>>>>>> 62115990f07f0455acbe6b0cb82cd8e1dc62bf4a
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: [],
    };
  }
  // componentDidMount() {
  //   this.$el = $(this.el);
  //   this.$el.somePlugin();
  // }
  render() {
    return (
      <div className="App animate-bg">
        <AppHeader> </AppHeader>
        <Container id="content-container">
          <div id="center-content">
            <Switch>
              <Route path="/lobby" component={Lobby}>
                <Lobby />
              </Route>
              <Route path="/login">
                <Auth />
              </Route>
              <Route path="/tutorial">
                <Tutorial />
              </Route>
              {/*<Route path="/guest">
            <Guest />
          </Route>*/}
              <Route exact path="/quiz">
                <Quiz />
              </Route>
              <Route path="/addquestion">
                <AddQuestion />
              </Route>
              <Route path="/quiz/lobby/currentQuiz/:Code" component={CurrentQuiz}>
              </Route>
                <Route path="/PersonalQuizzes" component={PersonalQuizzes}/>
               <Route path="/winners">
                <Winners />
               </Route>
              {/* <Route path="/parent">
            <Parent />
          </Route> */}
              <Route path="/">
                <Guest />
              </Route>
            </Switch>
          </div>
        </Container>
      </div>
    );
  }
}
export default App;
