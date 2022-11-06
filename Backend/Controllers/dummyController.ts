import { Request, Response } from "express";

// @desc    Get Goals
// @rout    GET /api/test
// @access  private
const getGoals = (req: Request, res: Response) => {
  res.json({ message: "get goals" });
};

// @desc    Set Goals
// @rout    POST /api/test
// @access  private
const setGoals = (req: Request, res: Response) => {
  res.json({ message: "set goals" });
};

// @desc    Update Goal
// @rout    PUT /api/test/:id
// @access  private
const updateGoal = (req: Request, res: Response) => {
  res.json({ message: `update goal number ${req.params.id}` });
};

// @desc    Delete Goal
// @rout    DELETE /api/test/:id
// @access  private
const deleteGoal = (req: Request, res: Response) => {
  res.json({ message: `delete goal number ${req.params.id}` });
};

export { getGoals, setGoals, updateGoal, deleteGoal };
