export const companyType = `
    type Company{
        cid : ID!,
        name:String!,
        location:String!,
        description:String!,
        website: String!
        workson:[String!],
        jobs: [Job!]
    }
     
        input companyAddType{
        website: String!

        name:String!,
        location:String!,
        description:String!,
        workson:[String!],
        }
        input companyEditType{
        name:String,
        location:String,
        description :String,
        workson:[String!],
        }
          type Query{
         getCompany(companyId:ID!):Company
         getAllCompany:[Company]
         }
         type Mutation{
         addCompany(companyData:companyAddType):Company
         editCompany(id:ID,companyData:companyEditType):Company
        deleteCompany(cid:ID!):Company

         }

`;
