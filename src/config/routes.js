const PATH = '/cars-quiz';

module.exports = (app) => {
  app.route(`${PATH}/cars`).get(app.routes.cars.findAll);

  app.route(`${PATH}/cars/:id`).get(app.routes.cars.find);
};
