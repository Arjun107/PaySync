const User = require("../models/User");

const updatecontroller = async (req, res) => {
  const { email,  role } = req.body;

  const exist = await User.findOne({ email });

  if (!exist) {
    return res.status(404).json({ message: "User Not Found " });
  }
  if (exist) {
    exist.role = role;
    const updateuser = await exist.save();
    res.status(200).json({ message: "update is done", User: updateuser });
  }
};

module.exports = { updatecontroller };
