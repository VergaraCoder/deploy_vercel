import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomsService } from 'src/rooms/rooms.service';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository:Repository<Reservation>,
    private roomService:RoomsService
  ){}

  async create(createreservationDto: CreateReservationDto) {
    try{     
      const datareservation=this.reservationRepository.create(createreservationDto);
      await this.reservationRepository.save(datareservation);
      return datareservation;
    }catch(err:any){     
      if(err.driverError.code=='ER_DUP_ENTRY'){
        console.log("EFECTIVAMENTE");
        return "Esta habitacion ya esta reservada";
      }
    }
  }

  async findAll() {
    try{
      const allreservations=await this.reservationRepository.find();
      return allreservations;
    }catch(err:any){}
  }

  async findOne(id: number) {
    try{
      const onereservation=await this.reservationRepository.findOneBy({id});
      return onereservation;
    }catch(err:any){}
  }

  async update(id: number, updatereservationDto: UpdateReservationDto) {
    try{
      const {affected}=await this.reservationRepository.update(id,updatereservationDto);
      return "Perfectly updated";
    }catch(err:any){}
  }

  async remove(id: number) {
    try{
      const {affected}=await this.reservationRepository.delete(id);
      return "Perfectly deleted";
    }catch(err:any){}
  }
}
