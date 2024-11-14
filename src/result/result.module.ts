import { Module } from '@nestjs/common';
import { ResultService } from './result.service';
import { ResultController } from './result.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './entities/result.entity';
import { PlayerModule } from 'src/player/player.module';
import { GamesModule } from 'src/games/games.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Result]),
    PlayerModule,
    GamesModule
  ],
  controllers: [ResultController],
  providers: [ResultService],
  exports:[
    TypeOrmModule
  ]
})
export class ResultModule {}
