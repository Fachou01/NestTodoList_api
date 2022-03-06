import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Res, UseGuards} from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/user/auth/jwt-auth.guard';
import { Todo } from '../entities/Todo.entity';
import { AddTodoDto } from './dto/add-todo.dto';
import { GetPaginatedTodo } from './dto/get-paginated-todos.dto';
import { TodoAppService } from './todo-app.service';

@Controller('todos')
export class TodoAppController {

    todos : Todo[] ;    
    constructor(private readonly todoService: TodoAppService) {}
    
    @UseGuards(JwtAuthGuard)
    @Get('getall')
    async getTodos(@Req() request : Request, @Res() response : Response, @Query() query: GetPaginatedTodo ) : Promise<any> {
        response.json(await this.todoService.getTodos());
        /*console.log(query);
        console.log(query.page)*/
    }
    @Get('gettodo/:id')
    async getTodoById(@Req() request : Request, @Res() response : Response , @Param('id',ParseIntPipe) id, ) : Promise<any>{
        response.json(await this.todoService.getTodobyId(id));
    }

    @Post('add')
    async addTodo(@Body() newTodo : AddTodoDto) : Promise<Todo>{
        //console.log(newTodo);
        console.log(newTodo);
        return await this.todoService.addTodos(newTodo);
    }
    @Delete('delete/:id')
    async deleteTodo(@Req() request : Request, @Res() response : Response , @Param('id',ParseIntPipe) id, ) : Promise<any>{
        response.json(await this.todoService.deleteTodos(id));
    }
    @Put("update/:id")
    async updateTodo(
        @Req() request : Request, 
        @Res() response : Response , 
        @Param('id',ParseIntPipe)id,
        @Body() todo : Partial<AddTodoDto> ) : Promise<any>{
        console.log(typeof id);
        response.json(await  this.todoService.updateTodos(id,todo));
    }


}


