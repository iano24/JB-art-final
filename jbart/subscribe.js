const userEmail = document.getElementById("user-email");
const dismissButton = document.getElementById("dismiss-button");
const error = document.getElementById("error-message");
const Input = document.getElementById("email-input");
const firstForm = document.getElementById("form");
const button = document.getElementById("button");
const successForm = document.getElementById("success");
Input.addEventListener("input", function () {
    if (Input.value.length > 0) {
        error.style.display = "none";

    } else {
        error.style.display = "inline";

    }
})


button.addEventListener("click", function (event) {
    let emailValue =Input.value;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailPattern.test(emailValue)) {
error.innerHTML = "Please enter a valid email.";
  event.preventDefault();
}
    if (Input.value == "") {
        error.style.display = "inline";
  event.preventDefault();
        
    }
    else if (Input.value.length<12){
        error.style.display = "inline";
        event.preventDefault();
    }
    else {
        error.style.display = "none";
        firstForm.style.display = "none";
        successForm.style.display = "block";
        userEmail.innerHTML = Input.value;

    }

    
});
dismissButton.addEventListener("click", function () {
    successForm.style.display = "none";
    firstForm.style.display = "flex";


})


