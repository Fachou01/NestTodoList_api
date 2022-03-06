import {IsEnum, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {UserRoleEnum} from "../enums/user-role.enum";

export class UserInscriptionDto{

    @IsNumber()
    @IsNotEmpty()
    id : number

    @IsString()
    @IsNotEmpty()
    password : string
    
    @IsString()
    @IsNotEmpty()
    @IsEnum(UserRoleEnum)
    role : UserRoleEnum
}
