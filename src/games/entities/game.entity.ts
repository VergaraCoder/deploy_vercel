import { Player } from "src/player/entities/player.entity";
import { Result } from "src/result/entities/result.entity";
import { Tournament } from "src/tournament/entities/tournament.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("games")
export class Game {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    playerId1:number;

    @Column()
    playerId2:number;

    @Column()
    tournamentId:number;

    @Column()
    round:number;

    @Column()
    date:Date;

    @ManyToOne(()=>Tournament,tournament=>tournament.game)
    tournament:Tournament;

    @ManyToOne(()=>Player,player=>player.game1)
    player1:Player;

    @ManyToOne(()=>Player,player=>player.game2)
    player2:Player;

    @OneToMany(()=>Result,result=>result.game)
    result:Result[];
}
