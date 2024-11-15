import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomsService } from 'src/rooms/rooms.service';
import { ManageError } from 'src/common/errors/custom/exception.custom';
import { FilterData } from './filterData/filter.data';
import { NotificationsGateway } from 'src/notifications/notifications.gateway';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository:Repository<Reservation>,
    private roomService:RoomsService,
    private filterData:FilterData,
    private notificationsGateway:NotificationsGateway
  ){}

  async create(createreservationDto: CreateReservationDto) {
    try{  
      console.log("entramos ");
      
      await this.filterData.filterToCreate(createreservationDto);

      const datareservation=this.reservationRepository.create(createreservationDto);
      await this.reservationRepository.save(datareservation);
      await this.roomService.update(datareservation.roomId, {available:false});
      return datareservation;
    }catch(err:any){      
      console.log(err);
           
      if(err.driverError && err.driverError.code=='ER_DUP_ENTRY'){
        throw new ManageError({
          type:"CONFLICT",
          message:"YA LA HABITACION ESTA RESERVADA"
        });
      }
      throw ManageError.signedError(err.message);
    }
  }

  async findAll() {
    try{
      const allreservations=await this.reservationRepository.find();
      if(allreservations.length==0){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"NO HAY RESERVACIONES"
        });
      }
      return allreservations;
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }

  async findOne(id: number) {
    try{
      const onereservation=await this.reservationRepository.findOneBy({id});
      if(!onereservation){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"NO EXISTE ESTA RESERVACION"
        });
      }
      return onereservation;
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }


  async update(id: number, updatereservationDto: UpdateReservationDto) {
    try{
      const {affected}=await this.reservationRepository.update(id,updatereservationDto);
      if(affected==0){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"fALLO LA ACTUALIZACION DE LA RESERVA"
        });
      }
      return "Perfectly updated";
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }

  async remove(id: number) {
    try{
      const dataRoom=await this.filterData.filterToDelete(id);
      const {affected}=await this.reservationRepository.delete(id);
      if(affected==0){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"fALLO LA ELIMINACION DE LA RESERVA"
        });
      }
      await this.roomService.update(dataRoom.id, {available:true});
      this.notificationsGateway.remove({...dataRoom,available:true});
      return "Perfectly deleted";
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }
}
