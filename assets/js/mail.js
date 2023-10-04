const btn = document.getElementById('button');
const user_name = document.getElementById('user_name');
const user_email = document.getElementById('user_email');
const description = document.getElementById('message');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_rxk2nr8';
   const templateID = 'template_0kv42on';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Email Sent!';
      user_name.value = '';
      user_email.value = '';
      description.value = '';

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});