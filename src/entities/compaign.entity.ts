import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity('compaign')
export class CompaignEntity{
    @PrimaryColumn()
    idCompaign: number;
    @Column()
    nameCompaign: string;
}
