import * as SockJS from 'sockjs-client'
import * as Stomp from 'react-stomp-client' 

    export const connect = () => {9
        console.log('Initialize WebSocket Connection');
        const ws = new SockJS('http://localhost:8081/quizly');
        const stompClient = null;
        stompClient = Stomp.over(ws);
        const topic = '/topic/quizzes';
        this.stompClient.connect({}, () => {
            console.log("connected");
          this.stompClient.subscribe(topic, (sdkEvent) => {
            this.onMessageReceived(sdkEvent);
          });
        }, console.log("Oh no something went wrong"));
    }


    export const onMessageReceived = (message) => {
        // this.message = JSON.parse(message.body);
        // switch (this.message.body.method) {
        //   case 'JOIN':
        //     this._players = JSON.parse(this.message.body.message);
        //     break;
        //   case 'LEAVE':
        //     this._players = this.message.body.message;
        //     break;
        //   case 'CREATE':
        //     this._games = this.message.body.message;
        //     break;
        //   case 'STARTGAME':
        //     break;
        }