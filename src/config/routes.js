const PATH = '/cars-quiz';

module.exports = (app) => {
  app.route(`${PATH}/cars`).get(app.routes.cars.findAll);
  app.route(`${PATH}/cars/:id`).get(app.routes.cars.find);
  app.route(`${PATH}/users`).get(app.routes.users.findAll);
  app.route(`${PATH}/users/:id`).get(app.routes.users.find);
  app.route(`${PATH}/users`).post(app.routes.users.create);
  app.route(`${PATH}/users/:id`).put(app.routes.users.update);
  app.route(`${PATH}/users/:id`).delete(app.routes.users.remove);
};
