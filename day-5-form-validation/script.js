function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");

    userError.innerText = "";
    passError.innerText = "";

    if (username === "") {
        userError.innerText = "Username cannot be empty";
        return false;
    }

    if (password === "") {
        passError.innerText = "Password cannot be empty";
        return false;
    }

    alert("Login Successful!");
    return true;
}
