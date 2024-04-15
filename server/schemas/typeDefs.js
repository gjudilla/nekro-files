// might not need type Query on lines 14-16
const typeDefs = `
    type User {
        _id: ID!
        email: String!
        password: String!
    } 
     
    type Auth {
        user: User,
        token: ID!
    }

    type Query {
        me: User
    }

    type Mutation {
        createUser(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
    `;
module.exports = typeDefs;
