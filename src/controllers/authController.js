const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await User.findOne({ email });
    const secretkey = "my_key";
    if (exist) {
      const payload = {
        userID: exist.id,
        UserRole: exist.role,
      };

      const match = await bcrypt.compare(password, exist.password);
      if (match) {
        const token = jwt.sign(payload, secretkey, { expiresIn: "1h" });
        return res
          .status(200)
          .json({ message: "login succeful", token: token });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      res.status(404).json({ message: "Email Not Exist's" });
    }
  } catch (error) {
    res.status(400).json({ message: "Server error", error: error.message });
  }
};

module.exports = { loginUser };
