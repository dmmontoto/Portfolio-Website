function sendMail() {
    console.log("test");
    var params = {
        user_name : document.getElementById("user_name").value,
        user_email : document.getElementById("user_email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_rxk2nr8", "template_0kv42on", params).then(function (res) {
        alert("Success!");
    })
}

function thanks() {
    var successMessage = document.createElement("p");
    successMessage.textContent = "Your message was received successfully! Thank you!";
    
    var button = document.getElementById("submit");
    button.parentNode.insertBefore(successMessage, button);
}