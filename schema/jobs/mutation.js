import { routeProtection } from "../../lib/routeProtection.js";
import {
  jobAddHandeler,
  jobEditHandeler,
  jobDeleteHandeler,
  jobDeleteNewHandeler,
  jobDeleteAllNewHandeler,
  jobAddBookmarkHandeler,
  jobRemoveBookmarkHandeler,
} from "./db.js";

export const jobMutation = {
  async addJob(_, args) {
    return await jobAddHandeler(args.jobData);
  },
  async editJob(_, args) {
    return await jobEditHandeler({ jid: Number(args.jid), data: args.jobData });
  },
  async deleteJob(_, args) {
    return await jobDeleteHandeler({ jid: Number(args.jid) });
  },
  async removeNewJob(_, args, { req }) {
    routeProtection(req);
    return await jobDeleteNewHandeler({
      id: req.user.id,
      jid: Number(args.jid),
    });
  },
  async removeAllNewJob(_, args, { req }) {
    routeProtection(req);

    return await jobDeleteAllNewHandeler({
      id: req.user.id,
    });
  },
  async addBookmark(_, args, { req }) {
    routeProtection(req);
    return await jobAddBookmarkHandeler({
      id: req.user.id,
      jid: Number(args.jid),
    });
  },
  async removeBookmark(_, args, { req }) {
    routeProtection(req);
    return await jobRemoveBookmarkHandeler({
      id: req.user.id,
      jid: Number(args.jid),
    });
  },
};
