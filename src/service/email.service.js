const nodemailer = require("nodemailer");
const { emailConfig } = require("../config/email.conf");
const pug = require("pug");
const path = require("path");
const fs = require('fs'); 

const transporter = nodemailer.createTransport(emailConfig);

async function sendEmail(data) {
  try {
    let htmlContent;

    if(data.template === "otp-validation"){
      const templatePath = path.join(__dirname, '../views/templates/otp-validation.pug');
      htmlContent = pug.renderFile(templatePath, {
        nombre: data.nombre,
        codigoOTP: data.codigoOTP,
        unidadTiempo: data.unidadTiempo,
        valorTiempo: data.valorTiempo
      });
    } else if (data.template === "helloworld") {
      htmlContent = `<b>${data.text}</b>`;
    } else{
      htmlContent = data.template;
    }

    const imagePath = path.join(__dirname, '../assets/imageTemplate.jpg');
    const imageContent = fs.readFileSync(imagePath);

    let emailOption = {
      from: emailConfig.auth.user,
      to: data.email || data.emails.join(','),
      subject: data.subject,
      text: data.text,
      html: htmlContent,
      attachments: [
        {
          filename: 'marvel.jpg',
          content: imageContent,
          cid: 'unique@background.image.cid'
        }
      ]
    };

    let info = await transporter.sendMail(emailOption);
    console.log("Correo electronico enviado: ", info);
    return { succes: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return { success: false, error: error };
  }
}

module.exports = {
  sendEmail,
};
