
// JS-Sign-up Form================================================================================================================================================

function signUp(){
var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var userDetails = localStorage.getItem("users");
//console.log(userDetails);


if(userDetails === null){
userDetails = [];
}else{
userDetails = JSON.parse(userDetails);
}
//console.log(userDetails)



//console.log(name.value, email.value, password.value);
var signUpUser = {
name: name.value,
email: email.value,
password: password.value
}
userDetails.push(signUpUser);
localStorage.setItem("users", JSON.stringify(userDetails));
console.log(userDetails)
name.value = " ";
email.value = " ";
password.value = " ";

// JS-Login Form====================================================================================================================================================

if (userDetails) {
window.location.href = 'login.html'
}
//console.log(signUpUser)
}

function login(){
var email = document.getElementById("email");
var password = document.getElementById("password");
var userDetails = localStorage.getItem("users");
if(userDetails){
userDetails = JSON.parse(userDetails);

}else{
userDetails = [];
}

var saveData = {};
for(var i = 0; i <userDetails.length; i++){
//console.log(userDetails[i]);
if(email.value === userDetails[i].email){
saveData = userDetails[i];
}
//console.log(saveData);
}

if(saveData.email){
if(saveData.password === password.value){
console.log("login successfully");
}else{
console.log("invalid password");
}
}else{
console.log("user not found")
}
}

//==================================================================================================================================================================

