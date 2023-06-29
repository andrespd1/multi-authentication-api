import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({unique: true})
  email: string;
  @Column()
  password: string;
  @Column()
  name: string;
  @Column()
  lastname: string;
  @Column()
  birthDate: Date;
  @Column()
  gender: string;
  @Column({nullable: true})
  photo: string;
  @Column({nullable: true})
  biography: string;
  @Column()
  phone: string
  @Column({update: false, default: "Default"})
  thirdPartyApp: string
  @Column({update: false, default: "NodeJS"})
  framework: string;

  constructor() {
  }

}

export default UserEntity