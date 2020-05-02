import { Injectable } from '@graphql-modules/di';
import "reflect-metadata";

@Injectable()
export class UserProvider  {
  users = [
    {
      _id: "0",
      username: 'jhon'
    },
    {
      _id: "1",
      username: 'jhon1'
    }
  ];
   getUserById(id: string) {
   return this.users.find(user => user._id === id);
  }
}


