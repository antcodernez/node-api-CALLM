import jwt from "jsonwebtoken";

import { config } from "../config/config.js";

export const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    config.jwtSecret, 
    { expiresIn:config.jwtExpiration } 
  );
};

export const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id },
    config.refreshTokenSecret,
    { expiresIn: config.refreshTokenExpiration }
  );
};


export const verifyAccessToken = (token) => {
    try {
      return jwt.verify(token, config.jwtSecret);
    } catch (err) {
      return null;
    }
  };
  
export const verifyRefreshToken = (token) => {
    try {
      return jwt.verify(token, config.refreshTokenSecret);
    } catch (err) {
      return null; 
    }
  };
  