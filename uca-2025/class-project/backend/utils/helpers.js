import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "./../config/constants.js";

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    console.log("Unauth 1");
    res.status(401).json({ message: "Unauthorized access" });
    return;
  }

  try {
    const jwtDecodedToken = jwt.verify(token, JWT_SECRET_KEY);

    if (!jwtDecodedToken?.email) {
      console.log("Unauth 2");
      res.status(401).json({ message: "Unauthorized access" });
      return;
    }

    req.userEmailFromToken = jwtDecodedToken.email;
    next();
  } catch (error) {
    console.log("Unauth 3");
    console.log(error);
    res.status(401).json({ message: "Unauthorized access" });
  }
};
