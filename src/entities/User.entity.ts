import { UserRoleEnum } from "src/user/enums/user-role.enum";
import { Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm"

@Entity('user')
export class User{
    @PrimaryColumn()
    id:number
    @Column()
    password : string
    @Column()
    role : string
    @CreateDateColumn()
    createdAt : Date;
}