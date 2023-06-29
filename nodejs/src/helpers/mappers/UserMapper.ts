import UserDTO from "../../models/dtos/UserDTO";
import UserEntity from "../../models/entities/UserEntity";

class UserMapper {
  public static toEntity(dto: UserDTO): UserEntity {
    const entity = new UserEntity()
    entity.email = dto.email
    entity.name = dto.name
    entity.lastname = dto.lastname
    entity.birthDate = dto.birthDate
    entity.gender = dto.gender
    entity.biography = dto.biography
    entity.phone = dto.phone
    return entity
  }
  
}

export default UserMapper