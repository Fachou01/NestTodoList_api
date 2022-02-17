import {IsString } from "class-validator";

export class AddTodoDto{

    @IsString()
    description : string;
}