const routerCards = require('express').Router();
const { sendJSON } = require('../helpers/helpers');

routerCards.get('/cards', (req, res) => {
  sendJSON('cards.json', res);
});

module.exports = routerCards;
