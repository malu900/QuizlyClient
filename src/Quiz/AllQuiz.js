import {Button, Table} from "react-bootstrap";
import React, { Component } from "react";
import AddQuiz from "./AddQuiz";
import axios from 'axios'
import {connect, joinQuiz, showAllQuizzes, getQuizzes} from '../Ws/WsService';
import { useHistory } from 'react-router-dom';
import History from "../Utils/History";



export class AllQuiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Quizzes : [],
            newQuizClicked: false,
            Quiz: [],
            userId: null
        };
    }

    componentDidMount = () => {
        this.state.userId =
            sessionStorage.getItem('userId') ;
        connect();
        setTimeout(()=>{
            showAllQuizzes();
            setTimeout(()=>{
                this.setState({Quizzes : getQuizzes()});
                console.log(this.state.Quizzes.length);
            },1000);
        }, 3000);
    }

    onClickCreateQuiz = (e) => {
        console.log(this.newQuizClicked);
    };

    joinQuiz = (id) => {
        joinQuiz(id, sessionStorage.getItem('userId'));
        //this.props.history.push("/quiz/lobby/currentQuiz");
    }
    viewProfile = function () {
    //const {history} = this.props;
        History.push("/quiz/lobby/currentQuiz");
    };
    redirectMePlease = (id) => {
        window.location.href =
            "http://localhost:3000/quiz/lobby/currentQuiz/" + id;
    };
    render() {
        const {newQuizClicked} = this.state;
        const quizzes = this.state.Quizzes;
        console.log(quizzes);
        console.log(this.state.Quizzes);
        return (
            <div>
                <Button
                    onClick={() => this.setState({newQuizClicked: !newQuizClicked})}
                >
                    {newQuizClicked ? "Remove quiz" : "Add quiz"}
                </Button>
                <div>
                    {newQuizClicked ? <AddQuiz Quiz={this.state.Quiz}/> : <div></div>}
                </div>
                {newQuizClicked ? (
                    <Button variant="primary" type="submit">
                        Submit Quiz
                    </Button>
                ) : null}
                <Table bordered hover striped variant>
                    <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                    quizzes.length === 0 ?
                        <tr align={"center"}>
                            <td colSpan={"4"}> {quizzes.length} You have quizzes ready to start</td>
                        </tr> :
                        quizzes.map((quiz) => (
                                <tr key={quiz.quizId}>
                                <td>{quiz.quizName}</td>
                                    {this.state.userId != null ?
                                        <Button onClick={() => this.redirectMePlease(quiz.quizId)}>Start quiz </Button>
                                        : "" }
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        )
    }

}
export default AllQuiz;
