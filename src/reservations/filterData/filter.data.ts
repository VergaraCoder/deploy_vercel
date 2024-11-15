import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { CreateReservationDto } from "../dto/create-reservation.dto";
import { ReservationsService } from "../reservations.service";
import { ManageError } from "src/common/errors/custom/exception.custom";


@Injectable()
export class FilterData {

    constructor(
        @Inject(forwardRef(()=>ReservationsService)) private reservationService:ReservationsService
    ){}

    async filterToDelete(id:number){
        const currentDate=new Date();
        const dataOfReservation= await this.reservationService.findOne(id);
        const dateReservation= new Date(dataOfReservation.dateReservation);
        
        if(dateReservation.getHours()+5 == currentDate.getHours() ){ 
            throw new ManageError({
                type:"CONFLICT",
                message:"NO PUEDES CANCELAR EL CUERTO EN LA MISMA HORA DE LA RESERVA"
            });
        }
        return dataOfReservation.room;
    }


    async filterToCreate(data:CreateReservationDto){
        const dateReservation= new Date(data.dateReservation);

        if(dateReservation.getMinutes() >= 45){
            throw new ManageError({
                type:"CONFLICT",
                message:"NO PUEDES RESERVAR 15 MINUTOS ANTES DE UNA HORA EXACTA"
            });
        }
        return true;
    }
}