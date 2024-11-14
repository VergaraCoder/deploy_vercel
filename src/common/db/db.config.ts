import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Champion } from "src/champion/entities/champion.entity";
import { Game } from "src/games/entities/game.entity";
import { Player } from "src/player/entities/player.entity";
import { Result } from "src/result/entities/result.entity";
import { Role } from "src/role/entities/role.entity";
import { Room } from "src/rooms/entities/room.entity";
import { TournamentPlayer } from "src/tournament-player/entities/tournament-player.entity";
import { Tournament } from "src/tournament/entities/tournament.entity";
import { User } from "src/user/entities/user.entity";



@Injectable()
export class Credentials implements TypeOrmOptionsFactory{

    constructor(
        private configService:ConfigService
    ){}

    createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return({
            type: 'mysql',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USERNAME'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_DATABASE'),
            entities: [
              User,Player,Tournament,TournamentPlayer,Role,Game,Result,Champion,Room
            ],
            synchronize: true,
        });
    }
}