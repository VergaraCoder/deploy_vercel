import { Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TournamentService {

  constructor(
    @InjectRepository(Tournament)
    private tournamentRepository:Repository<Tournament>
  ){}

  async create(createTournamentDto: CreateTournamentDto) {
    try{
      const dataTournament= this.tournamentRepository.create(createTournamentDto);
      await this.tournamentRepository.save(dataTournament);
      return dataTournament;
    }catch(err:any){}
  }

  async findAll() {
    try{
      const find= await this.tournamentRepository.find();
      return find;
    }catch(err:any){}
  }

  async findOne(id: number) {
    try{
      const findOne= await this.tournamentRepository.findOneBy({id});
      return findOne;
    }catch(err:any){}
  }

  async update(id: number, updateTournamentDto: UpdateTournamentDto) {
    try{
      const {affected}= await this.tournamentRepository.update(id,updateTournamentDto);
      return "Perfectly updated";
    }catch(err:any){}
  }

  async remove(id: number) {
    try{
      const {affected}= await this.tournamentRepository.delete(id);
      return "Perfectly deleted";
    }catch(err:any){}
  }
}
