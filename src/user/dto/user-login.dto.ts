import {IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserLoginDto{

    @IsNumber()
    @IsNotEmpty()
    id : number
    
    @IsString()
    @IsNotEmpty()
    password : string
    
}