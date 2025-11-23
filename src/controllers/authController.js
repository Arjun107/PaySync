const User = require("../models/User");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const exist = await User.findOne({ email });
        if (exist) {
            const match = await bcrypt.compare(password, exist.password)
            if (match) {
                return res.status(200).json({ message: "login succeful" });
            }
            else {
                res.status(401).json({ message: "Incorrect password" });
            }
        }

        else{
            res.status(404).json({message:"Email Not Exist's"})
        }

    } catch (error) {
        res.status(400).json({ message: "Server error", error: error.message });
    }
}

module.exports = {loginUser}