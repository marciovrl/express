module.exports = (app) => {
  const find = (req, res) => {
    app.services.questions
      .find({ position: req.params.id })
      .then((result) => res.status(200).json(result));
  };

  return { find };
};
