module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username && req.body.password) {
      return res.status(200).json({
        user: {
          token: "token-hy-123",
        },
      });
    } else {
      return res.status(400).json({ message: "密码错误" });
    }
  }
  next();
};
