

const rolemiddle = (req, res, next) => {
  const role = req.user.UserRole;

  console.log(role)
  if (role === "admin") {
                  
    next();
  } else {
    console.log(req.user.UserRole)
    return res.status(403).json({ message: "Not allowed" });
  }
};

module.exports = rolemiddle;
