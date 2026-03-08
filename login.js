document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "peter" && password === "evalexsod") {
        window.location.href = "nutrisho.html";
    } else {
        alert("Wrong username or password");
    }
});