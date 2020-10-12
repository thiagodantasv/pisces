import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './../schemas/user.schema';
import { CreateUserDto } from './../dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

  async createUser(newUser: CreateUserDto): Promise<User> {
    console.log(`Creating a new user: \n${JSON.stringify(newUser)}`);
    const createdUser = await new this.userModel(newUser);
    return createdUser.save();
  }
}
