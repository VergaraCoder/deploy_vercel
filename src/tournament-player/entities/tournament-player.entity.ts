import { Player } from "src/player/entities/player.entity";
import { Tournament } from "src/tournament/entities/tournament.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("tournamentPlayers")
export class TournamentPlayer {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    playerId:number;

    @Column()
    tournamentId:number;

    @Column()
    score:number;

    @ManyToOne(()=>Tournament,tournament=>tournament.tournamentPlayer)
    tournament:Tournament;

    @ManyToOne(()=>Player,player=>player.tournamentPlayer)
    player:Player;


}
