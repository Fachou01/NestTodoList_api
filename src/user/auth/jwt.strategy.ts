import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as dotenv from 'dotenv'
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: any) {
    console.log(payload);
    const user = await this.userRepository.findOne({
            id : payload.id,
            //password : payload.password,
            role : payload.role
        });
        if(user){
            const {password,...result} = user;
            return(result);
        }
        else{
            throw new UnauthorizedException;
        }
  }
}
