import { Module } from '@nestjs/common';
import { TournamentPlayerService } from './tournament-player.service';
import { TournamentPlayerController } from './tournament-player.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentPlayer } from './entities/tournament-player.entity';
import { PlayerModule } from 'src/player/player.module';
import { TournamentModule } from 'src/tournament/tournament.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([TournamentPlayer]),
    PlayerModule,
    TournamentModule
  ],
  controllers: [TournamentPlayerController],
  providers: [TournamentPlayerService],
  exports:[
    TypeOrmModule
  ]
})
export class TournamentPlayerModule {}
