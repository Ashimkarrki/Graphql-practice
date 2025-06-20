export const userType = `
    type User{
        id:ID!
        name:String!,
        username:String!,
        password:String!,
        email:String!,
        experience:String,
        looking_for:[String!]

    }
    type Query{
        users:[User]
        logout:Boolean

    }
    type Mutation{
        addUser(userData:addingUserType):User
        loginUser(userData:userLogintype):User
    }
    input addingUserType{
        name:String!,
        username:String!,
        password:String!,
        email:String!,
        experience:String,

        looking_for:[String!]
    }
    input userLogintype{
        email:String!,
        password:String!
    }
`;
