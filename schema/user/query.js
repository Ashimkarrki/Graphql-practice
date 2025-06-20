import { routeProtection } from "../../lib/routeProtection.js";
import { prisma } from "../../lib/loadPrisma.js";
export const userQuery = {
  async users(a, b, { req }) {
    routeProtection(req);
    return await prisma.user.findMany();
  },
  async logout(a, b, { req, res }) {
    res.clearCookie("token");
    return true;
  },
};
