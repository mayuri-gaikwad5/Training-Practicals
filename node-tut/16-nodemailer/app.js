const nodemailer = require("nodemailer");

async function main() {
  // Automatically creates a temporary fake account for testing
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: '"You" <test@example.com>',
    to: "recipient@example.com",
    subject: "Image test",
    html: `
      <h1>Hello world</h1>
      <p>Here's an image for you</p>
      <img src="cid:unique@gmail.com" alt="Embedded Image" />
    `,
    attachments: [
      {
        filename: 'image.png',
        path: './image.png',
        cid: 'unique@gmail.com'
      }
    ]
  });

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(err => console.error(err));