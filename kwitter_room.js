//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyClUT9coOlo2tr4W-BoB3cMExlFEmMvR9o",
    authDomain: "kwitter-8217e.firebaseapp.com",
    databaseURL: "https://kwitter-8217e-default-rtdb.firebaseio.com",
    projectId: "kwitter-8217e",
    storageBucket: "kwitter-8217e.appspot.com",
    messagingSenderId: "1007061772179",
    appId: "1:1007061772179:web:bce5ed64d1c57fc2e16a66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
      });
  });
}
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}