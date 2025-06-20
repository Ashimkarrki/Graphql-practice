export const jobType = ` 
type Job
  {
    jid : ID!
    tags :[String!]
    link : String
    email : String
    experience : String!
    salary : String
    role : String!
    responsibility : String!
    start_date : String
    last_date : String
    types : String!
    requirements : String!
    location : String
    website:String!
    cid :ID!
}
type Query
  {
    getAllJob:[Job]
    getJob(id:ID!):Job
    getJobOfCompany(companyId:ID!):[Job]
    getNewJob:[Job]
    getAllBookMark:[Job]
    
  }
    input editJobType{
      cid :ID
      tags :[String!]
      link : String
      email : String
      experience : String
      salary : String
      role : String
      responsibility : String
      start_date : String
      last_date : String
      types : String
      requirements : String
      location : String
      website:String
    }
type Mutation
    {
      addJob(jobData:addJobType):Job
      editJob(jid:ID!,jobData:editJobType):Job
      deleteJob(jid:ID!):Job
      removeNewJob(jid:ID!):[Job]
      removeAllNewJob:String
      addBookmark(jid:ID!):Job
      removeBookmark(jid:ID!):[Job]

    }
input addJobType
    {
      cid :ID!
      tags :[String!]
      link : String
      email : String
      experience : String!
      salary : String
      role : String!
      responsibility : String!
      start_date : String
      last_date : String
      types : String!
      requirements : String!
      location : String
      website:String!
    }
`;
