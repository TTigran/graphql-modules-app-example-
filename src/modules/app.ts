import { GraphQLModule } from '@graphql-modules/core';
import { AuthorModule } from './author/index';


export const appModule = new GraphQLModule({
  imports: [
    AuthorModule
  ],
});
