import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';

let stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

export function connect(quizList) {
    const socket = new SockJS('http://localhost:8080/quizly');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/lobby/quizes', function (message) {
            showQuizzes(JSON.parse(message.body).content, quizList);
        });
    });
    console.log("subscribe should have happened already..")
}

export function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    stompClient.send("/app/getAll", {}, JSON.stringify({'name': $("#name").val()}));
}

function showQuizzes(message, quizList) {
    quizList.push(message);
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});