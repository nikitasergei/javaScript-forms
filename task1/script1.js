window.onload = function () {

  var button = document.getElementById("button");
  var form = document.getElementById('form');
  var forum = document.getElementById('forum');
  button.onclick = function send() {
    var name = form.name.value;
    var mess = form.message.value;
    var userName = document.createElement('div');
    userName.className = "user-name";
    var userMess = document.createElement('div');
    userMess.className = "user-mess";
    userName.innerHTML = name;
    userMess.innerHTML = mess;
    forum.appendChild(userName);
    forum.appendChild(userMess);
    form.name.value = "";
    form.message.value = ""
  }
};


