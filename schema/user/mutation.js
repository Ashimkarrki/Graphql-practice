import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../lib/loadPrisma.js";
const secretKey = process.env.JWT_SECRET;
const saltRound = 10;
export const userMutation = {
  async addUser(_, args) {
    const pass = args.userData.password;
    if (pass.length < 8) {
      throw new Error("Password length must be greater than 8");
    }
    const hasedPassword = await bcrypt.hash(args.userData.password, saltRound);
    try {
      const user = await prisma.user.create({
        data: { ...args.userData, password: hasedPassword },
      });
      return user;
    } catch (err) {
      throw new Error(
        "Username and Email must be unique or Account already created "
      );
    }
  },
  async loginUser(_, args, { req, res }) {
    const pass = args.userData.password;
    let hasedPassword;
    let verified;
    let user;
    try {
      user = await prisma.user.findUnique({
        where: {
          email: args.userData.email,
        },
      });
      hasedPassword = user.password;
      verified = await bcrypt.compare(pass, hasedPassword);
    } catch (err) {
      throw new Error("User not Found");
    }

    if (verified) {
      const token = jwt.sign(
        { id: user.id, username: user.id, email: user.email },
        secretKey
      );
      res.cookie("token", token);
      return user;
    } else {
      throw new Error("Password or Email not correct");
    }
  },
};
