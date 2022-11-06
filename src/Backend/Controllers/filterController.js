//USE THIS FORMAT WHEN MAKING A CONTROLLER FILE
const coursesModel = require ("../Models/course");

// @desc    Get Goals
//  @rout    GET /api/test
// @access  private
const getBySubject= async (req, res) => {
    //used Acml as test name, replace to get the required name from the user
    // Courses should have attribute subject in them 
    var factor = req.body.Name
    const courses = await coursesModel.find({Name:factor});
    try {
        res.send(courses);
      } catch (error) {
        res.status(500).send(error);
      }
    // filter specific subjects
}

// @desc    Set Goals
// @rout    POST /api/test
// @access  private
const getByRating = async (req, res) => {
    //used 3 as test rating, replace to get the required name from the user
    var factor = req.body.Rating
    const courses = await coursesModel.find({ rating: { $gte: factor } });
    try {
        res.send(courses);
      } catch (error) {
        res.status(500).send(error);
      }
    // filter the ratings under a specific number
}

// @desc    Update Goal
// @rout    PUT /api/test/:id
// @access  private
const getByPrice = async (req, res) => {
   //used 0,1000 as test prices, replace to get the required name from the user
   var factorSmaller  = req.body.PriceLow;
   var factorGreater = req.body.PriceHigh;
   const courses = await coursesModel.find({
    Price: { $gt: factorGreater,$lt: factorSmaller }
  });
   try {
       res.send(courses);
     } catch (error) {
       res.status(500).send(error);
     }
    // filter in price range
}

// @desc    Delete Goal
// @rout    DELETE /api/test/:id
// @access  private


// export {getByRating,getByPrice,getBySubject}
module.exports = {
    getBySubject, getByRating, getByPrice};