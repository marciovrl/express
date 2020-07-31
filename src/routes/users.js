module.exports = (app) => {
  const findAll = (req, res) => {
    app.services.users.findAll().then((result) => res.status(200).json(result));
  };

  const find = (req, res) => {
    app.services.users
      .find({ id: req.params.id })
      .then(([result]) => res.status(200).json(result));
  };

  const create = (req, res) => {
    app.services.users
      .create({ user: req.body })
      .then((result) => {
        if (result.error) return res.status(400).json(result);
        return res.status(201).json(result);
      });
  };

  const update = (req, res) => {
    app.services.users
      .update({ id: req.params.id, params: req.body })
      .then((result) => {
        if (result.error) return res.status(400).json(result);
        return res.status(200).json(result);
      });
  };

  const remove = (req, res) => {
    app.services.users
      .remove({ id: req.params.id })
      .then((result) => {
        if (result.error) return res.status(400).json(result);
        return res.status(200).json(result);
      });
  };

  return {
    findAll, find, create, update, remove,
  };
};
