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

    @ManyToOne(()=>User,user=>user.reservation)
    user:User;

    @ManyToOne(()=>Room,room=>room.reservation)
    room:Room;
}
