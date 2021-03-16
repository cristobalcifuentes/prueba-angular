import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UserDto) {
    return `This action updates a #${id} user, body: ${updateUserDto.username}`;
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id}`;
  }
}
