import { Reservation } from 'src/reservations/entities/reservation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity("rooms")
export class Room {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    capacity:number;

    @Column()
    price:number;

    @Column()
    description:string;

    @Column()
    location:string;

    @Column()
    available:boolean;

    @OneToMany(()=>Reservation,reservation=>reservation.room)
    reservation:Reservation[];
}
