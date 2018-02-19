import {JsonController, Get, Param} from 'routing-controllers';
import {User} from '../entity/User';
import {getManager} from 'typeorm';

@JsonController('/users')
export class UserController {
    @Get("/")
    public getAll() {
        return getManager().find(User);
    }

    @Get('/:id')
    public getOne(@Param('id') id: number) {
        return getManager().findOneById(User, id);
    }
}
