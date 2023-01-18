const nodemailer = require("nodemailer");

module.exports = async (email:String, subject:String, text:String,location?:String,name?:String) => {
	try {
		
		const transporter = nodemailer.createTransport({
			  service: 'gmail',
			  auth: {
			    user: 'EasyML2022',
			    pass: 'ghorqopgdpmipvnj'
			  }
			});

		await transporter.sendMail({
			from: 'EasyML2022',
			to: email,
			subject: subject,
			text: text,
			attachments: [ name?{
				filename: `${name}.pdf`,
				contentType: 'application/pdf', // <- You also can specify type of the document
				path: location // <- Here comes the buffer of generated pdf file
			}:{}]
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};