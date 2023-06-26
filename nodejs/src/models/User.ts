import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({unique: true})
  email: string;
  @Column()
  password:  string;
  @Column()
  name: string;
  @Column()
  lastname: string;
  @Column()
  birthDate: Date;
  @Column()
  gender: string;
  @Column()
  photo: string;
  @Column({nullable: true})
  biography: string;
  @Column()
  phone: string
  @Column({update: false})
  thirdPartyApp: string
  @Column({update: false, default: "NodeJS"})
  framework: string;

  constructor(email: string, password: string, name: string, lastname: string, birthDate: Date, gender: string, photo: string, biography: string, phone: string, thirdPartyApp: string) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.lastname = lastname;
    this.birthDate = birthDate;
    this.gender = gender;
    this.photo = photo;
    this.biography = biography;
    this.phone = phone;
    this.thirdPartyApp = thirdPartyApp;
    this.framework = "NodeJS";
  }
}
export default User