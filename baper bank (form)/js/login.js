document.getElementById("login").addEventListener("click", function () {
    const emailField = document.getElementById("input-email");
    const userEmail = emailField.value;
    const passwordField = document.getElementById("input-password");
    const userPassword = passwordField.value;
    if (userEmail == "admin@gmail.com" && userPassword == "admin") {
      window.location.href = 'baperBankAdmin.html';
    } else {
      console.log("Failed");
    }
  });