import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CompaignEntity} from "../entities/compaign.entity";
import {AddCompaignDto} from "../todo-app/dto/add-compaign-dto";

@Injectable()
export class ComapignsService {
    constructor(@InjectRepository(CompaignEntity) private compaignRepository: Repository<CompaignEntity>) {
    }
//Affichage de tous les compaigns
    async getCompaign() : Promise<CompaignEntity []> {
        //return this.todos;
        return(await this.compaignRepository.find());
    }
//Ajouter un compaign
    async addCompaign(newcompaign : AddCompaignDto) : Promise<CompaignEntity>{

        return await this.compaignRepository.save(newcompaign);

    }
//Modifier un compaign
    async updateCompaign(id: number,newCompaign : Partial<CompaignEntity>) : Promise<any>{
        return (await this.compaignRepository.update({idCompaign:id},newCompaign));
    }
//Supprimer un compaign
    async deleteCompaign(id: number) : Promise<any> {
                return await this.compaignRepository.delete({idCompaign: id});
    }

}
