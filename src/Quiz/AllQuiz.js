import {Button} from "react-bootstrap";
import React, {Component} from "react";
import axios from "axios";

export class AllQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Quizzes: [],
        };
    }

    componentDidMount() {
        this.findAllQuizzes();
    }

    findAllQuizzes() {
        axios.get("http://localhost:8081/quiz/getall")
            .then(response => response.data)
            .then((data) => {
                this.setState({Quizzes: data})
            });
        console.log(this.state.dishesId)
    }

    render() {
        const {newQuizClicked} = this.state;
        return (
            this.state.Quizzes.map((quiz) =>
                (
                    <div>
                        <h3>quiz.quizName</h3>
                    </div>
                ))
        );
    }
}

export default AllQuiz;
