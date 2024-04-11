import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity({name: 'users_hobbies'})
export class UserHobby {
    @PrimaryGeneratedColumn()
    id: number;
}
