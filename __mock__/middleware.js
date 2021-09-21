module.exports = (req, res, next) => {
  // 登录mock
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username && req.body.password) {
      return res.status(200).json({
        token: "token-hy-123",
      });
    } else {
      return res.status(400).json({ message: "密码错误" });
    }
  }
  // 校验token
  if (req.method === "GET" && req.path === "/me") {
    return res.status(200).json({
      user: {
        name: "wang.haoyu",
        token: "token-hy-123",
      },
    });
  }
  next();
};
