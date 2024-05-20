const { sendEmail } = require('../src/service/email.service');

const data = {
    email: '',
    emails: ['soydevop@gmail.com', 'herlanherbas@gmail.com'],
    subject: 'Hello ✔',
    text: 'Hello World?',
    template: 'helloworld'
};

sendEmail(data);