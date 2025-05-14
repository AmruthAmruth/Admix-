import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.authToken;
console.log("token",token);

  if (!token) {
      console.log("No Token Here");
    return res.status(401).json({ message: "Access denied. No token provided." });
    
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};