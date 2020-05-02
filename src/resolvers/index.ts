import { getAuthors, getAuthor, hello,getUser } from './query';
import { addAuthor  } from './mutation';
import {User} from "../@types/model/user";

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
  User: {
    id: (user: User )=> user._id,
    username:(user: User ) => user.username
  }
};
