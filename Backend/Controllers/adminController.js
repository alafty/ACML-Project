const admin = require("../Models/admin");
const instructor = require("../Models/instructor");
const cTrainee = require("../Models/corporateTrainee");

const createAdmin = async (req, res) => {
    const existUsername = await admin.findOne({ Username: req.body.Username});
    if (existUsername) {
      console.log('username taken');
    }
    else {
    admin.create(req.body);
    res.status(200).json({ message: 'admin created' });
    }
}

const createInstructor = async (req, res) => {
    const existUsername = await instructor.findOne({ Username: req.body.Username});
    if (existUsername) {
      console.log('username taken');
    }
    else {
    instructor.create(req.body);
    res.status(200).json({ message: 'instructor created' });
    }
}

const createCtrainee = async (req, res) => {
    const existUsername = await cTrainee.findOne({ Username: req.body.Username});
    if (existUsername) {
      console.log('username taken');
    }
    else {
    cTrainee.create(req.body);
    res.json({ message: 'corporate trainee created' });
    }
}

module.exports = {
    createAdmin, createInstructor, createCtrainee
}