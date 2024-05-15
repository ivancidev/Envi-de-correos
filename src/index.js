const { sendEmail } = require('../src/service/email.service');

const data = {
    email: 'herlanherbas@gmail.com',
    subject: 'Hello ✔',
    text: 'Hello Worl?',
    template: 'helloworld'
};

sendEmail(data);