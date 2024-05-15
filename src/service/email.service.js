const nodemailer = require("nodemailer");
const { emailConfig } = require("../config/email.conf");

const transporter = nodemailer.createTransport(emailConfig);

async function sendEmail(data) {
  try {
    let emailOption = {
      from: emailConfig.auth.user,
      to: data.email ? data.email : data.emails ? data.emails.join(",") : "",
      subject: data.subject,
      text: data.text,
      html: data.template === "helloworld" ? `<b>${data.text}</b>` : data.template,
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
    sendEmail
}
