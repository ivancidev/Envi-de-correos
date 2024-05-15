const { sendEmail } = require('../src/service/email.service');

const data = {
    email: '',
    emails: ['soydevop@gmail.com', 'herlanherbas@gmail.com'],
    subject: 'Hello ✔',
    text: 'Hello Worl?',
    template: 'helloworld'
};

sendEmail(data);