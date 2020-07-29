const cars = require('../../data/cars.json');

module.exports = () => {
  const findAll = async () => cars;

  const find = async (filter = {}) => {
    const car = cars.filter((item) => item.id === Number(filter.id));
    return car;
  };

  return { findAll, find };
};
