import { Player } from "src/player/entities/player.entity";
import { Tournament } from "src/tournament/entities/tournament.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("champion")
export class Champion {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    tournamentId:number;

    @Column()
    playerId:number;

    @ManyToOne(()=>Tournament,tournament=>tournament.champion)
    tournament:Tournament;

    @ManyToOne(()=>Player,player=>player.champion)
    player:Player;
}
