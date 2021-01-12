import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MyToast from "./MyToast";
import axios from "axios";
import NewAnswers from "./NewAnswers";
import {getQuizzes, showAllQuizzes} from "../Ws/WsService";
import Answer from "./Answer";

export default class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.questionChange = this.questionChange.bind(this);
    }

    initialState = {
        quizzes: [],
        questionName: "",
        questions: [],
        answerList: [],
    };

    callbackGetAnswers = (childData) => {
        this.setState({answerList: childData})
    }

    onSubmit = (e) => {
        e.preventDefault();
        let lastQuizId = 69;
        setTimeout(() => {
            showAllQuizzes();
            setTimeout(() => {
                this.setState({quizzes: getQuizzes()});
                console.log("last quiz from all in onSubmit(): " + JSON.stringify(this.state.quizzes[this.state.quizzes.length - 1]))
                console.log("the id: " + JSON.stringify(this.state.quizzes[this.state.quizzes.length - 1].quizId))
                lastQuizId = this.state.quizzes[this.state.quizzes.length - 1].quizId;
                setTimeout(() => {
                    this.postQuestion(lastQuizId)
                }, 500)
            }, 500);
        }, 500);
    };

    postQuestion(lastQuizId) {
        let question = {
            questionId: null,
            answers: null,
            quiz: null,
            questionName: this.state.questionName,
        };

        axios.post("http://localhost:8081/question/" + lastQuizId, question)
            .then((response) => {
                if (response.data != null) {
                    this.setState({show: true});
                    setTimeout(() => this.setState({show: false}), 3000);
                    console.log("submitQuestion response.data: " + response.data)

                    this.getLastQuestion(); //also submits answers with it
                } else {
                    this.setState({show: false});
                }
            });
    }

    questionChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    resetDish = () => {
        this.setState(() => this.initialState);
    };

    getLastQuestion = () => {
        let questionId = null;
        axios.get("http://localhost:8081/question/")
            .then((response) => {
                this.setState({questions: response.data})
                console.log("Questions in state: " + JSON.stringify(this.state.questions))
                questionId = this.state.questions[this.state.questions.length - 1].questionId;
                console.log("the lastId: " + questionId)

                this.submitAnswers(questionId)
            })
    }

    submitAnswers = (questionId) => {
        this.state.answerList.map((answer, index) => {
            let formattedAnswer = {
                answerId: null,
                answerContent: answer,
                rightAnswer: false,
                question: null
            }
            console.log("Answer: " + JSON.stringify(answer) + index)
            index === 0 ? formattedAnswer.rightAnswer = true : formattedAnswer.rightAnswer = false

            axios.post("http://localhost:8081/answer/" + questionId, formattedAnswer)
                .then(response => {
                    console.log("Answer have been potentially added with questionId [" + questionId +
                        "], response.data: " + response.data)
                    alert("Quiz + questions + answers have been added.")
                })
        })
    }

    render() {
        const {questionName} = this.state;
        return (
            <div>
                <div style={{display: this.state.show ? "block" : "none"}}>
                    <MyToast
                        children={{
                            show: this.state.show,
                            message: "Question saved Succesfully.",
                        }}
                    />
                </div>

                <Form
                    onReset={this.resetQuestion}
                    onSubmit={this.onSubmit}
                    id={"questionId"}
                >
                    <Form.Group>
                        <Form.Label>Question</Form.Label>
                        <Form.Control
                            required
                            autoComplete={"off"}
                            type="text"
                            name={"questionName"}
                            value={questionName}
                            onChange={this.questionChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Question"
                        />
                    </Form.Group>
                    <NewAnswers parentCallback={this.callbackGetAnswers}/>
                    {console.log("THEFUCKINGANSWERCALLBACK this.state.answerList: " + JSON.stringify(this.state.answerList))}
                    <Button variant="primary" type="submit">
                        Add question
                    </Button>
                    <Button variant="info" type={"reset"}>
                        reset
                    </Button>
                </Form>
            </div>
        );
    }
}
