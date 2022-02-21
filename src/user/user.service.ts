import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import { UserInscriptionDto } from './dto/user-inscription.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Injectable()
export class UserService {

    constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
    ){}

    async getAllUsers() : Promise<User[]>{
        return(await this.userRepository.find());
    }

    async addUser(newUser : UserInscriptionDto) : Promise<User>{
        const {id,password,role} = newUser;
        const user = new User;
        user.id = id;
        user.password = password;
        user.role = role;
        return(await this.userRepository.save(user));
    }

    async loginUser(user : UserLoginDto){
        const userRequest = await this.userRepository.findOne({
            id : user.id,
            password : user.password
        });
        console.log(userRequest);
        if(!userRequest){
            console.log("user not found !");
             return({
                "message" : "user or password is invalid !"
            })
            
        }else{
            const payload = {
                id: userRequest.id,
                password : userRequest.password,
                role : userRequest.role
            }
            const jwt_token= this.jwtService.sign(payload);
            return({
                "access_token" : jwt_token,
                "role" : userRequest.role
            })
        }
    }
}
