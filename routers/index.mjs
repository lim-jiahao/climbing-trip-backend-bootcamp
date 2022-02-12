import tripRouter from './tripRouter.mjs';
import climbRouter from './climbRouter.mjs';

const bindRoutes = (app) => {
  app.use('/climbs', climbRouter);
  app.use('/trips', tripRouter);
};

export default bindRoutes;
