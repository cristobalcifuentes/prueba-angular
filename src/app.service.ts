import { Injectable } from '@nestjs/common';
import * as data from './assets/users.json'
import { User } from './interfaces/user.interface';

@Injectable()
export class AppService {

  private users: User[];

  constructor(){
    this.users = data as User[];
  }
  getHello(): User[] {
    return this.users;
  }
}
