
import { Resolver, Query } from 'type-graphql';

@Resolver()
export class ExamplePingResolve {
    @Query(() => String)
    ping() {
        return "Pong!";
    }
}