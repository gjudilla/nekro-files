import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';
import dotenv from 'dotenv';
dotenv.config();
// set token secret and expiration date
const secret = process.env.ACCESS_TOKEN_SECRET;
const expiration = '8h';

// Define GraphQL error for authentication
export const AuthenticationError = new GraphQLError('Could not authenticate user.', {
  extensions: {
    code: 'UNAUTHENTICATED',
  },
});

// Middleware function for authentication
export function authMiddleware({ req }) {
  // Allow token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // Split the token string into an array and return actual token
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
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