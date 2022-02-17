import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/entities/Todo.entity';
import { Repository } from 'typeorm';
import { AddTodoDto } from './dto/add-todo.dto';

@Injectable()
export class TodoAppService {

    todos : Todo[]
    constructor( @InjectRepository(Todo) private todoRepository: Repository<Todo>){
        //this.todos = [];
    }

    async getTodos() : Promise<Todo []> {
        //return this.todos;
        return(await this.todoRepository.find());
    }

    async getTodobyId(id : number) : Promise<Todo>{
        /*const todo = this.todos.find( actualTodo => actualTodo.id === id)
        if(todo)
            return todo
        else
            throw new NotFoundException(`le todo de Id ${id} not found`);*/
            return(await this.todoRepository.findOne({id : id}));
        
    }

    async addTodos(newTodo : AddTodoDto) : Promise<Todo>{
        const {description} = newTodo;
        const todo = new Todo;
        todo.description = description;
        return(await this.todoRepository.save(todo));
        //todo.id = (this.todos.length + 1);
        //this.todos.push(todo);
        
    }
    async deleteTodos(id: number) : Promise<any> {
        /*let index = this.todos.findIndex(todo=> todo.id === +id);
        if(index>=0)
            this.todos.splice(index,1)
        else
            throw new NotFoundException(`le todo de Id ${id} not found`);

        return ({
        message: `le todo de Id ${id} a été supprimé avec succes`
        })*/
         return await this.todoRepository.delete({id: id});
    }
    async updateTodos(id: number,newTodo : Partial<Todo>) : Promise<any>{
        /*const todo = this.getTodobyId(id);
        todo.description = newTodo.description ? newTodo.description : todo.description;
        return(todo)*/
        return (await this.todoRepository.update({id:id},newTodo));
        
        
    }
}
