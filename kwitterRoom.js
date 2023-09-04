
//codigos de configuração do firebase

  const firebaseConfig = {
    apiKey: "AIzaSyA5LcdTwoqtFLJkACXgsNKYiBjAszpkYoY",
    authDomain: "whatsapp-658bb.firebaseapp.com",
    databaseURL: "https://whatsapp-658bb-default-rtdb.firebaseio.com",
    projectId: "whatsapp-658bb",
    storageBucket: "whatsapp-658bb.appspot.com",
    messagingSenderId: "1075809099154",
    appId: "1:1075809099154:web:ee66fe27d1c0fa9c50b54b"
};

  firebase.initializeApp(firebaseConfig) 
var guardar_nome = localStorage.getItem("userName");
document.getElementById("bem_vindo").innerHTML = "bem vindo "+ guardar_nome;


function addRoom() {
  var guardar_sala = document.getElementById("adicionarSala").value;
  firebase.database().ref("/").child(guardar_sala).update({
      comida:"beterraba"
  })
  localStorage.setItem("roomname",guardar_sala);
  window.location = "kwitterPage.html";
  console.log("teste");
}

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomname");
    window.location="index.html"
}


  function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
                { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
                    { childKey  = childSnapshot.key;
       roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomname",name);
   window.location = "kwitterPage.html";
}