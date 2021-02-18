const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export default (req, res) => {
  if(!process.env.CLIENT_ID && !process.env.CLIENT_SECRET && !process.env.REDIRECT_URI && !process.env.REFRESH_TOKEN){
    console.log("no")
    return res.status(500).send('Something broke!');
  }

  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "angelruggia@gmail.com",
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
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
