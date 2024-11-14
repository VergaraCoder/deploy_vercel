import { Module } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { ChampionController } from './champion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Champion } from './entities/champion.entity';
import { TournamentModule } from 'src/tournament/tournament.module';
import { PlayerModule } from 'src/player/player.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Champion]),
    TournamentModule,
    PlayerModule
  ],
  controllers: [ChampionController],
  providers: [ChampionService],
  exports:[
    TypeOrmModule
  ]
})
export class ChampionModule {}
