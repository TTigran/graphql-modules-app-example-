import { GraphQLModule } from '@graphql-modules/core';
import { importSchema } from 'graphql-import';
import { resolvers }    from '../../resolvers';
import { UserProvider } from "../../providers/user.provider";


const typeDefs = importSchema(
    '/home/tiko/Desktop/workSpace/graphql-modules-app-example-/src/modules/user/schema/user.graphql');


export const UserModule = new GraphQLModule({
    typeDefs,
    resolvers,
    providers: [ UserProvider ]
});
