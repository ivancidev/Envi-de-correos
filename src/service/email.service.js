const nodemailer = require("nodemailer");
const { emailConfig } = require("../config/email.conf");

const transporter = nodemailer.createTransport(emailConfig);

async function sendEmail(data) {
  try {
    let emailOption = {
      from: emailConfig.auth.user,
      subject: data.subject,
      text: data.text,
      html:
        data.template === "helloworld" ? `<b>${data.text}</b>` : data.template,
    };

    if (data.email) {
      emailOption.to = data.email;
    } else if (data.emails) {
      emailOption.to = data.emails.join(",");
    } else {
      throw new Error(
        "No se proporcionó ninguna dirección de correo electrónico."
      );
    }

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
