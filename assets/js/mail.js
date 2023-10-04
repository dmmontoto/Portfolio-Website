function sendMail() {
    var params = {
        user_name : document.getElementById("user_name").value,
        user_email : document.getElementById("user_email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_rxk2nr8", "template_0kv42on", params).then(function (res) {
    })
}

function thanks() {
    var successMessage = document.getElementById("thanks");
    successMessage.textContent = "Your message was received successfully! Thank you!";
    return;
}