function validateForm() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");

    userError.innerText = "";
    passError.innerText = "";

    if (username === "") {
        userError.innerText = "Username is required";
        return false;
    }

    if (password === "") {
        passError.innerText = "Password is required";
        return false;
    }

    alert("Login Successful!");
    return true;
}
