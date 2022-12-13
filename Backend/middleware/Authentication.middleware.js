

const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    res.send({ message: "Please login again" });
  } else {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded) {
      req.body.user_id = decoded.user_id;
      next();
    } else {
      res.send({ message: "Please login again" });
    }
  }
};

module.exports = { authentication };