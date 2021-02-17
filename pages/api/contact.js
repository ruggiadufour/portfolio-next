const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export default (req, res) => {
  const CLIENT_ID =
    "345901173753-dei2t437sojjj47mpusm4fgia4vt443t.apps.googleusercontent.com";
  const CLIENT_SECRET = "QeXwJ3lYDqtNfhy8zepXLt4t";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN =
    "1//04jTA-L59uyvFCgYIARAAGAQSNwF-L9IrKgx6a8oMj_8clVEVOULqGexKrJU3C9X6yS9-pFxEpNm6rWVxsM19uPE8urOU-dj_cKk";

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "angelruggia@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      const mailOptions = {
        from: "From <angelruggia@rocketmail.com>",
        to: "angelruggia@gmail.com",
        subject: "Contact from my portfolio ",
        html: `
          <h1>From ${req.body.name} 👀
          <p>Message: ${req.body.message}</p>

          <p>Email: ${req.body.email}</p>
        `,
      };

      const result = await transporter.sendMail(mailOptions);
      console.log(result)

      return result;
    } catch (error) {
      console.log(error); 
    } 
  }
  sendMail().then((resp)=>res.send("Contact successfully made.")).catch(error=>res.send(error))
}; 
