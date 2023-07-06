import { Gender } from "../types";

class UserDTO {
  id: string;
  email: string;
  name: string;
  lastname: string;
  birthDate: Date;
  gender: Gender;
  biography: string;
  phone: string;

  constructor() {}
}

export default UserDTO;
