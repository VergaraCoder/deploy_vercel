import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {

  constructor(
    @InjectRepository(Room)
    private roomRepository:Repository<Room>
  ){}

  async create(createRoomDto: CreateRoomDto) {
    try{
      const dataRoom=this.roomRepository.create(createRoomDto);
      await this.roomRepository.save(dataRoom);
      return dataRoom;
    }catch(err:any){}
  }

  async findAll() {
    try{
      const allRooms=await this.roomRepository.find();
      return allRooms;
    }catch(err:any){}
  }

  async findOne(id: number) {
    try{
      const oneRoom=await this.roomRepository.findOneBy({id});
      return oneRoom;
    }catch(err:any){}
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    try{
      const {affected}=await this.roomRepository.update(id,updateRoomDto);
      return "Perfectly updated";
    }catch(err:any){}
  }

  async remove(id: number) {
    try{
      const {affected}=await this.roomRepository.delete(id);
      return "Perfectly deleted";
    }catch(err:any){}
  }
}
