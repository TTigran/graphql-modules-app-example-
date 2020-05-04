import { GraphQLModule } from '@graphql-modules/core';
import { AuthorModule } from './author/index';
import { UserModule } from './user/index';



export const appModule = new GraphQLModule({
  imports: [
      UserModule,
      AuthorModule
  ],
});
