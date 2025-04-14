const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token !== process.env.SECRET) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

export default authMiddleware;
