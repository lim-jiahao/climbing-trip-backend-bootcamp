import BaseController from './BaseController.mjs';

export default class TripController extends BaseController {
  async index(req, res) {
    try {
      const trips = await this.model.findAll({ include: 'climbs' });
      res.send({ trips });
    } catch (err) {
      console.log(err);
    }
  }

  async get(req, res) {
    const { id } = req.params;
    try {
      const trip = await this.model.findOne({ where: { id }, include: 'climbs' });
      console.log(trip);
      res.send({ trip });
    } catch (err) {
      if (err instanceof Error) {
        res.status(404).send({ err });
      }
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
