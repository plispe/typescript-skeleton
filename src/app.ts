// Render errors with pretty error
require('pretty-error').start();

import * as Koa from 'koa';
import "reflect-metadata";
import {useKoaServer} from "routing-controllers";
import {createConnection} from 'typeorm';

// Connect to database
createConnection().then(async connection => {
    const app: Koa = new Koa();
    const port: number = Number(process.env.PORT) || 3000;

    useKoaServer(app, {
        defaults: {
            nullResultCode: 404,
            undefinedResultCode: 204,
        },
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
