const {
  createAdmin,
  createInstructor,
  createCtrainee,
} = require("../Controllers/adminController");

module.exports = function (app) {
  app.post("/createAdmin", createAdmin);
  app.post("/createInstructor", createInstructor);
  app.post("/createCorporateTrainee", createCtrainee);
};
