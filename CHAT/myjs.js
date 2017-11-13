var wage = document.getElementById("message");
var chat = document.getElementById("chat");
var i=0;
httpGet();


wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {//here we captured the enter
        validate(e);
    }
});

function validate(e) {
    httpPOST()
    httpGet();
}

function httpGet(){
  $.get("http://52.88.26.79:7000/", function(responseText) {
    for(i=0;i<responseText.length;i++){
      chat.innerHTML += '<div class="messages"> <p style="font-weight: bold;">'+ responseText[i].username +':</p> ' + responseText[i].chatmessage + '</div>'
    }
    chat.scrollTop = chat.scrollHeight;
    window.t = responseText[responseText.length-1].rowid;
});

}

function httpPOST(){
  $.post("http://52.88.26.79:7000/",{
    "username":document.getElementById("username").value,
    "chatmessage":document.getElementById('message').value
  })
  chat.innerHTML = "";
  document.getElementById('message').value="";
  document.getElementById("username").value = "";
}
