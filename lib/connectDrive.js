const { Deta } = require("deta");
require('dotenv').config()

const deta = Deta(process.env.DETA_KEY);
const drive = deta.Drive(process.env.DETA_DRIVE);

module.exports = drive