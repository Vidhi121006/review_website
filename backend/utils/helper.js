import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const hashPassword = async (plain) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
};

export const comparePassword = (plain, hash) => bcrypt.compare(plain, hash);

export const signToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET || "devsecret",
    { expiresIn: "7d" }
  );
};
