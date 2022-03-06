import {IsNumber, IsString} from "class-validator";

export class AddCompaignDto{
    @IsNumber()
    idCompaign : number;
    @IsString()
    nameCompaign : string;

}
