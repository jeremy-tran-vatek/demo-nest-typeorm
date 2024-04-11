import { Injectable } from '@nestjs/common';
import { CreateHobbyDto } from './dto/create-hobby.dto';
import { UpdateHobbyDto } from './dto/update-hobby.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hobby } from './entities/hobby.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class HobbiesService {
  constructor(
    @InjectRepository(Hobby)
    private hobbyRepository: Repository<Hobby>
  ){}
  async create(createHobbyDto: CreateHobbyDto) {
    const hobby = this.hobbyRepository.create(createHobbyDto)
    hobby.users = createHobbyDto.userIds.map((id) => ({... new User(), id}))
    return await this.hobbyRepository.save(hobby, {reload: true})
  }

  async findAll() {
    return await this.hobbyRepository.find({
      relations: {
        users: true
      }
    })
  }

  async findOne(id: number) {
    return await this.hobbyRepository.findOneBy({
      id,
  })
  }

  update(id: number, updateHobbyDto: UpdateHobbyDto) {
    return `This action updates a #${id} hobby`;
  }

  remove(id: number) {
    return `This action removes a #${id} hobby`;
  }
}
