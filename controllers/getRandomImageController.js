const client = require("../lib/connectDB");
const drive = require("../lib/connectDrive");

const getRandomImageController = async (req, res) => {
  console.log(req.params.id);
  const rand = `SELECT * FROM images ORDER BY RAND() LIMIT 1`;
  client.query(rand, async (err, result) => {
    if (err) throw err;
    const name = result[0].name;
    const img = await drive.get(name);
    if (!img)
      return res.json({
        message: "Error not found",
      });

    const buffer = await img.arrayBuffer();
    const data = Buffer.from(buffer, "base64");

    res.writeHead(200, {
      "Content-Type": "image/png, image/jpeg, image/jpg",
      "Content-Length": data.length,
    });
    res.end(data);
  });
};

module.exports = getRandomImageController;
