import { sign as jwtSign, verify as jwtVerify } from "jsonwebtoken";

const secret = process.env.SECRET_KEY;

export const sign = (playload) => jwtSign(playload, secret, { expiresIn: 120 }); // change to 24 hours later

export const verify = (token) => jwtVerify(token, secret);
