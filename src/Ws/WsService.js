import history from "../Utils/History";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let stompClient;
var quizzes = [];
//const history = useHistory();
var guests = [];

    export const getGuests = () => {
        return guests;
    }

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
        switch (message.body.method) {
          case 'JOIN':
            this.guests = JSON.parse(message.body.message);
            break;
          case 'LEAVE':
            this.guests = JSON.parse(message.body.message);
            break;
          case 'GETALL':
            if(message.body.message != "[]"){
                console.log(quizzes);
                quizzes = JSON.parse(message.body.message);
            }
            break;
        }
    }
    
    export const showAllQuizzes = () => {
        stompClient.send('/app/getAll');
    }

    /*export const joinQuiz = (id, user) => {
        stompClient.send('/app/join/'+ id, {}, JSON.stringify(user));
        //history.push('/lobby');
        //redirect
    }*/

    /*export const leaveQuiz = (id, user) => {
        stompClient.send('/app/leave/'+ id, {}, JSON.stringify(user));
    }*/
    export const joinQuiz = (code, name) => {
        connectToQuiz(code);
        setTimeout(() =>{ 
        stompClient.send('/app/join/'+ code, {}, JSON.stringify(name));
        history.push("/lobby")},2000);
    }

    export const leaveQuiz = (id, userId) => {
        stompClient.send('/app/leave/'+ id, {}, JSON.stringify(userId));
    }

    export const connectToQuiz = (code) => {
        console.log('Initialize WebSocket Connection');
        const ws = new SockJS('http://localhost:8081/quizly');
        stompClient = Stomp.over(ws);
        const topic = '/topic/quizzes/'+ code;
        stompClient.connect({}, () => {
            console.log("connected");
            stompClient.subscribe(topic, (sdkEvent) => {
            onMessageReceived(sdkEvent);
          });
        }, console.log("Oh no something went wrong"));
    }

