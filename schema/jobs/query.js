import { routeProtection } from "../../lib/routeProtection.js";
import {
  jobGetAllBookmarkHandeler,
  jobGetAllHandeler,
  jobGetAllOfCompanyHandeler,
  jobGetNewHandeler,
} from "./db.js";
export const jobQuery = {
  async getAllJob() {
    return await jobGetAllHandeler();
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
