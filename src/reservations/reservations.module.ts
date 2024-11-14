import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { UserModule } from 'src/user/user.module';
import { RoomsModule } from 'src/rooms/rooms.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Reservation]),
    UserModule,
    RoomsModule
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService],
  exports:[
    TypeOrmModule
  ]
})
export class ReservationsModule {}
