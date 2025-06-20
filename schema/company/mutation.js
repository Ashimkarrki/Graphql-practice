import {
  companyAddHandeler,
  companyEditHandeler,
  companyDeleteHandeler,
} from "./db.js";

export const companyMutation = {
  async addCompany(_, args) {
    return await companyAddHandeler(args.companyData);
  },
  async editCompany(_, args) {
    return await companyEditHandeler({
      data: args.companyData,
      cid: Number(args.id),
    });
  },
  async deleteCompany(_, args) {
    return await companyDeleteHandeler({ cid: Number(args.cid) });
  },
};
