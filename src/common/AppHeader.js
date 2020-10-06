import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';
import '../Quiz';
import './AppHeader.scss';
import { Container } from 'react-bootstrap';

export class AppHeader extends Component {
    render() {
        return (
            <Container>         
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/topics">Topics</Link>
                    </li>
                    <li>
                    <Link to="/quiz">Quiz</Link>
                    </li>
                </ul>
            </Container>
        )
    }
}

export default AppHeader
