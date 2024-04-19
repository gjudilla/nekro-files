<<<<<<< HEAD
import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';

// Set token secret and expiration date
=======
const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql');
require('dotenv').config();
// set token secret and expiration date
>>>>>>> 8d3ac578493d4215b508b243edff5384edacc048
const secret = process.env.ACCESS_TOKEN_SECRET;
const expiration = '8h';

// Define GraphQL error for authentication
export const AuthenticationError = new GraphQLError('Could not authenticate user.', {
  extensions: {
    code: 'UNAUTHENTICATED',
  },
});

<<<<<<< HEAD
// Middleware function for authentication
export function authMiddleware({ req }) {
  // Allow token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // Split the token string into an array and return actual token
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
=======
    // We split the token string into an array and return actual token
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
   
    if (!token) {
      return req;
    }
   
    // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // return the request object so it can be passed to the resolver as `context`
>>>>>>> 8d3ac578493d4215b508b243edff5384edacc048
    return req;
  }

  // If token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
  }

  // Return the request object so it can be passed to the resolver as `context`
  return req;
}

// Function to sign a token
export function signToken({ email, _id }) {
  const payload = { email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}