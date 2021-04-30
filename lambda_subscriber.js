const https = require('https');
const util = require('util');
// const fetch = require('node-fetch');
// const webhookURL = 'https://chat.googleapis.com/v1/spaces/AAAAZ_X6qKg/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=WOcpAofw-BBJUPMUfqiiL9q5VRkp2YUFhe7dfjXpwEc%3D';

exports.handler = (event, context) => {
    // console.log(JSON.stringify(event, null, 2));
    // console.log('From SNS:', event.Records[0].Sns.Message);    

    const message = event.Records[0].Sns.Message;
    const postData = {
        "text": message
    };

    const options = {
        method: 'POST',
        hostname: 'chat.googleapis.com',
        port: 443,
        path: 'https://chat.googleapis.com/v1/spaces/AAAAZ_X6qKg/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=WOcpAofw-BBJUPMUfqiiL9q5VRkp2YUFhe7dfjXpwEc%3D'
    };

    const req = https.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        context.done(null);
      });
    });
    
    req.on('error', (e) => {
      console.log('problem with request: ' + e.message);
    });    

    req.write(util.format("%j", postData));
    req.end();
};