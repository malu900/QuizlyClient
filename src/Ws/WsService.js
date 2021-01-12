import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { MessageService } from '../Ws/MessageService';

let stompClient;
var quizzes = [];
//const history = useHistory();
var guests = [];
var startgame = false;

    export var getGuests = () => {
        return guests;
    }

    export const getQuizzes = () => {
        return quizzes;
    }
        export const getStartGame = () => {
        return startgame;
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
            MessageService.sendMessage(JSON.parse(message.body.message));
            break;
          case 'LEAVE':
            MessageService.sendMessage(JSON.parse(message.body.message));
            break;
          case 'GETALL':
            if(message.body.message != "[]"){
                console.log(quizzes);
                quizzes = JSON.parse(message.body.message);
            }
            case 'START':
                MessageService.sendMessage(JSON.parse(message.body.message));
                break;
            break;
        }
    }

    export const disconnect = () => {
        stompClient.disconnect();
    }
    
    export const showAllQuizzes = () => {
        stompClient.send('/app/getAll');
    }
    
    export const joinQuiz = (name, code) => {
        connectToQuiz(code);
        setTimeout(() =>{ 
        stompClient.send('/app/join/'+ code, {}, JSON.stringify(name));
        },2000);
    }

    export const leaveQuiz = (name, code) => {
        stompClient.send('/app/leave/'+ code, {}, JSON.stringify(name));
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
    export const connectStartGame = (code) => {
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
export const startGame = ( code) => {
    stompClient.send('/startGame/'+ code, {}, JSON.stringify(true));
}
