import express from 'express';
import ClimbController from '../controllers/climbController.mjs';
import db from '../models/index.mjs';

const router = express.Router();
const controller = new ClimbController(db.Climb, db);

router.get('/', controller.index.bind(controller));

export default router;
