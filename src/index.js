const { sendEmail } = require('../src/service/email.service');

function generateOTP() {
    return Math.floor(100000 + Math.random()* 900000).toString();
}

console.log("el codigo es", generateOTP())


const data = {
    email: '',
    emails: ['soydevop@gmail.com'],
    subject: 'Template Email para validación OTP',
    text: 'Por favor, valida tu correo electrónico usando el siguiente código OTP.',
    template: 'otp-validation',
    nombre: "Ivanci",
    codigoOTP: generateOTP(),
    unidadTiempo: 'minutes',
    valorTiempo: 10
};

sendEmail(data);