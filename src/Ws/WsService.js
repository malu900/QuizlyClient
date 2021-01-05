import { useHistory } from 'react-router-dom';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let stompClient;
var quizzes = [];
//const history = useHistory();

    export const getQuizzes = () => {
        return quizzes;
    }

    export const connect = () => {
        console.log('Initialize WebSocket Connection');
        const ws = new SockJS('http://localhost:8081/quizly');
        stompClient = Stomp.over(ws);
        const topic = '/topic/quizzes';
        stompClient.connect({}, () => {
            console.log("connected");
            stompClient.subscribe(topic, (sdkEvent) => {
            onMessageReceived(sdkEvent);
          });
        }, console.log("Oh no something went wrong"));
    }


    export const onMessageReceived = (message) => {
            var message = JSON.parse(message.body);
            quizzes = message;
        }
    
    export const showAllQuizzes = () => {
        stompClient.send('/app/getAll');
    }
    
    export const joinQuiz = (id, user) => {
        stompClient.send('/app/join/'+ id, {}, JSON.stringify(user));
        //history.push('/lobby');
        //redirect
    }

    export const leaveQuiz = (id, user) => {
        stompClient.send('/app/leave/'+ id, {}, JSON.stringify(user));
    }
