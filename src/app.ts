import * as express from "express";
import "reflect-metadata";
import {useExpressServer} from "routing-controllers";
import {createConnection, ConnectionOptions} from 'typeorm';

// Database connection options
const connectionOptions: ConnectionOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL_MODE !== 'disabled'
};

// Connect to database
createConnection(connectionOptions).then(connection => {
    const app: express.Application = express();
    const port: number = Number(process.env.PORT) || 3000;

    useExpressServer(app, {
        cors: {
            origin: [`http://localhost:${port}`]
        },
        // routePrefix: "/api", //
        controllers: [__dirname + "/controller/**/*"]
    });

    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}/`);
    });
}).catch(error => console.log(error));
