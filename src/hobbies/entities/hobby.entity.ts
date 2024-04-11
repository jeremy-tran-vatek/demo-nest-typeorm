import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Hobby {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string

  @ManyToMany(() => User, (user)=> user.hobbies)
  @JoinTable({
    name: 'users_hobbies',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'users_hobbies_user_id'
    },
    inverseJoinColumn: {
      name: 'hobby_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'users_hobbies_hobby_id'
    }
  })
  users: User[]
}
