import { prisma } from "../../lib/loadPrisma.js";
export const companyAddHandeler = async (data) => {
  try {
    return await prisma.company.create({ data });
  } catch (err) {
    throw new Error("Name already present");
  }
};
export const companyEditHandeler = async ({ data, cid }) => {
  try {
    return await prisma.company.update({
      where: {
        cid: cid,
      },
      data: data,
    });
  } catch (err) {
    throw new Error("Error while updating info. Make sure everything is good");
  }
};
export const companyGetHandeler = async (id) => {
  try {
    return await prisma.company.findUnique({
      where: {
        cid: id,
      },
    });
  } catch (err) {
    throw new Error("Company not present");
  }
};
export const companyDeleteHandeler = async ({ cid }) => {
  try {
    return await prisma.company.delete({
      where: {
        cid: cid,
      },
    });
  } catch (err) {
    throw new Error("Company  not present");
  }
};
