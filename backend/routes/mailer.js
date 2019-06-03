const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: 'Gmail',
  secure :false,
  port :25,
  auth: {
    user: 'gotrip.lk@gmail.com',
    pass: 'Dil2107447$'
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = {
  sendEmail(from, to, subject, html) {
    return new Promise((resolve, reject) => {
      transport.sendMail({ from, subject, to, html }, (err, info) => {
        if (err) console.log(err);
        console.log(info);
      });
    });
  }
}