const { sendEmail } = require('../src/services/email.service');

const data = {
    email: 'herlanherbas@gmail.com',
    subject: 'Hello ✔',
    text: 'Hello Worl?',
    template: 'helloworld'
};

sendEmail(data);