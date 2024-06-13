import { ErrorRequestHandler } from "express";

const errorMidleware: ErrorRequestHandler = async (error, _req, res, _next) => {
  const status = error.statusCode || 500;

  return res.status(status).json({ message: error.message });

  // res.status(status).json({ message: "Internal Server Error" });
};

export default errorMidleware;
