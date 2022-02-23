//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem('roomName')
function sendMessage(){
      msg=document.getElementById('textinputone').value;
      firebase.database().ref(room_name).push({
            name: username,message: msg,like: 0     })
            document.getElementById('textinputone').value=''
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name=message_data['name']
message=message_data['message']
like=message_data['like']
name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
message_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
like_icon="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>"
row=name_tag+message_tag+like_button+like_icon;
document.getElementById('output').innerHTML+=row
//End code
      } });  }); }
getData();
function logOut(){
      localStorage.removeItem('roomName')
      localStorage.removeItem('username')
      window.location='index.html'
}
function back(){
      window.location="kwitter_room.html"
}
function updateLike(message_id){
      button_id=message_id
      likes=document.getElementById(button_id).value
      updatedLikes=Number(likes)+1
      firebase.database().ref(room_name).child(message_id).update({
            like: updatedLikes
      })
}