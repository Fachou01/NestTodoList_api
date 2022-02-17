import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('todo')
export class Todo{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    description : string
    @CreateDateColumn()
    createdAt : Date;
}