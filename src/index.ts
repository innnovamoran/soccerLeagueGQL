// uso de decoradores
import "reflect-metadata";
import { InitServer } from './app';

const main = async () => {
    const server = await InitServer();
    server.listen(4000, () => console.log('server init on port 4000'))
}

main();