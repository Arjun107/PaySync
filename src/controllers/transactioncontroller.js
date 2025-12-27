const Transaction = require("../models/Transaction");

const transactioncontrol = async (req, res) => {
  try {
    const { amount, type, category, description } = req.body;

    if (!amount || !type) {
      return res
        .status(400)
        .json({ message: "amount and type should be present " });
    }

    const user = req.user.userID;
    const trandata = new Transaction({
      amount,
      type,
      category,
      description,
      user,
    });
    const save = await trandata.save();

    return res.status(201).json({ message: "saved", transaction: save });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { transactioncontrol };
