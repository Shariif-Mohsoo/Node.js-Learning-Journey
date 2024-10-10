const middlewares = {
  validateBody: (req, res, next) => {
    const {
      body: { name, year, rating },
    } = req;
    if (!name || !year || !rating) {
      return res.status(404).json({
        status: "Fail",
        message: "Not valid body for request",
      });
    }
    next();
  },
};
export default middlewares;
