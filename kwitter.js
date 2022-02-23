function logIn(){
 username=document.getElementById('textInput1').value
 localStorage.setItem('username',username)
 window.location='kwitter_room.html'
}