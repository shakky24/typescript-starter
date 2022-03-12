import { Body, Controller, Logger, Post } from '@nestjs/common';
import { UsersEntity } from './models/users.entity';
import { UsersService } from 'src/modules/users/users.service';

const APP = 'UsersController';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post()
    registerUser(@Body() userData: UsersEntity) {
        Logger.debug(`${APP} : registerUser()`, APP);

        return this.usersService.registerUser(userData);
    }

}
