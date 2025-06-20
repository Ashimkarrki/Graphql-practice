import { companyGetHandeler } from "./db.js";

export const companyQuery = {
  async getCompany(_, args) {
    const comp = await companyGetHandeler(Number(args.companyId));
    return comp;
  },
};
