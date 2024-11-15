import { NotificationsGateway } from 'src/notifications/notifications.gateway';
import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { UserModule } from 'src/user/user.module';
import { RoomsModule } from 'src/rooms/rooms.module';
import { FilterData } from './filterData/filter.data';
import { NotificationsModule } from 'src/notifications/notifications.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Reservation]),
    UserModule,
    RoomsModule,
    NotificationsModule
  ],
  controllers: [ReservationsController],
  providers: [
    ReservationsService,
    FilterData
  ],
  exports:[
    TypeOrmModule
  ]
})
export class ReservationsModule {}
