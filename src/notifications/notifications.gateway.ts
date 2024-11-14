import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class NotificationsGateway {
  constructor(private readonly notificationsService: NotificationsService) {}

  @WebSocketServer()
  server:Server

  @SubscribeMessage('createNotification')
  create(@MessageBody() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.create(createNotificationDto);
  }

  @SubscribeMessage('findAllNotifications')
  findAll() {
    return this.notificationsService.findAll();
  }

  @SubscribeMessage('findOneNotification')
  findOne(@MessageBody() id: number) {
    return this.notificationsService.findOne(id);
  }

  @SubscribeMessage('updateNotification')
  update(@MessageBody() updateNotificationDto: UpdateNotificationDto) {
    return this.notificationsService.update(updateNotificationDto.id, updateNotificationDto);
  }

  @SubscribeMessage('removeNotification')
  remove(@MessageBody() id: string, @ConnectedSocket() client: Socket,) {
    const event="hola";
    const data="HOla desde el back ened"
    return {event,data}
  }
}
