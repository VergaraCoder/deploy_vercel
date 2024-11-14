import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { PlayerModule } from 'src/player/player.module';
import { TournamentModule } from 'src/tournament/tournament.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Game]),
    PlayerModule,
    TournamentModule
  ],
  controllers: [GamesController],
  providers: [GamesService],
  exports:[
    TypeOrmModule
  ]
})
export class GamesModule {}
