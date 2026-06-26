function login(){

let user =
document.getElementById("username").value;

let pass =
document.getElementById("password").value;

if(user=="admin" && pass=="1234"){
 window.location.href="dashboard.html";
}
else{
 document.getElementById("msg").innerHTML=
 "Invalid Login";
}

}

function addPost(){

let content =
document.getElementById("postContent").value;

let feed =
document.getElementById("feed");

feed.innerHTML +=
"<div class='post'>"+content+"</div>";

document.getElementById("postContent").value="";

}