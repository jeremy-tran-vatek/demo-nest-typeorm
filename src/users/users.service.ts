import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const res = this.userRepository.create(createUserDto)    
    return await this.userRepository.save(res, {reload: true})
  }

  findAll() {
    return this.userRepository.find({
      relations: {
        hobbies: true
      }
    })
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: {
        id
      },
      relations: {
        hobbies: true
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
