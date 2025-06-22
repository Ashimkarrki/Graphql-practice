import { userMutation, userQuery, userType } from "./user/index.js";
import {
  companyMutation,
  companyType,
  companyQuery,
  companyResolver,
} from "./company/index.js";
import { jobMutation, jobQuery, jobType } from "./jobs/index.js";
export const typeDefs = `#graphql
${userType}
${companyType}
${jobType}
`;

export const resolvers = {
  Query: {
    ...userQuery,
    ...companyQuery,
    ...jobQuery,
  },
  Mutation: {
    ...userMutation,
    ...companyMutation,
    ...jobMutation,
  },
  ...companyResolver,
};
