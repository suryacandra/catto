const notFoundController = async (req, res) => {
  res.json({
    message: "Not Found",
  });
};

module.exports = notFoundController;
