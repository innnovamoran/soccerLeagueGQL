import express, { Request, Response } from 'express'
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql'
import { ExamplePingResolve } from './resolvers/ExamplePing';
/* 
import { ApolloServer } from 'apollo-server-express'
const apolloServer = new ApolloServer({
    schema:
})
apolloServer.applyMiddleware({ app, path: '/graphql' }) */
const InitServer = async () => {
    const app = express();
    app.use('/graphql', graphqlHTTP({
        schema: await buildSchema({
            resolvers: [ExamplePingResolve]
        }),
        context: ({ req, res }: { req: Request, res: Response }) => ({ req, res }),
        graphiql: true
    }))
    return app;
};
export {
    InitServer
}
