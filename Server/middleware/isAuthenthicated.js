import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(200).json({
        message: "User not authenticated",
        success: true,
      });
    }

    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(400).json({
        message: "Invalid Token",
        success: true,
      });
    }

    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error.message);
  }
};
