import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    available:boolean;

    @Column()
    location:string;
}
