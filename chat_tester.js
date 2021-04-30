const fetch = require('node-fetch');

const webhookURL = 'https://chat.googleapis.com/v1/spaces/AAAAZ_X6qKg/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=WOcpAofw-BBJUPMUfqiiL9q5VRkp2YUFhe7dfjXpwEc%3D';

const data = JSON.stringify({
  'text': 'Hello from a Node script!',
});

fetch(webhookURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  body: data,
}).then((response) => {
  console.log(response);
});