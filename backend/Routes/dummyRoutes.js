//USE THIS TEMPLATE WHEN MAKING A ROUTES FILE

const express = require('express');
const dummyRouter = express.Router();
const { getGoals, setGoals, updateGoal, deleteGoal } = require('../controllers/testControllers')

dummyRouter.get('/', getGoals);

dummyRouter.post('/', setGoals);

dummyRouter.put('/:id', updateGoal);

dummyRouter.delete('/:id', deleteGoal);

module.exports = dummyRouter