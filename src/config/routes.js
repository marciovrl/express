module.exports = (app) => {
  app.route('/cars').get(app.routes.cars.findAll);

  app.route('/cars/:id').get(app.routes.cars.find);
};
