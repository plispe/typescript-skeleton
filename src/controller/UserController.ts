import {JsonController, Get, Delete, Param, HttpCode, OnUndefined} from 'routing-controllers';
import {User} from '../entity/User';
import {getManager} from 'typeorm';

@JsonController('/users')
export class UserController {
    @Get("/")
    public getAll() {
        return getManager().find(User);
    }

    @Get('/:id')
    @OnUndefined(404)
    public getOne(@Param('id') id: number) {
        return getManager().findOneById(User, id);
    }

    @Delete('/:id')
    @HttpCode(204)
    public deleteOne(@Param('id') id: number) {
        return getManager().removeById(User, id);
    }
}
