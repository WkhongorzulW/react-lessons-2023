const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Hereglegchiin token oruulah shaardlagatai.",
    });
  }

  try {
    const decoded = jwt.verify(token, "MySuperDuperPrivateKey");
    req.user = decoded;
    return res.status(200).json({
      message: "Amjilttai",
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Hereglegchin token buruu, esvel idevhgui baina.",
    });
  }
  return next;
};

module.exports = verifyToken;
