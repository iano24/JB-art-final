const emailInput=document.getElementById("email-input");
const passwordInput=document.getElementById("password-input");
const passwordRepeatInput=document.getElementById("password-repeat-input");
const checkbox=document.getElementById("checkbox");
const cancelButton=document.getElementById("cancelbtn");
const loginButton=document.getElementById("loginbtn");
const emailError=document.getElementById("email-error");
const passwordError=document.getElementById("password-error");
//const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRepeatInputError=document.getElementById("psw-repeat-error");
loginButton.addEventListener("submit",function(event){

let emailValue = emailInput.value;

let atPosition = emailValue.indexOf('@');
let dotPosition = emailValue.lastIndexOf('.');

if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= emailInput.length) {

    emailError.style.display="block";
    emailError.innerHTML="Email is Invalid";
    event.preventDefault();
}else{
    emailError.style.display="none";

}



 if(passwordInput.value.length>1 && passwordInput.value.length<8){
    passwordError.style.display="block";
    passwordError.innerHTML="Password is too short";
    event.preventDefault();
}else{
    emailError.style.display="none";

};
 




let repeatedPassword=passwordRepeatInput.value;

if(passwordInput.value===repeatedPassword){
    
    passwordRepeatInputError.style.display="none";

}else{
    passwordRepeatInputError.style.display="block";
    passwordRepeatInputError.innerHTML="Password must match";
    event.preventDefault();
};

})
