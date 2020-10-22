const routerUsers = require('express').Router();
const { readFile, searchUser, sendJSON } = require('../helpers/helpers');

routerUsers.get('/users', (req, res) => {
  sendJSON('users.json', res);
});

routerUsers.get('/users/:id', (req, res) => {
  const reader = readFile('users.json', res);
  let users = '';

  reader.on('data', (data) => {
    users += data;
  });

  reader.on('end', () => {
    users = JSON.parse(users);
    if (!searchUser(users, [req.params.id])) {
      res.status(404).json({ message: 'Нет пользователя с таким id' });
    }

    res.send(searchUser(users, [req.params.id]));
  });
});

module.exports = routerUsers;
