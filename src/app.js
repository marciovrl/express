const app = require('express')();
const consign = require('consign');

const PATH = '/cars-quiz';

consign({ cwd: 'src', verbose: false })
  .include('./config/midlleware.js')
  .then('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get(`${PATH}`, (req, res) => {
  res.status(200).send();
});

module.exports = app;
