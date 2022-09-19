const client = require('../lib/connectDB')
const drive = require('../lib/connectDrive')
const { nanoid } = require("nanoid");
require('dotenv').config()

const uploadController = async (req, res) => {
    const name = req.files.file.name.replace(' ', '')
    const exist = await drive.get(name);
    if (exist)
      return res.json({
        message: "Already exist",
      });
    const contents = req.files.file.data;
    const img = await drive.put(name, { data: contents });

    const url = `${process.env.DOMAIN}/source/${name}`;
    const insert = `SELECT * FROM images WHERE url = ?`;
    client.query(insert, url, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        const id = nanoid();
        const newData = `INSERT INTO images (id, name, url) VALUES ('${id}', '${name}', '${url}')`;
        client.query(newData, (err, result) => {
          if (err) throw err;
          console.log("success");
        });
      } else {
        console.log("exist user");
      }
    });

    res.redirect("/");
  }

module.exports = uploadController