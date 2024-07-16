const nodemailer = require('nodemailer');

exports.sendEmail = async(options)=>{
    // const transporter=nodemailer.createTransport({

    //     host:process.env.SMTP_HOST,
    //     port:process.env.SMTP_PORT,
    //     auth:{
    //         user:process.env.SMTP_MAIL,
    //         pass:process.env.SMTP_PASSWORD,
    //     },
    //     service:process.env.SMTP_SERVICE,

    // });

    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "98a6044ad39120",
          pass: "5de40f61537dcd"
        }
      });

    const mailOptions = {
         from:process.env.SMTP_MAIL,
         to:options.email,
         subject:options.subject,
         text:options.message,
    }
    await transporter.sendMail(mailOptions);
}
