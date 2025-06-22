import { prisma } from "../../lib/loadPrisma.js";
export const companyResolver = {
  Company: {
    jobs: (parent, _) => {
      console.log("hi");
      console.log(parent);
      return prisma.job.findMany({
        where: {
          cid: parent.cid,
        },
      });
    },
  },
};
