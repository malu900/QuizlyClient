import React, { Component } from "react";
import AddQuestion from "./AddQuestion";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";
export default class  QuestionOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            name: "",
            questions: [],
            answers: [],
            round: 1,
            isLoaded: false
        }
    }
    componentWillMount() {
        this.findQuestion()
    }
   /* componentDidUpdate(prevProps, prevState, snapshot) {
        this.findQuestion()
    }*/

    findQuestion(){
        axios.get("http://localhost:8081/question/"+ this.state.id + "/" + this.state.round )
            .then(response => response.data)
            .then((data) => {
                this.setState({questions: data})
                this.setState({answers : data.answers})
            });
    }
    render() {
        const { isLoaded } = this.state;
        return (

            <div className='app'>
                {/* HINT: replace "false" with logic to display the
      score when the user has answered all the questions */}
                {(
                    <>
                        <div className='question-section'>
                            <div className='question-name'>

                            </div>
                            <div className='question-count'>
                                <span>Question 1</span>/{this.state.questions.questionName}
                            </div>
                            <div className='question-text'><div>
                              {/*  {this.state.questions.map((question) => (
                                    <tr key={question.questionId}>
                                        <td>{question.questionName}</td>
                                    </tr>
                                ))}*/}
                                { this.state.questions[this.state.round - 1]}
                            </div>
                            </div>
                        </div>
                        <div className='answer-section'>
                            <ListGroup defaultActiveKey="#link1">
                                    {this.state.answers.map((answer) => (
                                    <ListGroup.Item key={answer.answerId}>
                                        <Button onClick={() => this.Test(answer.answerId)}> {answer.answer} </Button>
                                    </ListGroup.Item>
                                    ))}


                            </ListGroup>

                           {/* <button>
                                {this.state.questions[this.state.round - 1].answers[1].answer}
                            </button>
                            <button>
                                {this.state.questions.answers[0]}
                            </button>
                            <button>
                                {this.state.questions.answers[0]}
                            </button>*/}
                        </div>
                    </>
                )}
            </div>
        );
    }

    Test(answerId) {
    }

}