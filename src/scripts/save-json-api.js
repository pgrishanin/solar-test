const fs = require('node-fs');
const getDb = require('../mocks');

const db = getDb();

fs.mkdir('dist/static', () => {
  for (let [key, value] of Object.entries(db)) {
    fs.writeFile(
      `dist/static/${key}.json`,
      JSON.stringify(value),
      (err) => {
        if (err) throw err;
      }
    );
  }
});