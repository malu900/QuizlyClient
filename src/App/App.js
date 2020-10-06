import React from 'react';
import AppHeader from '../common/AppHeader';
import logo from '../logo.svg';
import './App.scss';
import { Container } from 'react-bootstrap';
import {
  Switch,
  BrowserRouter,
  Link,
  Route,
} from "react-router-dom";
import Quiz from '../Quiz';

function App() {
  return (
    <div className="App">
      <AppHeader> </AppHeader>
      <Container> 
      <div>
        <Switch>
          <Route path="/about">
            <About />
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
      </Container>
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
