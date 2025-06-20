export const companyType = `
    type Company{
        cid : ID!,
        name:String!,
        location:String!,
        description:String!,
        workson:[String!],
    }
     
        input companyAddType{
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
         }
         type Mutation{
         addCompany(companyData:companyAddType):Company
         editCompany(id:ID,companyData:companyEditType):Company
        deleteCompany(cid:ID!):Company

         }

`;
