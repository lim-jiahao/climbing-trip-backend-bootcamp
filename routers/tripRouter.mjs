import express from 'express';
import TripController from '../controllers/tripController.mjs';
import db from '../models/index.mjs';

const router = express.Router();
const controller = new TripController(db.Trip, db);

router.get('/', controller.index.bind(controller));
router.post('/', controller.create.bind(controller));

export default router;
