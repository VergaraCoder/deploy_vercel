import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';
import { ManageError } from 'src/common/errors/custom/exception.custom';

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
      if(allRooms.length==0){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"NO HAY CUARTOS"
        });
      }
      return allRooms;
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }

  async findOne(id: number) {
    try{
      const oneRoom=await this.roomRepository.findOneBy({id});
      if(!oneRoom){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"NO EXISTE ESA CUARTO"
        });
      }
      return oneRoom;
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }

  async findOneRoomById(id: number) {
    try{
      const oneRoom=await this.roomRepository.findOneBy({id});
      if(!oneRoom){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"NO EXISTE ESA CUARTO"
        });
      }
      return oneRoom;
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }


  async update(id: number, updateRoomDto: UpdateRoomDto) {
    try{
      const {affected}=await this.roomRepository.update(id,updateRoomDto);
      if(affected==0){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"FALLO LA ACTUALIAZION DEL CUARTO"
        });
      }
      return "Perfectly updated";
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }

  async remove(id: number) {
    try{
      const {affected}=await this.roomRepository.delete(id);
      if(affected==0){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"FALLO LA ELIMINACION DEL CUARTO"
        });
      }
      return "Perfectly deleted";
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }

  }
}
