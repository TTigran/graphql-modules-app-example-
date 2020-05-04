import { GraphQLModule } from '@graphql-modules/core';
import { importSchema } from 'graphql-import';
import { resolvers }    from '../../resolvers';

const typeDefs = importSchema(
    '/home/tiko/Desktop/workSpace/graphql-modules-app-example-/src/modules/author/schema/author.graphql');

export const AuthorModule = new GraphQLModule({
    typeDefs,
    resolvers,
});
