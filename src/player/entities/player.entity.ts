import { Champion } from "src/champion/entities/champion.entity";
import { Game } from "src/games/entities/game.entity";
import { Result } from "src/result/entities/result.entity";
import { TournamentPlayer } from "src/tournament-player/entities/tournament-player.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("players")
export class Player {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nickName:string;

    @Column()
    age:number;

    @OneToMany(()=>TournamentPlayer,tournamentPlayer=>tournamentPlayer.player)
    tournamentPlayer:TournamentPlayer[];

    @OneToMany(()=>Result,result=>result.player)
    result:Result[];

    @OneToMany(()=>Champion,champion=>champion.player)
    champion:Champion[];

    @OneToMany(()=>Game,game=>game.player1)
    game1:Champion[];

    @OneToMany(()=>Game,game=>game.player2)
    game2:Champion[];



}
