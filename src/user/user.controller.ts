import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/user/auth/jwt-auth.guard';
import { UserInscriptionDto } from './dto/user-inscription.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get('getall')
    async getAllUsers(@Req() request : Request , @Res() response : Response) : Promise<any>{
        response.json(await this.userService.getAllUsers());
    }

    @Post('add')
    async addUser(@Req() request : Request , @Res() response : Response , @Body() newUser : UserInscriptionDto) : Promise<any>{
        response.json(await this.userService.addUser(newUser));
    }

    @Post('login')
    async loginUser(@Req() request : Request , @Res() response : Response , @Body() user : UserLoginDto) :Promise<any>{
        response.json(await this.userService.loginUser(user));
    }


}
