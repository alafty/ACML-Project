const nodemailer = require("nodemailer");

module.exports = async (email:String, subject:String, text:String) => {
	try {
		console.log("I know the email");
		console.log(email);
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
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};