import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from './../dto/create-user.dto';
import { User } from './../schemas/user.schema';

@Controller(`/user`)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(`/create`)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
}
