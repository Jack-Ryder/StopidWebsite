const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
        window.location.replace("http://www.w3schools.com");
    } else {
        loginErrorMsg.style.opacity = 1;
    }

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $('nav').addClass('transparent');
        } else {
          $('nav').removeClass('transparent');
        }
      });
})