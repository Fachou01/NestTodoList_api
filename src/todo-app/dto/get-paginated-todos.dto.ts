import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class GetPaginatedTodo{

    @IsNumber()
    @IsOptional()
    //@Type(()=>Number)
    page : number;
}