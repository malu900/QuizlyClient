import React, { Component } from "react";

export default class Lobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <form>
            <div>
                <label>WebSocket connection:</label>
                <button id="connect" className="btn btn-default" type="submit">Connect</button>
                <button id="disconnect" className="btn btn-default" type="submit"
                        disabled="disabled">Disconnect</button>

                <div>
                    <label>What is your name?</label>
                    <input type="text" id="name" placeholder="Your name here..."/>
                </div>
                <button id="send" className="btn btn-default" type="submit">Send</button>
            </div>


                <div>
                    <label>What is your name?</label>
                    <input type="text" id="name" placeholder="Your name here..."/>
                </div>
                <button id="send" className="btn btn-default" type="submit">Send</button>
            </form>
        )
    }
}