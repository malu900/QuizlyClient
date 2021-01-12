import {Button, Table} from "react-bootstrap";
import React, { Component } from "react";
import AddQuiz from "./AddQuiz";
import {connect, joinQuiz, showAllQuizzes, getQuizzes} from '../Ws/WsService'

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
                console.log("Quizzes.length: " + this.state.Quizzes.length);
            },2000);
        }, 10000);
    }

    onClickCreateQuiz = (e) => {
        console.log("newQuizClicked: " + this.newQuizClicked);
    };

    render() {
        const {newQuizClicked} = this.state;
        const quizzes = this.state.Quizzes;
        console.log("These are the quizzes man in AllQuiz: " + JSON.stringify(quizzes));
        // console.log(this.state.Quizzes);
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
                                <td><Button onClick={this.onClickCreateQuiz()}>Start Quiz</Button></td>
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
