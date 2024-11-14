import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PlayerModule } from './player/player.module';
import { TournamentModule } from './tournament/tournament.module';
import { TournamentPlayerModule } from './tournament-player/tournament-player.module';
import { GamesModule } from './games/games.module';
import { ResultModule } from './result/result.module';
import { ChampionModule } from './champion/champion.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Credentials } from './common/db/db.config';
import { RoomsModule } from './rooms/rooms.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:".env"
    })
    ,
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useClass:Credentials
    })
    ,UserModule, RoleModule, PlayerModule, TournamentModule, TournamentPlayerModule, GamesModule, ResultModule, ChampionModule, RoomsModule,NotificationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
