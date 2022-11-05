//USE THIS FORMAT WHEN MAKING A CONTROLLER FILE
const coursesModel = require ("../Models/course");

// @desc    Get Goals
//  @rout    GET /api/test
// @access  private
const getBySubject= async (req, res) => {
    //used Acml as test name, replace to get the required name from the user
    // Courses should have attribute subject in them 
    const courses = await coursesModel.find({Name:'ACML'});
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
    const courses = await coursesModel.find({ rating: { $gte: 3 } });
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
   const courses = await coursesModel.find({ price: { $gte: 0 } },{ price: { $gte: 1000 } });
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


export {
    getBySubject, getByRating, getByPrice}