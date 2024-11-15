import { Room } from "src/rooms/entities/room.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("reservations")
@Unique(["roomId"])
export class Reservation {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userId:number;

    @Column()
    roomId:number;

    @Column()
    minutesReserved:number;

    @Column()
    dateReservation:string

    @ManyToOne(()=>User,user=>user.reservation,{eager:true})
    user:User;

    @ManyToOne(()=>Room,room=>room.reservation,{eager:true})
    room:Room;
}
