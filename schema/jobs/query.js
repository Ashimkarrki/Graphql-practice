import { routeProtection } from "../../lib/routeProtection.js";
import {
  jobGetAllBookmarkHandeler,
  jobGetAllHandeler,
  jobGetAllOfCompanyHandeler,
  jobGetHandeler,
  jobGetNewHandeler,
} from "./db.js";
export const jobQuery = {
  async getAllJob() {
    return await jobGetAllHandeler();
  },
  async getJob(_, args) {
    return await jobGetHandeler(Number(args.jid));
  },
  async getJobOfCompany(_, args) {
    return await jobGetAllOfCompanyHandeler(Number(args.companyId));
  },
  async getNewJob(x, y, { req }) {
    try {
      routeProtection(req);
      return await jobGetNewHandeler({ id: req.user.id });
    } catch (err) {
      return await jobGetAllHandeler();
    }
  },
  async getAllBookMark(x, y, { req }) {
    routeProtection(req);
    return await jobGetAllBookmarkHandeler({ id: req.user.id });
  },
};
