import { prisma } from "../../lib/loadPrisma.js";
export const jobGetAllHandeler = async () => {
  try {
    return await prisma.job.findMany();
  } catch (err) {
    throw new Error("Unexpected Error Occured");
  }
};
export const jobAddHandeler = async (data) => {
  data.cid = Number(data.cid);
  try {
    const job = await prisma.job.create({
      data,
    });
    const users = await prisma.user.findMany();
    const userIds = users.map((s) => s.id);
    const jobId = job.jid;
    const newdata = userIds.map((uid) => {
      return { jid: jobId, id: uid };
    });

    await prisma.newJob.createMany({ data: [...newdata] });

    return job;
  } catch (err) {
    // console.log(err);

    throw new Error("Unexpected Error Occured");
  }
};
export const jobGetAllOfCompanyHandeler = async (cid) => {
  try {
    return await prisma.job.findMany({
      where: {
        cid: cid,
      },
    });
  } catch (err) {
    throw new Error("Unexpected Error Occured");
  }
};
export const jobEditHandeler = async ({ jid, data }) => {
  if (data.cid) {
    data.cid = Number(data.cid);
  }
  try {
    return await prisma.job.update({
      where: {
        jid: jid,
      },
      data: data,
    });
  } catch (err) {
    throw new Error("Unexpected Error Occured");
  }
};

export const jobDeleteHandeler = async ({ jid }) => {
  try {
    return await prisma.job.delete({
      where: {
        jid: jid,
      },
    });
  } catch (err) {
    throw new Error("Job not present");
  }
};

export const jobGetNewHandeler = async ({ id }) => {
  try {
    return await prisma.newJob
      .findMany({
        where: { id },
        include: { job: true },
      })
      .then((res) => {
        return res.map((s) => s.job);
      });
  } catch (err) {
    throw new Error("Something went wrong");
  }
};
export const jobDeleteNewHandeler = async ({ id, jid }) => {
  try {
    await prisma.newJob.deleteMany({
      where: { id: id, jid: jid },
    });
    return await prisma.newJob
      .findMany({ where: { id }, include: { job: true } })
      .then((res) => {
        return res.map((s) => s.job);
      });
  } catch (err) {
    throw new Error("Something went wrong");
  }
};
export const jobDeleteAllNewHandeler = async ({ id }) => {
  try {
    await prisma.newJob.deleteMany({
      where: { id: id },
    });
    return "Succes";
  } catch (err) {
    throw new Error("Something went wrong");
  }
};
export const jobAddBookmarkHandeler = async ({ id, jid }) => {
  try {
    await prisma.bookmark.create({
      data: {
        id,
        jid,
      },
    });
    return prisma.job.findUnique({ where: { jid } });
  } catch (err) {
    throw new Error("Bookmark not available");
  }
};

export const jobRemoveBookmarkHandeler = async ({ id, jid }) => {
  try {
    await prisma.bookmark.deleteMany({
      where: {
        id,
        jid,
      },
    });
    return await prisma.bookmark
      .findMany({
        where: {
          id: id,
        },
        include: {
          job: true,
        },
      })
      .then((res) => {
        return res.map((s) => s.job);
      });
  } catch (err) {
    throw new Error("Bookmark not available");
  }
};

export const jobGetAllBookmarkHandeler = async ({ id }) => {
  try {
    return await prisma.bookmark
      .findMany({
        where: {
          id: id,
        },
        include: {
          job: true,
        },
      })
      .then((res) => {
        return res.map((s) => s.job);
      });
  } catch (err) {
    console.log(err);
  }
};
