const router = require("express").Router();
import { Request, Response } from "express";
import User from '../Models/individualTrainee';
import Token from '../Models/token';
const crypt = require("crypto");
const sendEmail = require("../Utils/sendEmail");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcrypt");

// send password link
const sendLink =  async (req: Request, res: Response) => {
	console.log(req.body.Email)
	try {
		const emailSchema = Joi.object({
			email: Joi.string().email().required().label("Email"),
		});
		
		let user = await User.findOne({Email:req.body.Email});
		
		if (!user)
			return res
				.status(409)
				.send({ message: "User with given email does not exist!" });

		let token = await Token.findOne({ userId: user.Username });
		if (!token) {
			token = await new Token({
				userId: user.Username,
				token: crypt.randomBytes(32).toString("hex"),
			}).save();
		}

		const url = `http://localhost:3000/password-reset/${token.userId}/${token.token}/`;
		await sendEmail('EasyML22@aol.com', "Password Reset", url);

		res
			.status(200)
			.send({ message: "Password reset link sent to your email account" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

// verify password reset link
const verifyLink = async (req: Request, res: Response) => {
	try {
	
		const user = await User.findOne({ Username: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user.Username,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		res.status(200).send("Valid Url");
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

//  set new password
const setPassword =  async (req: Request, res: Response) => {
	try {
		const passwordSchema = Joi.object({
			password: passwordComplexity().required().label("Password"),
		});
		const { error } = passwordSchema.validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
			console.log(req.params);

		const user = await User.findOne({ Username: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });
		const token = await Token.findOne({
			userId: req.params.id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		// Hashing password, can be added in the third milestone
		// const salt = await bcrypt.genSalt(Number(process.env.SALT));
		// const hashPassword = await bcrypt.hash(req.body.password, salt);
		
		user.Password = req.body.password;
		await user.save();
		await token.remove();

		res.status(200).send({ message: "Password reset successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

export{sendLink,setPassword,verifyLink};