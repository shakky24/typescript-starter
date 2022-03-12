import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class UsersEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    first_name?: string;

    @Column()
    last_name?: string;

    @Column()
    phone_number?: number;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    created_at?: Date;

    @Column()
    email?: string;



    // updated_at: Date;
}