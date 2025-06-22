import { companyGetHandeler, companyAllGetHandeler } from "./db.js";

export const companyQuery = {
  async getCompany(_, args) {
    return await companyGetHandeler(Number(args.companyId));
  },
  async getAllCompany() {
    return await companyAllGetHandeler();
  },
};
