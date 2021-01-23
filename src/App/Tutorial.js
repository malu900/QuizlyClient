import React, {Component} from "react";
import {ListGroup, Table} from "react-bootstrap";

export class Tutorial extends Component {
    render() {
        return (
            <div>
                <h1>How to use Quizly</h1>
                <Table bordered hover striped variant>
                    <thead>
                    <tr>
                        <th>Steps</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>#1 Go to Quiz</td>
                    </tr>
                    <tr>
                        <td>#2 Click on Add Quiz</td>
                    </tr>
                    <tr>
                        <td>#3 Fill in Quiz Name and submit</td>
                    </tr>
                    <tr>
                        <td>#4 Click on Create Question</td>
                    </tr>
                    <tr>
                        <td>#5 Click on Add Question to add to Quiz</td>
                    </tr>
                    <tr>
                        <td>#6 Click Create Question to add more questions</td>
                    </tr>
                    <tr>
                        <td>#7 Play</td>
                    </tr>

                    </tbody>
                </Table>
                {/*<ListGroup>*/}
                {/*    <ListGroup.Item variant="secondary">#1 Go to Quiz</ListGroup.Item>*/}
                {/*    <ListGroup.Item variant="secondary">#2 Click on Add Quiz</ListGroup.Item>*/}
                {/*    <ListGroup.Item variant="secondary">#3 Fill in Quiz Name and submit</ListGroup.Item>*/}
                {/*    <ListGroup.Item variant="secondary">#4 Click on Create Question</ListGroup.Item>*/}
                {/*    <ListGroup.Item variant="secondary">#5 Click on Add Question to add to Quiz</ListGroup.Item>*/}
                {/*    <ListGroup.Item variant="secondary">#6 Click Create Question to add more questions</ListGroup.Item>*/}
                {/*    <ListGroup.Item variant="secondary">#7 Play</ListGroup.Item>*/}

                {/*</ListGroup>*/}
            </div>
        )
    }
}