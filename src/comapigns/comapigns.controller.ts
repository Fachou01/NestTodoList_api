import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
    Req,
    Res,
    UseGuards
} from '@nestjs/common';
import {ComapignsService} from "./comapigns.service";
import {JwtAuthGuard} from "../user/auth/jwt-auth.guard";
import {Request, Response} from "express";
import {GetPaginatedTodo} from "../todo-app/dto/get-paginated-todos.dto";
import {AddCompaignDto} from "../todo-app/dto/add-compaign-dto";
import {CompaignEntity} from "../entities/compaign.entity";

@Controller('compaign')
export class ComapignsController {
    constructor(private compaignService : ComapignsService) {}

    //@UseGuards(JwtAuthGuard)
    @Get('getall')
    async getCompaigns(@Req() request : Request, @Res() response : Response, @Query() query: GetPaginatedTodo ) : Promise<any> {
        response.json(await this.compaignService.getCompaign());
    }
    //@UseGuards(JwtAuthGuard)
    @Post('add')
    async addTodo(@Body() newC : AddCompaignDto) : Promise<CompaignEntity>{
        //console.log(newTodo);
        console.log(newC);
        return await this.compaignService.addCompaign(newC);
    }
    //@UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async deleteTodo(@Req() request : Request, @Res() response : Response , @Param('id',ParseIntPipe) id, ) : Promise<any>{
        response.json(await this.compaignService.deleteCompaign(id));
    }
    //@UseGuards(JwtAuthGuard)
    @Put("update/:id")
    async updateTodo(
        @Req() request : Request,
        @Res() response : Response ,
        @Param('id',ParseIntPipe)id,
        @Body() compaign : Partial<AddCompaignDto> ) : Promise<any>{
        console.log(typeof id);
        response.json(await  this.compaignService.updateCompaign(id,compaign));
    }
}
