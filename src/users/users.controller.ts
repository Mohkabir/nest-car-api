import { Controller, Body, Post } from '@nestjs/common';
import { UsersDto } from './dtos/create-user.dto';
import { UserService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  signUp(@Body() body: UsersDto) {
    return this.userService.signUp(body.email, body.password);
  }
}
