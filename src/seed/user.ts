import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {getManager} from 'typeorm';
import {User} from '../entity/User';
import {random, name} from 'faker';

createConnection().then(async connection => {
    const promises = [];

    for (let i = 0; i < 100; i++) {
        promises.push(getManager().insert(User,{
            age: random.number({min: 18, max: 65}),
            firstName: name.firstName(),
            lastName: name.lastName()
        }));
    }

    await Promise.all(promises);

    connection.close();
}).catch(error => console.log(error));
