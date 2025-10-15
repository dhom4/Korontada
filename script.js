// script.js
const form = document.getElementById('serviceForm');
const responseMsg = document.getElementById('responseMsg');


form.addEventListener('submit', (e) => {
e.preventDefault();


const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const region = document.getElementById('region').value.trim();
const message = document.getElementById('message').value.trim();


if (!name || !email || !region || !message) {
responseMsg.textContent = 'Please fill in all fields.';
responseMsg.style.color = 'yellow';
return;
}


responseMsg.textContent = `Thank you, ${name}! Your service request has been received.`;
responseMsg.style.color = '#00ff99';


form.reset();
});
