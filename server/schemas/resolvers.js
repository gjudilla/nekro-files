// const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // me: async (_, args, context) => {
        //     try {
            
                // get user._id from the jwt payload using the authMiddleware context which is passed into graphql server (~line 30 of server.js). This retrieves the logged in user without searching the database

        //         return User.findOne({_id: context.user._id});
                
        //     } catch (error) {
        //         console.log("Error finding User: ", error)
        //     }
        // },
    },
    // create mutations for fetch POST requests for Signup & login
    Mutation: {
        
        createUser: async(_, args) => {
            try {
                const newUser = await User.create(args)
                const token = signToken(newUser)
                return {user: newUser, token}
                
            } catch (error) {
                console.log("Error creating User: ", error)
            }
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email});
            
            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token, user };
        },

    }
};

module.exports = resolvers