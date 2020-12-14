import { Button, Table } from "react-bootstrap";
import React, { Component } from "react";
import AddQuiz from "./AddQuiz";
import Quiz from "./Quiz";
import axios from "axios";
import SockJsClient from "react-stomp";
import { Link } from "react-router-dom";

export class AllQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuizClicked: false,
      Quizzes: [],
      NewQuiz: [],
      stompClient: null,
    };
  }

  sendMessage = () => {
    this.clientRef.sendMessage("/app/getAll");
  };

  // onClickCreateQuiz = (e) => {
  //   console.log(this.newQuizClicked);
  // };

  addQuiz = (quiz) => {
    console.log(quiz);
    this.setState({
      Quiz: [...this.state.Quiz, quiz],
    });
  };

  componentDidUpdate() {
    console.log(this.state.Quiz);
  }

  // componentDidUpdate() {
  //   console.log(this.state.Quiz);
  // }

  // render() {
  //   const { newQuizClicked } = this.state;
  //   return (
  //     <div>
  //       <Button
  //         onClick={() => this.setState({ newQuizClicked: !newQuizClicked })}
  //       >
  //         {newQuizClicked ? "Remove quiz" : "Add quiz"}
  //       </Button>
  //       <div>
  //         {newQuizClicked ? <AddQuiz addQuiz={this.addQuiz} /> : <div></div>}
  //       </div>
  //       {newQuizClicked ? (
  //         <Button variant="primary" type="submit">
  //           Submit Quiz and question
  //         </Button>
  //       ) : null}

  //       <div>
  //         {this.state.Quiz.map((q) => (
  //           <Quiz quiz={q} key={q} questions={q.questions} />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
  // }

  onClickCreateQuiz = (e) => {
    console.log(this.newQuizClicked);
  };

  findAllQuizzes() {
    axios
      .get("http://localhost:8081/quiz/getAll")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ NewQuiz: data });
        console.log(data);
      });
    console.log(this.state.NewQuiz);
  }

  componentDidMount() {
    setTimeout(() => {
      this.sendMessage();
      console.log(this.state.NewQuiz);
    }, 1000);
  }

  startQuiz() {
    console.log("Start");
  }

  render() {
    const { newQuizClicked } = this.state;
    return (
      <div>
        <Button
          onClick={() => this.setState({ newQuizClicked: !newQuizClicked })}
        >
          {newQuizClicked ? "Remove quiz" : "Add quiz"}
        </Button>
        <div>
          {newQuizClicked ? <AddQuiz addQuiz={this.addQuiz} /> : <div></div>}
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
            {this.state.NewQuiz.length === 0 ? (
              <tr align={"center"}>
                <td colSpan={"4"}>
                  {" "}
                  {this.state.NewQuiz.length} You have quizzes ready to start
                </td>
              </tr>
            ) : (
              this.state.NewQuiz.map((quiz) =>
                quiz.map((q) => (
                  <tr key={q.quizId}>
                    <td>{q.quizName}</td>
                    {
                      <td>
                        <Link to={"/quiz/lobby/" + q.quizId}> Join </Link>
                      </td>
                    }
                  </tr>
                ))
              )
            )}
          </tbody>
        </Table>
        <SockJsClient
          url="http://localhost:8081/quizly"
          topics={["/topic/quizzes"]}
          onConnect={() => {
            console.log("connected");
          }}
          onDisconnect={() => {
            console.log("Disconnected");
          }}
          onMessage={(msg) => {
            var jobs = this.state.NewQuiz;
            jobs.push(msg);
            this.setState({ NewQuiz: jobs });
            console.log(this.state);
          }}
          ref={(client) => {
            this.clientRef = client;
          }}
        />
      </div>
    );
  }
}
export default AllQuiz;
