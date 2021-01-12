import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
import AddQuiz from "./AddQuiz";

class PersonalQuizzes extends Component{
    constructor(props) {
        super(props);
        this.state = {
            quizzes : [] //(wsservice products kan ook wanneer die export is)
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
                console.log(this.state.quizzes);
            });
    }
    redirectMePlease = (id) => {
        window.location.href =
            "http://localhost:3000/Product/" + id;
    };
    render(){
        //const Products = this.state.products;
        //console.log("dit zijn de products in de render: " + products);
        return(
            <div>
                <Table bordered hover striped variant>
                    <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.quizzes.length === 0 ? (
                        <tr align={"center"}>
                            <td colSpan={"4"}>
                                {" "}
                                {this.state.quizzes.length} You have quizzes ready to start
                            </td>
                        </tr>
                    ) : (
                        this.state.quizzes.map((quiz) => (
                            <tr key={quiz.quizId}>
                                <td>{quiz.quizName}</td>
                                {/*{this.state.userId != null ? (
                                    <Button onClick={() => this.redirectMePlease(quiz.quizId)}>
                                        Start quiz{" "}
                                    </Button>
                                ) : (
                                    ""
                                )}*/}
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
