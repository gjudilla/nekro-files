// might not need type Query //     me: User

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
    
    type Objective {
        name: String!
        description: String!
        points: Int!
        image: String!
    }

    type Law {
        name: String!
        effect: String!
        icon: String!
    }

    type Faction {
        name: String!
        icon: String!
    }

    type Query {
        me: User
        objectives:[Objective]
        laws:[Law]
        factions:[Faction]
    }

    type Mutation {
        createUser(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
    `;

export default typeDefs