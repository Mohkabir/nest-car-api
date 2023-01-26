import { IsString, IsEmail } from 'class-validator';

export class UsersDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
