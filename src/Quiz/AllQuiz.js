import {Button, Table} from "react-bootstrap";
import React, { Component } from "react";
import AddQuiz from "./AddQuiz";
import {connect, joinQuiz, showAllQuizzes, getQuizzes, disconnect, connectStartGame, startGame} from '../Ws/WsService'
import CurrentQuestion from "./CurrentQuestion";
import {MessageService} from "../Ws/MessageService";

export class AllQuiz extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Quizzes : [],
            newQuizClicked: false,
            Quiz: [],
        };
    }

    componentDidMount = () => {
        connect();
        setTimeout(()=>{
            showAllQuizzes();
            setTimeout(()=>{
                this.setState({Quizzes : getQuizzes()});
            },2000);
        }, 3000);
    }

    onClickCreateQuiz = (code,id) => {
        connectStartGame(code)
        setTimeout(() => {
            startGame(code)
        }, 2000);

        //this.redirectMePlease(id);
        /*setTimeout(()=>{
            disconnect();
          /!*  startgame = true*!/
        },2000);*/
    }

    onClickCreateQuiz = () => {
        disconnect();
    };
    
    redirectMePlease = (id) => {
        window.location.href = "http://localhost:3000/quiz/lobby/currentQuiz/" + id;
    };

    componentWillMount() {
        this.subscription = MessageService.getMessage().subscribe(message => {
        });
    }

    render() {
        const {newQuizClicked} = this.state;
        const quizzes = this.state.Quizzes;
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
                {/*{newQuizClicked ? (*/}
                {/*    <Button variant="primary" type="submit">*/}
                {/*        Submit Quiz*/}
                {/*    </Button>*/}
                {/*) : null}*/}
                <Table bordered hover striped variant>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        quizzes.length === 0 || quizzes === undefined || quizzes === "Can't find all quizzes" ?
                        <tr align={"center"}>
                            <td colSpan={"4"}> {quizzes.length} You have quizzes ready to start</td>
                        </tr> :
                        quizzes.map((quiz) => (
                                <tr key={quiz.quizId}>
                                <td>{quiz.quizName}</td>

                                <td><Button onClick={()=>this.onClickCreateQuiz(quiz.code,quiz.quizId)}>Start Quiz</Button></td>

                                <td><Button onClick={() => this.onClickCreateQuiz(quiz.code,quiz.quizId)}>Start Quiz</Button></td>

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
