import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './dto/create-user.request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() body: CreateUserRequest) {
    return this.appService.createUser(body);
  }
}
