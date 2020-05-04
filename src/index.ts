import express          from 'express';
import { appModule }    from './modules/app.module.';
import { ApolloServer } from 'apollo-server-express';
import '../env';

const port = process.env.NODE_PORT;
const { schema,context } = appModule;
const app = express();

const server = new ApolloServer({
    schema,
    context,
    introspection: true,
});


server.applyMiddleware({ app});
app.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);
