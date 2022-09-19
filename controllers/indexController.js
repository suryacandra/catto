const client = require('../lib/connectDB')
require('dotenv').config()

const indexController = (req, res) => {
  const api = {
    random: process.env.DOMAIN + '/random',
    all: process.env.DOMAIN + '/images',
    single: process.env.DOMAIN + '/source/:name'
  }
    const sql = "SELECT * FROM images ORDER BY RAND() LIMIT 1";
    client.query(sql, (err, result) => {
      if (err) throw err;
        const random = JSON.parse(JSON.stringify(result));
        client.query("SELECT * FROM images", (err, result) => {
            if (err) throw err;
            const all = JSON.parse(JSON.stringify(result));
            res.render("index", { random, api, all });
        });
    });
  }

module.exports = indexController