const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com";
const username = document.getElementById("username");
const password = document.getElementById("password");
const formErrorMessage = document.getElementById("formErrorMessage");
const usernameErrorMessage = document.getElementById("usernameErrorMessage");
const passwordErrorMessage = document.getElementById("passwordErrorMessage");
const loginButton = document.getElementById("loginButton");

function togglePassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

function login() {
    formErrorMessage.textContent = "";
    usernameErrorMessage.textContent = "";
    passwordErrorMessage.textContent = "";
    if (password.value.length >= 8) {
        fetch(apiBaseURL + "/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            }),
        }).then(response => {
            if (response.ok) {
                resetForm();
                window.location.assign("index.html");
            } else {
                response.json().then(error => {
                    handleLoginError(error);
                });
            }
        });
    } else {
        handleLoginError({ message: "Password must be at least 8 characters long." });
    }
}

function handleLoginError(error) {
    username.classList.add("error");
    password.classList.add("error");
    username.placeholder = "Enter your username";

    password.placeholder = "Enter your password";
    if (error.statusCode === 409 && error.message.includes("username")) {
        formErrorMessage.textContent = "Username already taken. Please choose a different one.";
    } else {
        formErrorMessage.textContent = "Login failed. Check your input.";
    }
    if (error.message.includes("username")) {
        usernameErrorMessage.textContent = "Username already taken. Please choose a different one.";
    }
    if (error.message.includes("password")) {
        passwordErrorMessage.textContent = "Password is required.";
    } else if (error.message.includes("Password must be at least 8 characters long.")) {
        passwordErrorMessage.textContent = "Password must be at least 8 characters long.";
    }
}

function resetForm() {
    username.classList.remove("error");
    password.classList.remove("error");
    username.value = "";
    password.value = "";
    username.placeholder = "Enter your username";
    password.placeholder = "Enter your password";
    formErrorMessage.textContent = "";
}

