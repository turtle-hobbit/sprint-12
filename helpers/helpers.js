const fs = require('fs');
const path = require('path');

function readFile(fileName, res) {
  const reader = fs.createReadStream(path.join(__dirname, '../data', fileName), { encoding: 'utf8' });
  reader.on('error', () => {
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  });
  return reader;
}

function searchUser(arr, id) {
  // eslint-disable-next-line no-underscore-dangle
  return arr.find((user) => user._id === id.toString());
}

function sendJSON(fileName, res) {
  const reader = readFile(fileName, res);
  res.set({ 'Content-type': 'application/json; charset=utf-8' });
  reader.pipe(res);
}

module.exports = {
  readFile,
  searchUser,
  sendJSON,
};
