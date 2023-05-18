const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const config = require('../configs').mongo[process.env.NODE_ENV || 'development'];

const baseName = path.basename(__filename);
const db = {};

mongoose
  .connect(`mongodb://${config.host}:${config.port}/${config.dbName}`)
  .catch((err) => {
    console.log('mongo connect err = ', err);
    process.exit(1);
  });

fs.readdirSync(__dirname)
  .filter((file) => file !== baseName && /\.js$/.test(file))
  .forEach((file) => {
    const model = require(path.resolve(__dirname, file));
    db[model.modelName] = model;
  });

module.exports = db;
