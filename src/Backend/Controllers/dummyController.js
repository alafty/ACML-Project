//USE THIS FORMAT WHEN MAKING A CONTROLLER FILE


// @desc    Get Goals
// @rout    GET /api/test
// @access  private
const getGoals = (req, res) => {
    res.json({ message: 'get goals' });
}

// @desc    Set Goals
// @rout    POST /api/test
// @access  private
const setGoals = (req, res) => {
    res.json({ message: 'set goals' });
}

// @desc    Update Goal
// @rout    PUT /api/test/:id
// @access  private
const updateGoal = (req, res) => {
    res.json({ message: `update goal number ${req.params.id}` });
}

// @desc    Delete Goal
// @rout    DELETE /api/test/:id
// @access  private
const deleteGoal = (req, res) => {
    res.json({ message: `delete goal number ${req.params.id}` });
}


module.exports = {
    getGoals, setGoals, updateGoal, deleteGoal
}