import {IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserInscriptionDto{

    @IsNumber()
    @IsNotEmpty()
    id : number

    @IsString()
    @IsNotEmpty()
    password : string
    
    @IsString()
    @IsNotEmpty() 
    role : string
}