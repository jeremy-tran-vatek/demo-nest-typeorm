import { Hobby } from 'src/hobbies/entities/hobby.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Hobby, (hobby) => hobby.users)
  hobbies: Hobby[]
}
