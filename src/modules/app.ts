import { GraphQLModule } from '@graphql-modules/core';
import { AuthorModule } from './author/index';
import {UserModule} from "./user";


export const appModule = new GraphQLModule({
  imports: [
    AuthorModule,
    UserModule
  ],
});
