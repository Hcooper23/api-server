const notFoundHandler = (req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
};

module.exports = notFoundHandler;