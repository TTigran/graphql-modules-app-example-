import {Injectable, ProviderScope} from '@graphql-modules/di';
import 'reflect-metadata'

@Injectable(
    {
        scope:ProviderScope.Application
    }
)
export class UserProvider {

    getUserById(id: string){
      const  users = [
            {
                _id: '0',
                username: 'jhon'
            }
        ];

      return  users.find(user => user._id === id);
    }
}


