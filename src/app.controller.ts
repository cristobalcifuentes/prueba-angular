import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(): User[] {
    return this.appService.getHello();
  }

  @Post('add')
  createUser(@Body() createUser: UserDto) : any {
    return {result: 'Ok', message: 'Usuario insertado con exito'};
  }
}
