
import nodemailer from "nodemailer"
export default async function sendEmail(req,res){
    try{
        // Email sending logic here
        let nkTechAccount=await nodemailer.createTestAccount();
        // connect with the smtp 
        let transporter=await nodemailer.createTransport({
            host:"smtp.ethereal.email",
            port:587,
            auth:{
                user:"amisha.nktech@gmail.com",
                pass:"array&01"
            },

        });

        let info=await transporter.sendMail({
            from:"noreply@nktech.com",
            to:"amisha.nktech@gamil.com",
            subject:"test mail",
            text:"This is a test email"
        });
          console.log(info.messageId);
        res.send("Email sent successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}