import * as express from "express";
import "reflect-metadata";
import {useExpressServer} from "routing-controllers";
import {createConnection} from 'typeorm';

// Connect to database
createConnection().then(async connection => {
    const app: express.Application = express();
    const port: number = Number(process.env.PORT) || 3000;

    useExpressServer(app, {
        cors: {
            origin: [`http://localhost:${port}`]
        },
        // routePrefix: "/api", //
        controllers: [__dirname + "/controller/**/*.+(js|ts)"]
    });

    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}/`);
    });
}).catch(error => console.log(error));
