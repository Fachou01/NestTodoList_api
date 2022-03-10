import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, Res, UseGuards} from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/user/auth/jwt-auth.guard';
import { UserInscriptionDto } from './dto/user-inscription.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserService } from './user.service';
import {AddCompaignDto} from "../todo-app/dto/add-compaign-dto";
import { AddPermissionGuard } from './auth/add-permission.guard';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get('getall')
    async getAllUsers(@Req() request : Request , @Res() response : Response) : Promise<any>{
        response.json(await this.userService.getAllUsers());
    }

    @UseGuards(JwtAuthGuard)
    @Get('getbyid/:id')
    async getUserById(@Res() response : Response, @Param('id' , ParseIntPipe) id : number) : Promise<any>{
        response.json(await this.userService.getUserById(id));
    }

    
    @UseGuards(JwtAuthGuard)
    @Get('getconnecteduser')
    getConnecteduser(@Req() request : Request,@Res() response : Response) : any{
       response.json(request.user);
    }

    @UseGuards(JwtAuthGuard,AddPermissionGuard)
    @Post('add')
    async addUser(@Req() request : Request , @Res() response : Response , @Body() newUser : UserInscriptionDto) : Promise<any>{
        response.json(await this.userService.addUser(newUser));
    }

    @Post('login')
    async loginUser(@Req() request : Request , @Res() response : Response , @Body() user : UserLoginDto) :Promise<any>{
        response.json(await this.userService.loginUser(user));
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async deleteTodo(@Req() request : Request, @Res() response : Response , @Param('id',ParseIntPipe) id, ) : Promise<any>{
        response.json(await this.userService.deleteUser(id));
    }

    @UseGuards(JwtAuthGuard)
    @Put("update/:id")
    async updateTodo(
        @Req() request : Request,
        @Res() response : Response ,
        @Param('id',ParseIntPipe) id,
        @Body() user : Partial<UserInscriptionDto> ) : Promise<any>{
        console.log(typeof id);
        response.json(await  this.userService.updateUser(id,user));
    }
}
