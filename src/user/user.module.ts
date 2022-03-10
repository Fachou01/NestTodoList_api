import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { config } from 'src/orm.config';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import * as dotenv from 'dotenv'
import { JwtStrategy } from 'src/user/auth/jwt.strategy';
import { AddPermissionGuard } from './auth/add-permission.guard';

dotenv.config();
@Module({
  imports : [
  TypeOrmModule.forRoot(config),
  TypeOrmModule.forFeature([User]),
  PassportModule.register({
    defaultStrategy : 'jwt'
  }),
  JwtModule.register({
    secret : process.env.SECRET
  })
  ],

  controllers: [UserController],
  providers: [UserService,JwtStrategy,AddPermissionGuard]
})
export class UserModule {}
