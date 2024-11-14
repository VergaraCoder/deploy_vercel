import { Champion } from "src/champion/entities/champion.entity";
import { Game } from "src/games/entities/game.entity";
import { TournamentPlayer } from "src/tournament-player/entities/tournament-player.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tournaments")
export class Tournament {
    @PrimaryGeneratedColumn()
    id:number;

    
    @Column()
    name:string;

    @Column()
    quantityPeople:number;

    @Column()
    currentNumberParticipants:number;

    @Column()
    endStart:Date;

    @Column()
    dateLimitIncription:Date;

    @OneToMany(()=>TournamentPlayer,tournamentPlayer=>tournamentPlayer.tournament)
    tournamentPlayer:TournamentPlayer[];

    @OneToMany(()=>Game,game=>game.tournament)
    game:Game[];

    @OneToMany(()=>Champion,champion=>champion.tournament)
    champion:Game[];
}
