




function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Define your admin credentials
    var adminUsername = "admin";
    var adminPassword = "admin123";

    if (username === adminUsername && password === adminPassword) {
        // Redirect to admin panel or do something else upon successful login
        
        return true;
    } else {
        // Display error message
        document.getElementById("errorDiv").innerText = "Invalid username or password.";
        return false;
    }
}

// document.addEventListener('DOMContentLoaded', function(){
// var  submit = document.getElementById("submit");

// submit.addEventListener('click', function(){
//     window.location.href='play.html';

// });



// });

