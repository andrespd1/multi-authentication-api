import { Gender } from "../types";

class UserDTO {
  id: string;
  email: string;
  name: string;
  lastname: string;
  birthDate: Date;
  gender: Gender;
  photo: string;
  biography: string;
  phone: string;

  constructor() {}
}

export default UserDTO;
