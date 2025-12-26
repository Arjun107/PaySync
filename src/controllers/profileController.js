const { json } = require("express");
const User = require("../models/User");

const profile = async (req, res) => {
  try {
    // 1. get logged-in user's id

    const id = req.user.userID;
    console.log(id)
    // 2. find user in database
    const data = await User.findById(id);

    if (data) {
      console.log("Data is coming");
      data.password = undefined;

      // send response
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: "user not found " });
    }
    // 3. if no user found, send 404

    // 4. hide password

    // 5. send response
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = { profile };
