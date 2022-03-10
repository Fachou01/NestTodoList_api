import { UserRoleEnum } from '../user/enums/user-role.enum';
import { Column, CreateDateColumn, Entity, IsNull, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryColumn()
  id: number;
  @Column()
  password: string;
  @Column({
    nullable: true,
})
  firstName: string;

   @Column({
    nullable: true,
})
  addPermission: string;

  @Column(
      {
      nullable : true,
      type : "enum",
      enum : UserRoleEnum
      }
  )
  role: UserRoleEnum;
  @CreateDateColumn()
  createdAt: Date;
}
