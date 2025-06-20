export const routeProtection = (req) => {
  if (!req?.user) {
    throw new Error("User is not Signed in ");
  }
};
