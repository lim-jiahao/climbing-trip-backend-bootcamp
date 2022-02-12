import BaseController from './BaseController.mjs';

export default class TripController extends BaseController {
  async index(req, res) {
    try {
      const trips = await this.model.findAll();
      res.send({ trips });
    } catch (err) {
      console.log(err);
    }
  }

  async create(req, res) {
    try {
      const { name } = req.body;
      const trip = await this.model.create({ name });
      res.json({ trip });
    } catch (err) {
      res.status(503).send({ err });
    }
  }
}
