
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDRyN2sXwyu_F8KX3QpMwl6GFMxfm9fi8U",
      authDomain: "kwitter-92044.firebaseapp.com",
      databaseURL: "https://kwitter-92044-default-rtdb.firebaseio.com",
      projectId: "kwitter-92044",
      storageBucket: "kwitter-92044.appspot.com",
      messagingSenderId: "755964811496",
      appId: "1:755964811496:web:765772edd5b9ad9423d15d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem('username')
    document.getElementById('userWelcome').innerHTML='Welcome '+username+' !'
    function addRoom(){
      roomName=document.getElementById('textInput2').value
      firebase.database().ref('/').child(roomName).update({
            purpose: 'adding room name'
      })
      localStorage.setItem('roomName',roomName)
      window.location='kwitter_page.html'
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log('Room name - '+Room_names)
      row="<div class='room_name' id='"+Room_names+" ' onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>"
      document.getElementById('output').innerHTML+=row
      //End code
      });});}
getData();
function redirect(name){
 console.log(name)
 localStorage.setItem('roomName',name)
 window.location='kwitter_page.html'
}

function logOut(){
      localStorage.removeItem('username')
      localStorage.removeItem('roomName')
      window.location='index.html'
}
