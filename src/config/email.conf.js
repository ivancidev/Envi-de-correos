require('dotenv').config()

const USER = process.env.GMAIL_USER;
const PASS = process.env.PASS_USER;

module.exports = {
    emailConfig: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: USER,
      pass: PASS
    }
  }
}