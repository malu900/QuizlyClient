import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
import AddQuiz from "./AddQuiz";
import history from "../Utils/History";

class PersonalQuizzes extends Component{
    constructor(props) {
        super(props);
        this.state = {
            quizzes : []
        }
    }

    componentDidMount = () => {
        this.findAllQuizzes();
    }

    findAllQuizzes(){
        axios.get("http://localhost:8081/quiz/GetByUserID/" + sessionStorage.getItem("userId"))
            .then(response => response.data)
            .then((data) => {
                this.setState({quizzes : data})
            });
    }

    joinQuizAsHost = (quiz) => {
        history.push({
            pathname: '/lobby',
            state: {Host: quiz.user.name, Code: quiz.code, IsHost: true},
        });
    }


    render(){
        return(
            <div>
                <Table bordered hover striped variant>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.quizzes.length === 0 ? (
                        <tr align={"center"}>
                            <td colSpan={"4"}>
                                {" "}
                                {this.state.quizzes.length} You have quizzes ready to start
                            </td>
                            <td>

                            </td>
                        </tr>
                    ) : (
                        this.state.quizzes.map((quiz) => (
                            <tr key={quiz.quizId}>
                                <td>{quiz.quizName}</td>
                                <td><button onClick={() => this.joinQuizAsHost(quiz)}></button></td>
                            </tr>

                        ))
                    )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default PersonalQuizzes;
