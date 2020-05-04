import { getAuthors, getAuthor, hello,getUser } from './query';
import { addAuthor  } from './mutation';

export const resolvers = {
  Query: {
    hello,
    getAuthors,
    getAuthor,
    getUser
  },
  Mutation: {
    addAuthor
  },

};
