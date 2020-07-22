const cars = require('../../data/cars.json');

module.exports = () => {
  const findAll = async () => cars;

  const find = async (filter = {}) => cars[filter.id];

  return { findAll, find };
};
