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
}
