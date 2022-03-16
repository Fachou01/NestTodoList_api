import {IsDate, IsEnum, IsNotEmpty, IsNumber, isString, IsString} from "class-validator";
import {UserRoleEnum} from "../enums/user-role.enum";

export class UserInscriptionDto{

    @IsNumber()
    @IsNotEmpty()
    id : number

    @IsString()
    firstName: string 

    @IsString()
    addPermission: string 

    @IsString()
    @IsNotEmpty()
    password : string
    
    @IsString()
    @IsNotEmpty()
    @IsEnum(UserRoleEnum)
    role : UserRoleEnum

    createdAt: Date;

}
