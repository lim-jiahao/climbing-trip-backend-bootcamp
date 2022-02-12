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
}
