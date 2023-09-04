//LINKS FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyA5LcdTwoqtFLJkACXgsNKYiBjAszpkYoY",
      authDomain: "whatsapp-658bb.firebaseapp.com",
      databaseURL: "https://whatsapp-658bb-default-rtdb.firebaseio.com",
      projectId: "whatsapp-658bb",
      storageBucket: "whatsapp-658bb.appspot.com",
      messagingSenderId: "1075809099154",
      appId: "1:1075809099154:web:ee66fe27d1c0fa9c50b54b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 roomname=localStorage.getItem("roomname");
 userName=localStorage.getItem("userName");

function enviar() {
 mensagem = document.getElementById("mensagem").value;
 firebase.database().ref(roomname).push({
      name:userName,
      message:mensagem,
      like:0
 });
 document.getElementById("mensagem").value="";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;

//Início do código
console.log(firebaseMessageId);
console.log(messageData);
name = messageData['name'];
message = messageData['message'];
like = messageData['like'];
nameWithTag = "<h4> "+ name +" <img class='user_tick' src='tick.png'></h4>"
messageWithTag = "<h4 class= 'message_h4'>" + message + "</h4>"
likeButton = "'<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
spanWithTag =  "<span class='glyphicon glyphicon-thumbs-up'>like:"+"</span></button><hr>";
linhaHTML = nameWithTag+messageWithTag+likeButton+spanWithTag
document.getElementById("output").innerHTML += linhaHTML; 


//Fim do código
      } });  }); }
getData();

function updateLike(messageId) {
 like = document.getElementById(messageId).value;
 updateLike = Number(like) +1;
 firebase.database().ref(roomname).child(messageId).update({ like : updatedLikes });
}

function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomname");
      window.location="index.html"
  }