import UserDTO from "../../models/dtos/UserDTO";
import UserEntity from "../../models/entities/UserEntity";

class UserMapper {
  public static toEntity(dto: UserDTO): UserEntity {
    const entity = new UserEntity();
    entity.email = dto.email;
    entity.name = dto.name;
    entity.lastname = dto.lastname;
    entity.birthDate = dto.birthDate;
    entity.gender = dto.gender;
    entity.biography = dto.biography;
    entity.phone = dto.phone;
    return entity;
  }

  public static toDTO(entity: UserEntity): UserDTO {
    const dto = new UserDTO();
    dto.email = entity.email;
    dto.name = entity.name;
    dto.lastname = entity.lastname;
    dto.birthDate = entity.birthDate;
    dto.gender = entity.gender;
    dto.photo = entity.photo;
    dto.biography = entity.biography;
    dto.phone = entity.phone;
    return dto;
  }
}

export default UserMapper;
