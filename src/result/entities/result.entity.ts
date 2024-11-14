import { Game } from "src/games/entities/game.entity";
import { Player } from "src/player/entities/player.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("results")
export class Result {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    gameId:number;

    @Column()
    winnerId:number;

    @ManyToOne(()=>Game,game=>game.result)
    game:Game;

    @ManyToOne(()=>Player,player=>player.result)
    player:Player;
}
