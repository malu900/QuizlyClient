import React, { Component } from "react";
import wsApp from "../Main/resources/static/wsApp";

export default class Lobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        console.log("bruh lobby component mounted!")

    }

    render() {


        return (
            <form>
            <div>
                <label>WebSocket connection:</label>
                <button id="connect" type="submit">Connect</button>
                <button id="disconnect" type="submit" disabled="disabled">Disconnect</button>

                <div>
                    <label>What is your name?</label>
                    <input type="text" id="name" placeholder="Your name here..."/>
                </div>
                <button id="send" type="submit">Send</button>
            </div>

                <table id="conversation" className="table table-striped">
                    <thead>
                    <tr>
                        <th>Messages?</th>
                    </tr>
                    </thead>
                    <tbody id="greetings">
                    </tbody>
                </table>
            </form>
        )
    }
}
