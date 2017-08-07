var wage = document.getElementById("message");
var chat = document.getElementById("chat");
httpGet();
chat.scrollTop = chat.scrollHeight;

wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {//here we captured the enter
        validate(e);
    }
});

function validate(e) {
    httpGet();
}

function httpGet()
{
  $.get("http://52.88.26.79:7000/", function(responseText) {
    var messages = $.parseJSON( responseText )
    for(var i=0;i<messages.length;i++){
      chat.innerHTML += '<div class="messages"> <p style="font-weight: bold;">'+ messages[i].username +':</p> ' + messages[i].chatmessage + '</div>'
    }
});
}
