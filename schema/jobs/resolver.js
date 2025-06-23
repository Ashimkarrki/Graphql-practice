import { prisma } from "../../lib/loadPrisma.js";
export const jobResolver = {
  Job: {
    company: async (parent, _) => {
      let company;
      try {
        company = await prisma.company.findUnique({
          where: {
            cid: Number(parent.cid),
          },
        });
      } catch {
        throw new Error("Error occured while loading company");
      }
      return company;
    },
  },
};
