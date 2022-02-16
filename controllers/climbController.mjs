import BaseController from './BaseController.mjs';

export default class ClimbController extends BaseController {
  async index(req, res) {
    try {
      const climbs = await this.model.findAll();
      res.send({ climbs });
    } catch (err) {
      console.log(err);
    }
  }

  async create(req, res) {
    const { name, difficulty, tripId } = req.body;
    try {
      const climb = await this.model.create({ name, difficulty, tripId });
      res.send({ climb });
    } catch (err) {
      console.log(err);
    }
  }
}
