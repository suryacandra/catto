const client = require('../lib/connectDB')

const getAllController = async (req, res) => {
    const all = `SELECT * FROM images ORDER BY name`;
    client.query(all, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  }

module.exports = getAllController