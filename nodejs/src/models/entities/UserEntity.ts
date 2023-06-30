import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Gender, ThirdPartyApp } from "../types";

@Entity("users")
class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ unique: true })
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
  gender: Gender;
  @Column({ nullable: true })
  photo: string;
  @Column({ nullable: true })
  biography: string;
  @Column()
  phone: string;
  @Column({ update: false, default: "Default" })
  thirdPartyApp: ThirdPartyApp;
  @Column({ update: false, default: "NodeJS" })
  framework: string;

  constructor() {}
}

export default UserEntity;
