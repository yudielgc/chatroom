(function () {
    'use strict';

    var userName = '';

    if (sessionStorage.getItem('user') === null) {
        //$('#username-box').css('display', 'block');
        toggleLogin();
    }

    $('#login-btn').click(function () {
        userName = $('#username-box').val();
        if (userName !== '') {
            toggleLogin('close');
            sessionStorage.setItem('user', userName);
        }

        return false;
    });

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
        var msg = userName + ': ' + $('#message-box').val();
        socket.emit('chat', msg);
        $('#messages').append($('<p>').text(msg));
        $('#message-box').val('');
    }

    function toggleLogin(close){
        $('#light-box').css('display', close !== 'close' ? 'block' : 'none');
        $('#overlay').css('display', close !== 'close' ? 'block' : 'none');
    }
})();