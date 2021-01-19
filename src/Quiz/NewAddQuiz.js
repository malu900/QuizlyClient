import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
import {QuestionAnswerSharp} from "@material-ui/icons";
import {connect, getQuizzes, showAllQuizzes} from "../Ws/WsService";
import axios from "axios";

export class NewAddQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {
                questionName: "",
                answers: ["", "", "", ""]
            },
            quizName: "",
            questions: [],
            totalQuestions: [],
            nrOfQuestions: [],
            quizzes: []
        };
    }

    componentDidMount() {
        connect();
    }

    addNew = (e) => {
        e.preventDefault();
        const q = {
            questionName: "",
            answers: []
        }

        this.setState({
            questions: [...this.state.questions, q]
        });
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(event.target.name + " " + event.target.value)
    };

    onAnswerChange = (e, index, jndex) => {
        let question = this.state.questions[index];
        let answers;
        let answer = e.target.value;

        console.log("i: " + index + ", j: " + jndex)

        if (jndex === 0) {
            answers = [answer]
                .concat(...this.state.questions[index].answers.slice(1, 4));
        } else if (jndex === this.state.questions[index].answers.length - 1) {
            answers = [...this.state.questions[index].answers.slice(0, jndex)]
                .concat(answer, ...this.state.questions[index].answers.slice(jndex + 1))
        } else {
            answers = [...this.state.questions[index].answers.slice(0, jndex)]
                .concat(answer, ...this.state.questions[index].answers.slice(jndex + 1))
        }
        console.log("answers: " + answers)
        console.log("answerslength: " + answers.length)

        question.answers = answers;

        this.questionUpdate(index, question);
    }

    onQuestionChange = (e, index) => {
        const question = this.state.questions[index];
        question.questionName = e.target.value;

        if (index === 0) {
            this.setState({
                questions: [question]
                    .concat(...this.state.questions.slice(1, this.state.questions.length))
            })
        } else if (index === this.state.questions.length - 1) {
            this.setState({
                questions: [...this.state.questions.slice(0, index)]
                    .concat(question, ...this.state.questions.slice(index + 1))
            })
        } else {
            this.setState({
                questions: [...this.state.questions.slice(0, index)]
                    .concat(question, ...this.state.questions.slice(index + 1))
            })
        }

        console.log("questions: " + JSON.stringify(this.state.questions) + " with index: " + index);
        console.log("questions.length: " + this.state.questions.length);

        console.log(e.target.name + " " + e.target.value)
    }


    questionUpdate = (index, question) => {
        if (index === 0) {
            this.setState({
                questions: [question]
                    .concat(...this.state.questions.slice(1, this.state.questions.length))
            })
        } else if (index === this.state.questions.length - 1) {
            this.setState({
                questions: [...this.state.questions.slice(0, index)]
                    .concat(question, ...this.state.questions.slice(index + 1))
            })
        } else {
            this.setState({
                questions: [this.state.questions.slice(0, index)]
                    .concat(question, this.state.questions.slice(index + 1))
            })
        }
    }

    postQuiz() {
        let quiz = {
            quizName: this.state.quizName,
            questions: null,
        };

        sessionStorage.setItem('userId', '2')
        console.log(sessionStorage.getItem('userId'))
        setTimeout(() => {
            axios.post("http://localhost:8081/quiz/" + sessionStorage.getItem('userId'), quiz)
                .then(response => {
                    if (response.data != null) {
                        console.log(response.data + " quiz");
                        let lastQuizId;

                        setTimeout(() => {
                            this.setState({quizzes: getQuizzes()})
                            setTimeout(() => {
                                lastQuizId = this.state.quizzes[this.state.quizzes.length - 1].quizId;
                                this.state.questions.map((q, index) => {
                                    this.postQuestion(lastQuizId, q.questionName, index);
                                })
                            }, 1000)
                        }, 500)
                    }
                })
        }, 500)

    };

    postQuestion(lastQuizId, questionName, index) {
        let question = {
            questionId: null,
            answers: null,
            quiz: null,
            questionName: questionName,
        };

        axios.post("http://localhost:8081/question/" + lastQuizId, question)
            .then((response) => {
                if (response.data != null) {
                    console.log(response.data)
                    this.getLastQuestion(index); //also submits answers with it
                }
            });
    }

    getLastQuestion = (index) => {
        let questionId = null;
        axios.get("http://localhost:8081/question/")
            .then((response) => {
                this.setState({totalQuestions: response.data})
                questionId = this.state.totalQuestions[this.state.totalQuestions.length - 1].questionId;

                this.submitAnswers(questionId, index)
            })
    }

    submitAnswers = (questionId, index) => {
        this.state.questions[index].answers.map((a, index) => {
            let formattedAnswer = {
                answerId: null,
                answerContent: a,
                rightAnswer: false,
                question: null
            }
            index === 0 ? formattedAnswer.rightAnswer = true : formattedAnswer.rightAnswer = false

            console.log("answers with qId: " + questionId)
            axios.post("http://localhost:8081/answer/" + questionId, formattedAnswer)
                .then(response => {
                    // alert("Quiz + questions + answers have been added.")
                    console.log(response.data)
                })
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            showAllQuizzes();
            setTimeout(() => {
                this.postQuiz();
            })
        })
    }

    displayFormField = () => {
        return (
            <div>
                {this.state.questions.map((q, i) => {
                    return (
                        <div>
                            <Form.Group key={i}>
                                <Form.Label>Question</Form.Label>
                                <Form.Control
                                    required
                                    autoComplete={"off"}
                                    type="text"
                                    name="questionName"
                                    value={this.state.questions[i].questionName}
                                    onChange={(e) => this.onQuestionChange(e, i)}
                                    className={""}
                                    placeholder="Enter Question"
                                />

                                {console.log("[i].questionName: [" + i + "]." + this.state.questions[i].questionName)}
                            </Form.Group>
                            <Form.Group className="answers">
                                {Array.from({length: 4}, (a, j) => (
                                    <Form.Group key={j}>
                                        <Form.Label>Answer {j + 1}</Form.Label>
                                        <Form.Control
                                            required
                                            autoComplete={"off"}
                                            type="text"
                                            name="answer"
                                            value={this.state.questions[i].answers[j]}
                                            onChange={(e) => this.onAnswerChange(e, i, j)}
                                            className={""}
                                            placeholder="Enter answer"
                                        />
                                    </Form.Group>
                                ))}
                            </Form.Group>
                        </div>
                    );
                })}
            </div>
        );
    };

    render() {
        console.log("questions: " + JSON.stringify(this.state.questions))
        return (
            <div className="another-quiz">
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Quiz name</Form.Label>
                        <Form.Control
                            type="quizName"
                            name="quizName"
                            placeholder="quiz name"
                            value={this.state.quizName}
                            onChange={this.onChange}
                            required
                        />
                        <Form.Text className="text-muted"/>
                    </Form.Group>
                    <Button onClick={(e) => this.addNew(e)}>New question</Button>
                    <div>{this.displayFormField()}</div>
                    <Button variant="primary" type="submit">
                        Submit quiz
                    </Button>
                </Form>
            </div>
        );
    }
}

export default NewAddQuiz;
