const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "UnAuthorized access" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      return res.status(403).send({ message: "Forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
}

const verifyAdmin = async (req, res, next) => {
  const requester = req.decoded.email;
  const requesterAccount = await usersCollection.findOne({
    email: requester,
  });
  if (requesterAccount.role === "admin") {
    next();
  } else {
    res.status(403).send({ message: "forbidden" });
  }
};
const verifyModerator = async (req, res, next) => {
  const requester = req.decoded.email;
  const requesterAccount = await usersCollection.findOne({
    email: requester,
  });
  if (requesterAccount.role === "moderator") {
    next();
  } else {
    res.status(403).send({ message: "forbidden" });
  }
};

module.exports = { verifyJWT, verifyAdmin, verifyModerator };
