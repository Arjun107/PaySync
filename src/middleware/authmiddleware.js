const jwt = require("jsonwebtoken");

const authmiddle = (req, res, next) => {
  if (req.headers.authorization) {
    const secretkey = "my_key";
    const authorizationmain = req.headers.authorization;
    const token = authorizationmain.split(" ")[1];
    try {
      const decoded = jwt.verify(token, secretkey);
      console.log("working jwt");

      req.user = decoded;

      next();
    } catch (error) {
      console.log("not working");
      return res.status(401).json({ message: "Invalid " });
    }
  } else {
    return res.status(401).json({ message: "Invalid " });
  }
};

module.exports = authmiddle;
