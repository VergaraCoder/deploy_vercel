import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PlayerModule } from './player/player.module';
import { TournamentModule } from './tournament/tournament.module';
import { TournamentPlayerModule } from './tournament-player/tournament-player.module';
import { GamesModule } from './games/games.module';
import { ResultModule } from './result/result.module';
import { ChampionModule } from './champion/champion.module';

@Module({
  imports: [UserModule, RoleModule, PlayerModule, TournamentModule, TournamentPlayerModule, GamesModule, ResultModule, ChampionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
