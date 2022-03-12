import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/modules/users/models/users.entity';
import { Repository } from 'typeorm';
import { from, map, Observable, switchMap } from 'rxjs';


const APP = 'UsersService';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UsersEntity) private readonly usersRepository: Repository<UsersEntity>) { }

    registerUser(usersEntity: UsersEntity) {
        Logger.debug(`${APP} : registerUser() body: ${JSON.stringify(usersEntity)}`, APP);

        return from(this.usersRepository.findOne({ phone_number: usersEntity.phone_number })).pipe(
            map(doc => { if (doc) { if (doc.phone_number == usersEntity.phone_number) { throw new ConflictException('Phone number exists') } }; return doc }),
            switchMap(doc => { return this.usersRepository.save(usersEntity) })
        );
    }



}

