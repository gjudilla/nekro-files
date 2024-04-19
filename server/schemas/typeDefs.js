// might not need type Query //     me: User

const typeDefs = `
    type Faction {
        _id: ID!
        name: String!
        icon: String!
    }

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
        factions: [Faction]
        
    }

    type Mutation {
        createUser(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
    `;
module.exports = typeDefs;
