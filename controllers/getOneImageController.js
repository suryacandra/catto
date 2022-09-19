const drive = require('../lib/connectDrive')

const getOneImageController = async (req, res) => {
    const name = req.params.name;
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
  }

  module.exports = getOneImageController