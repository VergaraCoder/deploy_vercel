import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RoleService } from 'src/role/role.service';
import { Role } from 'src/role/entities/role.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>,
    private roleService:RoleService
  ){}

  async create(createUserDto: CreateUserDto) {
    try{
      const role:Role=await this.roleService.findOneByName(createUserDto.roleName);

      delete createUserDto.roleName;
      console.log(createUserDto);
      
      const dataUser:User=this.userRepository.create({...createUserDto,roleId:role.id});

      await this.userRepository.save(dataUser);

      return dataUser;
    }catch(err:any){}

  }

  async findAll() {
     try{
      const allUser=await this.userRepository.find();
      return allUser;
    }catch(err:any){}
  }

  async findOne(id: number) {
     try{
      const oneUser=await this.userRepository.findOne({where:{id:id}});
      return oneUser;
    }catch(err:any){}
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
     try{
      const {affected}=await this.userRepository.update(id,updateUserDto);
      return "Perfectly updated";
    }catch(err:any){}
  }

  async remove(id: number) {
     try{
      const {affected}=await this.userRepository.delete(id);
      return "Perfectly Deleted";
    }catch(err:any){}
  }
}
