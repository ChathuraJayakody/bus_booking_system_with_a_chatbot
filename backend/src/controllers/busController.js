const testBus = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Bus API is working 🚍",
  });
};

module.exports = {
  testBus,
};