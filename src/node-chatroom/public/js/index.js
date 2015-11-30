(function () {
    'use strict';

    var socket = io();
    $('#send-message-btn').click(function () {
        sendMessage();
        return false;
    });
    $('#message-box').pressEnter(sendMessage);

    socket.on('chat', function (msg) {
        $('#messages').append($('<p>').text(msg));
    });

    function sendMessage(){
        var msg = $('#message-box').val();
        socket.emit('chat', msg);
        $('#messages').append($('<p>').text(msg));
        $('#message-box').val('');
    }
})();