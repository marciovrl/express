module.exports = (app) => {
  const findAll = (req, res) => {
    app.services.cars.findAll().then((result) => res.status(200).json(result));
  };

  const find = (req, res) => {
    app.services.cars
      .find({ id: req.params.id })
      .then((result) => res.status(200).json(result));
  };

  return { findAll, find };
};
